import React, {useEffect, useState, Fragment} from 'react';
import FoodShareStepper from "./reusable/Stepper";
import Banner from "./reusable/banner/Banner";
import {Link, useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import firebase from "../firebase";
import format from "date-fns/format";
import FoodShareMap from "./reusable/map/Map";
import FoodShareDatePicker from "./reusable/DatePicker";
import CalculateStarRating from "../services/calculate-star-rating";
import parse from "html-react-parser";
import FoodShareDialog from "./reusable/dialog/Dialog";
import FoodShareToast from "./reusable/Toast";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PickUp() {
    const [activeStep, setActiveStep] = useState(0);
    const [pickupDate, setPickupDate] = useState(null);
    const [pickupRestaurant, setPickupRestaurant] = useState(null);
    const [pickupMessage, setPickupMessage] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [isMessageDialogVisible, setIsMessageDialogVisible] = useState(false);
    const query = useQuery();
    const history = useHistory();

    const handleStepChange = (step) => {
        if (step === 2 && isUsingDefaultMessage()) {
            setIsMessageDialogVisible(true);
        } else {
            setActiveStep(step);
        }
    };

    const handleStepReset = () => {
        setPickupMessage('');
        setPickupRestaurant(null);
        setPickupDate(null);
        resetRestaurants();
        history.replace('/pick-up');
    }

    const resetRestaurants = () => {
        const resettedRestaurants = restaurants.map(rest => ({
            ...rest,
            readyForPickup: false
        }));

        setRestaurants(resettedRestaurants);
    }

    const handleQueryStrings = async () => {
        const date = query.get('date');
        const restaurantId = query.get('restaurant');

        date && setPickupDate(getMatchingDate(date));
        restaurantId && setPickupRestaurant(getMatchingRestaurant(restaurantId));
        date && restaurantId && setActiveStep(1);

        const response = await getRestaurants();
        const restaurants = response.map(rest => ({
            ...rest,
            readyForPickup: rest.id === Number(restaurantId) || false
        }));

        setRestaurants(restaurants);
    };

    const getMatchingDate = (date) => {
        return format(Number(date), 'MMM dd, yyyy');
    };

    const getMatchingRestaurant = (restaurantId) => {
        firebase.firestore()
            .collection('restaurants')
            .where('id', '==', Number(restaurantId))
            .get()
            .then(async snapshot => {
                const data = snapshot.docs.map(document => document.data());
                const location = await getMatchingRestaurantLocation((data[0] && data[0].location) || null);

                setPickupRestaurant({
                    ...data[0],
                    ...(location && {
                        location: location[0]
                    })
                });
            })
    };

    const getMatchingRestaurantLocation = (restaurantLocation) => {
        return firebase.firestore()
            .collection('locations')
            .where('id', '==', Number(restaurantLocation))
            .get()
            .then(snapshot => snapshot.docs.map(document => document.data()))
    };

    const getRestaurants = () => {
        return firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .get()
            .then(snapshot => snapshot.docs.map(document => document.data()));
    };

    const handleReadyForPickupChange = async (event, restaurant) => {
        const {id: restaurantId} = restaurant;

        event.persist();

        const updatedRestaurants = restaurants.map(restaurant => ({
            ...restaurant,
            readyForPickup: restaurant.id === restaurantId ? event.target.checked : false
        }));
        const location = await getMatchingRestaurantLocation(restaurant.location || null);
        const updatedRestaurant = {
            ...restaurant,
            ...(location && {
                location: location[0]
            })
        }
        setRestaurants(updatedRestaurants);
        setPickupRestaurant(event.target.checked ? updatedRestaurant : null);
    };

    const onPickupCommentChange = (event) => {
        event.persist();

        setPickupMessage(event.target.value);
    }

    const onDateChange = (value) => {
        const date = value ? format(value, 'MMM dd, yyyy') : null;

        setPickupDate(date);
    }

    const handleMessageDialogConfirm = () => {
        setActiveStep(2);
        setPickupMessage(DEFAULT_MESSAGE);
        handleMessageDialogClose();
    }

    const handleMessageDialogClose = () => {
        setIsMessageDialogVisible(false);
    }

    const isUsingDefaultMessage = () => {
        return pickupMessage === '' || pickupMessage === DEFAULT_MESSAGE;
    }

    useEffect(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        (async function asyncFn() {
            await handleQueryStrings();
        })();
    }, []);

    const DEFAULT_MESSAGE = `Greetings, \n
This is PLACEHOLDER contacting you. We've come across one of your listings and noticed that the ${pickupRestaurant && pickupRestaurant.name} restaurant is available for pick-up on ${pickupDate && pickupDate}. If the date works for you, we'd very much like to come collect any food you can dispose of. Don't worry about the logistics, we need merely only your approval and we'll handle the rest!`


    const getStepOne = () => {
        return (
            <div className="pickup-step-one-container">
                <div className="d-flex align-items-center mb-4">
                    <h5 style={{marginBottom: '-9px'}} className="mr-4">Desired date</h5>
                    <FoodShareDatePicker placeholder="Available on" value={pickupDate} onChange={onDateChange}/>
                </div>
                <FoodShareMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=places`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `500px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    markers={restaurants}
                    togglePickup
                    onTogglePickup={handleReadyForPickupChange}
                />
            </div>
        );
    };

    const getStepTwo = () => {
        return (
            <Fragment>
                {pickupRestaurant && <div className="p-2">
                    <div className="form-group focused">
                        <label htmlFor="description">Message</label>
                        <textarea rows="10" className="form-control shadow-soft" id="description"
                                  placeholder={DEFAULT_MESSAGE}
                                  onChange={onPickupCommentChange}
                                  value={pickupMessage}>
                    </textarea>
                    </div>
                </div>
                }
            </Fragment>
        );
    };

    const getStepThree = () => {
        return (
            <Fragment>
                {(pickupRestaurant && pickupRestaurant.location && pickupDate && pickupMessage) && (
                    <div className="row mt-2">

                        <div className="col-lg-4">
                            <div className="card shadow-soft border p-4 mb-4">
                                <div className="form-group focused">
                                    <label htmlFor="firstname">Name</label>
                                    <input type="text" value={pickupRestaurant.name}
                                           className="form-control shadow-soft"
                                           id="firstname" placeholder="Space title" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card shadow-soft border p-4 mb-4">
                                <div className="form-group focused">
                                    <label htmlFor="location">Address</label>
                                    <input type="text" value={pickupRestaurant.address}
                                           className="form-control shadow-soft"
                                           id="address" readOnly/>
                                </div>
                                <div className="form-group focused">
                                    <label htmlFor="location">Address</label>
                                    <input type="text" value={pickupRestaurant.address}
                                           className="form-control shadow-soft"
                                           id="address" readOnly/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card shadow-soft border p-4 mb-4">
                                <div className="form-group focused">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" value={pickupRestaurant.location.name}
                                           className="form-control shadow-soft"
                                           id="location" readOnly/>
                                </div>
                                <div className="form-group focused">
                                    <span className="d-block mb-2 font-small">Rating</span>
                                    {parse(CalculateStarRating(pickupRestaurant.rating))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow-soft border p-4 mb-4">
                                <textarea rows="10" className="form-control shadow-soft"
                                          readOnly
                                          value={pickupMessage}
                                />
                            </div>
                        </div>

                    </div>
                )}
            </Fragment>
        );
    };

    return (
        <main>
            <FoodShareToast message="Your pick-up request has been successfully registered!"/>
            <FoodShareDialog
                title="A notice regarding your message"
                visible={isMessageDialogVisible}
                onConfirm={handleMessageDialogConfirm}
                onClose={handleMessageDialogClose}
            >
                <div>
                    <p>You are about to submit a Pick-Up request with the default system message.
                        Some restaurants might appreciate if you spent a little more time adding a
                        personal flavor to your request.
                    </p>
                    <p className="mb-2">Are you certain you wish to proceed?</p>
                </div>
            </FoodShareDialog>
            <Banner
                subtitle="You are now viewing a single restaurant listing. You are about to discover a cohesive description
                 the owner has made available, the reviews the other organisation have left in regards to this listing, as well as all amenities
                 that set this restaurant apart from others. A location tool for simplicity is also available."
            >
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Typography color="textPrimary">Schedule Pick-Up</Typography>
            </Banner>

            <div className="section pt-5" style={{backgroundColor: '#fefcff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3 ml-lg-0">
                            <FoodShareStepper
                                activeStep={activeStep}
                                stepOneContent={getStepOne()}
                                stepTwoContent={getStepTwo()}
                                stepThreeContent={getStepThree()}
                                canProceedToStepTwo={!!(pickupDate && pickupRestaurant)}
                                canProceedToStepThree
                                onStepChange={handleStepChange}
                                onReset={handleStepReset}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
