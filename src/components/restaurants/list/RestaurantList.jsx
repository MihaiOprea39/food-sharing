import React, {useEffect, useState} from 'react';
import Banner from "../../misc/banner/Banner";
import firebase from "../../../firebase";
import RestaurantFilters from "../filters/RestaurantFilters";
import {Waypoint} from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';
import './restaurant-list.scss'
import RestaurantListItem from "./list-item/RestaurantListItem";
import SearchIcon from '@material-ui/icons/Search';
import FoodShareDatePicker from "../../misc/DatePicker";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import format from 'date-fns/format';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const DEFAULT_LIMIT = 8;

const initialFilters = {
    search: '',
    date: null,
    rating: []
};

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantsCount, setRestaurantsCount] = useState(0);
    const [filters, setFilters] = useState(initialFilters);
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

        const documentSnapshots = await initialQuery.get();
        const documentData = documentSnapshots.docs.map(document => document.data());
        const lastVisibleElement = documentData[documentData.length - 1] ? documentData[documentData.length - 1].name : null;

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

    const onSearchChange = async (event) => {
        setFilters({
            ...filters,
            search: event.target.value
        });
    };

    const onDateChange = async (value) => {
        const date = value ? format(value, 'MMM dd, yyyy') : null;

        setFilters({
            ...filters,
            date
        });
    };

    const onSidebarFiltersChange = (sidebarFilters) => {
        setFilters({
            ...filters,
            ...sidebarFilters
        });
    };

    const updateCustomFields = () => {
        firebase.firestore()
            .collection('restaurants')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    firebase.firestore()
                        .collection('restaurants')
                        .doc(doc.id)
                        .set({
                            keywords: ['', `${doc.data().name.toLowerCase()}`].concat(
                                doc
                                    .data()
                                    .name.toLowerCase()
                                    .split(" ")
                            )
                        }, {
                            merge: true
                        }).then()
                })
            })
        // firebase.firestore()
        //     .collection('restaurants')
        //     .get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             firebase.firestore()
        //                 .collection('restaurants')
        //                 .doc(doc.id)
        //                 .collection('reviews')
        //                 .add({
        //                     "name": "Brad Gerris",
        //                     "rating": "3",
        //                     "comment": "A pretty decent but sloppy job",
        //                     "timestamp": "May 05, 2020"
        //                 }).then()
        //         })
        //     })
        // JSON.parse(JSON.stringify((local))).forEach((item, index) => {
        //     firebase.firestore()
        //         .collection('restaurants')
        //         .add({
        //             date: item.date,
        //             gallery: item.gallery,
        //             id: index + 1,
        //             rating: item.rating,
        //             address: item.address,
        //             age: item.age,
        //             image: item.image,
        //             keywords: item.keywords,
        //             name: item.name
        //         })
        //         .then()
        //
        // });
    };

    const onSearchSubmit = async () => {
        const {search, date, rating} = filters;

        let searchQuery = firebase
            .firestore()
            .collection('restaurants');

        if (date) {
            searchQuery = searchQuery
                .where('date', '>=', date.toString())
                .orderBy('date', 'asc');
        }

        if (search) {
            searchQuery = searchQuery
                .where('keywords', 'array-contains', search.toLowerCase())
                .orderBy('name', 'asc')
        }

        if (rating && !!rating.length) {
            searchQuery = searchQuery.where('rating', 'in', rating);
        }

        searchQuery = await searchQuery.get();
        const documentData = searchQuery.docs.map(document => document.data());

        setRestaurants(documentData);
        setIsDoneFetching(true);
    };

    useEffect(() => {
        (async function asyncFn() {
            await fetchInitialRestaurants();
        })();
        getNumberOfRestaurants();
        // updateCustomFields();
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        (async function asyncFn() {
            await fetchMoreRestaurants();
        })();
    }, [isFetching]);

    return (
        <main className="restaurant-list-main">
            <Banner
                title="Restaurant listings"
                subtitle="You are now viewing a single restaurant listing. You are about to discover a cohesive description
                 the owner has made available, the reviews the other organisation have left in regards to this listing, as well as all amenities
                 that set this restaurant apart from others. A location tool for simplicity is also available."
            >
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Typography color="textPrimary">Restaurants</Typography>
            </Banner>
            <div className="section pt-5 pt-lg-6">
                <div id="spaces-container" className="container">
                    <div className="row">
                        <div className="restaurant-search-container col-md-12 col-lg-9">
                            <Grid container alignItems="flex-end">
                                <Grid item>
                                    <SearchIcon/>
                                </Grid>
                                <Grid item>
                                    <TextField label="Search" onChange={onSearchChange} value={filters.search}/>
                                </Grid>
                            </Grid>
                            <FoodShareDatePicker value={filters.date} onChange={onDateChange}
                                                 placeholder="Available date"/>
                            <button className="btn btn-primary btn-block mt-md-0 animate-up-2 search-button"
                                    onClick={onSearchSubmit}
                            >Find restaurants
                            </button>
                        </div>
                    </div>
                    <div className="row">

                        <RestaurantFilters onFiltersChange={onSidebarFiltersChange}/>

                        <div className="col-md-12 col-lg-9 order-lg-1 restaurant-list-wrapper">
                            <div
                                className="restaurant-list-counter justify-content-between align-items-center d-none d-md-flex">
                                <div className="mr-3">
                                    <p className="mb-3 mb-md-0 font-small">Showing <strong>{restaurants.length}</strong> restaurants
                                        out of <strong>{restaurantsCount}</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="tab-content mt-4 mt-lg-4" id="tabcontentexample-5">
                                <div className="tab-pane fade show active restaurants-container" id="link-example-13"
                                     role="tabpanel"
                                     aria-labelledby="tab-link-example-13">

                                    {restaurants.map((restaurant, key) =>
                                        <RestaurantListItem key={key} restaurant={restaurant}/>
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