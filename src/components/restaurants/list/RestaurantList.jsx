import React, {useEffect, useRef, useState} from 'react';
import Banner from "../../banner/Banner";
import firebase from "../../../firebase";
import RestaurantFilters from "../filters/RestaurantFilters";
import {Waypoint} from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';
import './restaurant-list.scss'
import RestaurantListItem from "./list-item/RestaurantListItem";

const DEFAULT_LIMIT = 8;

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantsCount, setRestaurantsCount] = useState(0);
    const [lastVisible, setLastVisible] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isDoneFetching, setIsDoneFetching] = useState(false);

    const getNumberOfRestaurants = () => {
        firebase
            .firestore()
            .collection('restaurants')
            .get()
            .then(snapshot => setRestaurantsCount(snapshot.size));
    };

    const fetchInitialRestaurants = async () => {
        setIsFetching(true);

        let initialQuery = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .limit(DEFAULT_LIMIT);

        let documentSnapshots = await initialQuery.get();
        let documentData = documentSnapshots.docs.map(document => document.data());
        let lastVisibleElement = documentData[documentData.length - 1].name;

        setRestaurants(documentData);
        setLastVisible(lastVisibleElement);
        setIsFetching(false);
    };

    const fetchMoreRestaurants = async () => {
        if (isDoneFetching) {
            return;
        }

        setIsFetching(true);

        let additionalQuery = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .startAfter(lastVisible)
            .limit(DEFAULT_LIMIT);

        const documentSnapshots = await additionalQuery.get();
        const documentData = documentSnapshots.docs.map(document => document.data());

        setIsDoneFetching(documentData.length < DEFAULT_LIMIT);

        if (Array.isArray(documentData) && !!documentData.length) {
            let lastVisibleElement = documentData[documentData.length - 1].name;

            setIsFetching(false);
            setRestaurants([...restaurants, ...documentData]);
            setLastVisible(lastVisibleElement);
        }
    };

    const applyFilters = async (filters) => {
        let query = firebase
            .firestore()
            .collection('restaurants')
            .limit(restaurants.length)

        if (filters.fiveStars) {
            query = query.where('rating', '==', 5);
        }

        const documentSnapshots = await query.get();
        const documentData = documentSnapshots.docs.map(document => document.data());

        setRestaurants(documentData);
        setIsDoneFetching(true);
    }

    useEffect(() => {
        (async function asyncFn() {
            await fetchInitialRestaurants();
        })();
        getNumberOfRestaurants();
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        (async function asyncFn() {
            await fetchMoreRestaurants();
        })();
    }, [isFetching]);

    return (
        <main className="restaurant-list-main">
            <Banner/>
            <div className="section pt-5 pt-lg-6">
                <div id="spaces-container" className="container">
                    <div className="row">
                        <div className="col-12">
                            <form autoComplete="off" className="row" action="#">
                                <div className="col-12 col-lg-4">
                                    <div className="form-group mb-lg-0">
                                        <div className="input-group input-group-md mb-lg-0">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-search"/></span>
                                            </div>
                                            <input id="search-location" type="text"
                                                   className="form-control autocomplete"
                                                   placeholder="Search location" tabIndex="1" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="input-group input-group-md mb-3 mb-lg-0">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i
                                                className="far fa-calendar-alt"/></span>
                                        </div>
                                        <input className="form-control datepicker" placeholder="Select date" type="text"
                                               required/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <button className="btn btn-primary btn-block mt-md-0 animate-up-2"
                                            type="submit">Find a
                                        desk
                                    </button>
                                </div>
                                <div className="col-lg d-lg-none">
                                    <span className="d-block font-small text-primary mt-2 text-right"
                                          id="show-filters-button">Show filters</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">

                        <RestaurantFilters onFilterSubmit={applyFilters}/>

                        <div className="col-md-12 col-lg-9 order-lg-1 restaurant-list-wrapper">
                            <div className="restaurant-list-counter justify-content-between align-items-center d-none d-md-flex">
                                <div className="mr-3">
                                    <p className="mb-3 mb-md-0 font-small">Showing <strong>{restaurants.length}</strong> restaurants out of <strong>{restaurantsCount}</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="tab-content mt-4 mt-lg-4" id="tabcontentexample-5">
                                <div className="tab-pane fade show active restaurants-container" id="link-example-13"
                                     role="tabpanel"
                                     aria-labelledby="tab-link-example-13">

                                    {restaurants.map((restaurant, key) =>
                                        <RestaurantListItem key={key} restaurant={restaurant} />
                                    )}

                                    {(isFetching && !isDoneFetching) &&
                                    <div className="restaurant-list-loader">
                                        <span>Loading data...</span>
                                        <CircularProgress/>
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Waypoint
                onEnter={fetchMoreRestaurants}
            />
        </main>
    );
}
