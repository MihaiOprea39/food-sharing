import React, {useEffect, useState} from 'react';
import FoodShareStepper from "./misc/Stepper";
import Banner from "./misc/banner/Banner";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import firebase from "../firebase";
import format from "date-fns/format";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function PickUp() {
    const [activeStep, setActiveStep] = useState(0);
    const [pickupDate, setPickupDate] = useState(null);
    const [pickupRestaurant, setPickupRestaurant] = useState(null);
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

    useEffect(handleQueryStrings, []);

    console.log(pickupDate, pickupRestaurant);

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
                            <FoodShareStepper activeStep={activeStep} onStepChange={handleStepChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
