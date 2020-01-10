import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

function FetchRestaurants() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('restaurants')
            .onSnapshot((snapshot => {
                const availableRestaurants = snapshot.docs.map(doc => doc.data());

                setRestaurants(availableRestaurants)
            }))
    }, []);

    return restaurants;
}

export default function Home() {
    const restaurants = FetchRestaurants();

    return (
        <section>
            <h5>HOME PAGE</h5>
            <ul>
                {restaurants.map((restaurant, index) =>
                    <li key={index}>{restaurant.name}</li>
                )}
            </ul>
        </section>
    );
}
