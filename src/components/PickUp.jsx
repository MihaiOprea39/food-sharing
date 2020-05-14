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

        const updatedRestaurants = restaurants.map(restaurant => ({
            ...restaurant,
            readyForPickup: restaurant.id === restaurantId ? event.target.checked : false
        }));

        setRestaurants(updatedRestaurants);
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


    console.log(pickupRestaurant, pickupDate);

    const getStepOne = () => {
        return (
            <div>
                <FoodShareDatePicker placeholder="Available date" value={pickupDate} onChange={onDateChange}/>
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
            <div className="card shadow-soft border p-4 mb-4">
                <h5 className="mb-4">General information</h5>
                <div className="form-group focused">
                    <label htmlFor="firstname">Title</label>
                    <input type="text" value="L'atelier Vancouver Coworking" className="form-control shadow-soft"
                           id="firstname" placeholder="Space title" required=""/>
                </div>
                <div className="form-group focused">
                    <label htmlFor="location">Location</label>
                    <input type="text" value="26, Vancouver, BC, Canada - 324578" className="form-control shadow-soft"
                           id="location" placeholder="Search for location" required=""/>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="currency">Currency</label>
                            <select className="custom-select" id="currency">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                                <option value="CNY">CNY</option>
                                <option value="JPY">JPY</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group focused">
                            <label htmlFor="price">Monthly price</label>
                            <input type="number" value="250" className="form-control shadow-soft" id="price"
                                   placeholder="Ex. 1200" required=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="term">Minimum term</label>
                            <select className="custom-select" id="term">
                                <option value="d">day</option>
                                <option value="m">month</option>
                                <option value="y" selected="">year</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group focused">
                            <label htmlFor="term_amount">Amount</label>
                            <input type="number" value="1" className="form-control shadow-soft" id="term_amount"
                                   placeholder="Ex. 20" required=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="form-group focused">
                            <label htmlFor="sqfeet">Square feet</label>
                            <input type="number" value="180" className="form-control shadow-soft" id="sqfeet"
                                   placeholder="Ex. 80" required=""/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="form-group focused">
                            <label htmlFor="people">People capacity</label>
                            <input type="number" value="15" className="form-control shadow-soft" id="people"
                                   placeholder="Ex. 20" required=""/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="form-group">
                            <label htmlFor="type">Space type</label>
                            <select className="custom-select" id="type">
                                <option value="meeting" selected="">meeting</option>
                                <option value="work">work</option>
                                <option value="events">events</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group focused">
                    <label htmlFor="description">Description</label>
                    <textarea rows="10" className="form-control shadow-soft" id="description" placeholder="Description"
                              required="">L'atelier is the brainchild of 3 innovative guys that want to create a working hub for the local community. The plan is to offer a cool place to hang out with other creative souls and let the brainwaves go berserk.

The guys were the group behind the Startup Weekend Vancouver, Startup Pirates Vancouver and Startup Coffee Vancouver, so they are no fools and have plenty of experience in startups and community growth. This project is another notch into creating Vancouver as a regional startup hub.

Cowork Vancouver is aiming to attract the techies, the freelance developers or anyone wishing to get involved in the startup scene - really there are no exclusions of bodies who may want a desk - the founders just want a community of entrepreneurs and geeks to mingle with.</textarea>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary btn-dark mt-2 animate-up-2" type="submit">Update</button>
                    </div>
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
                                onStepChange={handleStepChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
