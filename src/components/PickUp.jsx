import React, {useEffect, useState} from 'react';
import FoodShareStepper from "./misc/Stepper";
import Banner from "./misc/banner/Banner";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import firebase from "../firebase";
import format from "date-fns/format";
import FoodShareMap from "./misc/map/Map";
import FoodShareDatePicker from "./misc/DatePicker";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PickUp() {
    const [activeStep, setActiveStep] = useState(0);
    const [pickupDate, setPickupDate] = useState(null);
    const [pickupRestaurant, setPickupRestaurant] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const query = useQuery();

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

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
            .then(snapshot => {
                const data = snapshot.docs.map(document => document.data());

                setPickupRestaurant(data[0] || null);
            })
    };

    const getRestaurants = () => {
        return firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .get()
            .then(snapshot => snapshot.docs.map(document => document.data()));
    };

    const handleReadyForPickupChange = (event, restaurantId) => {
        event.persist();

        console.log('here', event.target.checked);
        const updatedRestaurants = restaurants.map(restaurant => ({
            ...restaurant,
            readyForPickup: restaurant.id === restaurantId ? event.target.checked : false
        }));
        const matchingRestaurant = updatedRestaurants.find(({id}) => Number(restaurantId));

        setRestaurants(updatedRestaurants);
        // setPickupRestaurant(matchingRestaurant.readyForPickup ? matchingRestaurant : null);
        // ????
    };

    const onDateChange = (value) => {
        const date = value ? format(value, 'MMM dd, yyyy') : null;

        setPickupDate(date);
    }

    useEffect(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        (async function asyncFn() {
            await handleQueryStrings();
        })();
    }, []);


    console.log(pickupRestaurant);

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
            <div className="p-2">
                <h5 className="mb-4">General information</h5>
                <div className="form-group focused">
                    <label htmlFor="firstname">Name</label>
                    <input type="text" value="L'atelier Vancouver Coworking" className="form-control shadow-soft"
                           id="firstname" placeholder="Space title" readOnly/>
                </div>
                <div className="form-group focused">
                    <label htmlFor="location">Location</label>
                    <input type="text" value="26, Vancouver, BC, Canada - 324578" className="form-control shadow-soft"
                           id="location" placeholder="Search for location" required=""/>
                </div>
                <div className="form-group focused">
                    <label htmlFor="description">Description</label>
                    <textarea rows="10" className="form-control shadow-soft" id="description" placeholder="Description"
                              onChange={() => 5}
                              value="L'atelier is the brainchild of 3 innovative guys that want to create a working hub for the local community.
                               The plan is to offer a cool place to hang out with other creative souls and let the brainwaves go berserk.">
                    </textarea>
                </div>
            </div>
        );
    };

    return (
        <main>
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

            <div className="section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-3 ml-lg-0">
                            <FoodShareStepper
                                activeStep={activeStep}
                                stepOneContent={getStepOne()}
                                stepTwoContent={getStepTwo()}
                                stepThreeContent={<div>TEST 3 TEST</div>}
                                canProceedToStepTwo={!!(pickupDate && pickupRestaurant)}
                                onStepChange={handleStepChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
