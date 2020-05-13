import React, {useEffect, useState} from 'react';
import FoodShareStepper from "./misc/Stepper";
import Banner from "./misc/banner/Banner";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import firebase from "../firebase";
import format from "date-fns/format";
import FoodShareMap from "./misc/map/Map";

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

    const handleQueryStrings = () => {
        const date = query.get('date');
        const restaurant = query.get('restaurant');

        date && setPickupDate(getMatchingDate(date));

        restaurant && setPickupRestaurant(getMatchingRestaurant(restaurant));

        date && restaurant && setActiveStep(1);

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

    const getRestaurants = async () => {
        const query = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc');

        const snapshot = await query.get();
        const data = snapshot.docs.map(document => ({
            ...document.data(),
            readyForPickup: false
        }));

        setRestaurants(data || []);
    };

    const handleReadyForPickupChange = (state, restaurantId) => {
        console.log(restaurantId);
        const updatedRestaurants = restaurants.map(restaurant => ({
            ...restaurant,
            readyForPickup: restaurant.id === restaurantId ? state : restaurant.readyForPickup
        }));
        
        console.log(updatedRestaurants);

        // setRestaurants(updatedRestaurants);
    };

    useEffect(handleQueryStrings, []);

    useEffect(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        (async function asyncFn() {
            await getRestaurants();
        })();
    }, []);
    

    const getStepOne = () => {
        return (
            <FoodShareMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=places`}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `100vh`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                markers={restaurants}
                togglePickup
                onTogglePickup={handleReadyForPickupChange}
            />
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
                                stepTwoContent={<div>TEST 2 TEST</div>}
                                stepThreeContent={<div>TEST 3 TEST</div>}
                                onStepChange={handleStepChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
