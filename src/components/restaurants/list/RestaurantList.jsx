import React, {useEffect, useState} from 'react';
import Banner from "../../reusable/banner/Banner";
import firebase from "../../../firebase";
import RestaurantFilters from "../filters/RestaurantFilters";
import {Waypoint} from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';
import './restaurant-list.scss'
import RestaurantListItem from "./list-item/RestaurantListItem";
import SearchIcon from '@material-ui/icons/Search';
import FoodShareDatePicker from "../../reusable/DatePicker";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import format from 'date-fns/format';
import {Link, useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {useLocation} from "react-router-dom";
import noResultsBanner from '../../../assets/img/no-results-2.png';

const DEFAULT_LIMIT = 6;

const initialFilters = {
    search: '',
    date: null,
    rating: [],
    location: ''
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantsCount, setRestaurantsCount] = useState(0);
    const [filters, setFilters] = useState(initialFilters);
    const [lastVisible, setLastVisible] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isDoneFetching, setIsDoneFetching] = useState(false);
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState('');
    const queryString = useQuery();
    const locationQueryString = queryString.get('location');
    const history = useHistory();

    const getNumberOfRestaurants = () => {
        firebase
            .firestore()
            .collection('restaurants')
            .get()
            .then(snapshot => setRestaurantsCount(snapshot.size));
    };

    const getMatchingLocation = (locationsList, locationId = locationQueryString) => {
        const match = locationsList.find(({id}) => id === Number(locationId));

        return (match && match.name) || '';
    }

    const fetchInitialRestaurants = async () => {
        setIsFetching(true);

        const currentLocation = Number(locationQueryString);
        let initialQuery = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .limit(DEFAULT_LIMIT);

        if (currentLocation) {
            initialQuery = initialQuery.where('location', '==', currentLocation);
        }

        const documentSnapshots = await initialQuery.get();
        const documentData = documentSnapshots.docs.map(document => document.data());
        const lastVisibleElement = documentData[documentData.length - 1] ? documentData[documentData.length - 1].name : null;

        setRestaurants(documentData);
        setLastVisible(lastVisibleElement);
        setIsFetching(false);
    };

    const getAllLocations = () => {
        firebase
            .firestore()
            .collection('locations')
            .get()
            .then(querySnapshot => {
                const list = querySnapshot.docs.map(doc => doc.data());
                const matchingLocation = getMatchingLocation(list);

                setLocation(matchingLocation);
                setLocations(list);
            })
    };

    const fetchMoreRestaurants = async () => {
        if (isDoneFetching) {
            return;
        }

        setIsFetching(true);

        const currentLocation = Number(locationQueryString);
        let additionalQuery = await firebase
            .firestore().collection('restaurants')
            .orderBy('name', 'asc')
            .startAfter(lastVisible)
            .limit(DEFAULT_LIMIT);

        if (currentLocation) {
            additionalQuery = additionalQuery.where('location', '==', currentLocation);
        }

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
        // firebase.firestore()
        //     .collection('restaurants')
        //     .get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             firebase.firestore()
        //                 .collection('restaurants')
        //                 .doc(doc.id)
        //                 .collection('reviews')
        //                 .get()
        //                 .then(snap => {
        //                     snap.forEach(review => {
        //                             firebase.firestore()
        //                                 .collection('restaurants')
        //                                 .doc(doc.id)
        //                                 .collection('reviews')
        //                                 .doc(review.id)
        //                                 .set({
        //                                     timestamp: [firebase.firestore.Timestamp.fromDate(new Date(1591280791773)),
        //                                         firebase.firestore.Timestamp.fromDate(new Date(1591210791773)),
        //                                         firebase.firestore.Timestamp.fromDate(new Date(1581210711773)),
        //                                         firebase.firestore.Timestamp.fromDate(new Date(1581110311773)),
        //                                         firebase.firestore.Timestamp.fromDate(new Date(1582119311773)),
        //                                     ][Math.floor(Math.random() * 5)]
        //                                 }, {
        //                                     merge: true
        //                                 }).then()
        //                         })
        //                 })
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
        const {search, date, rating, location} = filters;

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
            searchQuery = searchQuery.where('rating', '>=', String(Math.min(...rating)));
        }

        if (location) {
            searchQuery = searchQuery.where('location', '==', Number(location));
            setLocation(getMatchingLocation(locations, location));
            history.replace(`/restaurants?location=${location}`);
        } else {
            history.replace('/restaurants');
            setLocation('');
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
        getAllLocations();
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        (async function asyncFn() {
            await fetchMoreRestaurants();
        })();
    }, [isFetching]);

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <main className="restaurant-list-main">
            <Banner
                title={`Restaurant listings ${location ? `in ${location}` : ''}`}
                cover={`${location ? `${location}.jpg` : 'list-banner-1.jpg'}`}
                subtitle="You are now viewing an entire collection of restaurant listing. You have the possibility of
                 filtering through the listings, as well as performing a more detailed search.
                 You are able to visualize a restaurant's name, as well as its location and the ratings other users of this platform had given.
                 When you are ready, click on a restaurant of your liking to begin the Pick-up process."
            >
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Typography color="textPrimary">Restaurants</Typography>
            </Banner>
            <div className="section section-md pt-5 pb-3">
                <div className="container mt-n7">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border-light p-3">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group form-group-lg mb-lg-0">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend"><span
                                                                className="input-group-text"><span
                                                                className="fas fa-map-marker-alt"></span></span>
                                                            </div>
                                                            <input id="search-location" type="text"
                                                                   className="form-control autocomplete"
                                                                   placeholder="Search for a restaurant"
                                                                   onChange={onSearchChange}
                                                                   value={filters.search}
                                                            /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 mt-1">
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <button className="btn btn-primary btn-block animate-up-2"
                                                            onClick={onSearchSubmit}>Find restaurants
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section pt-5 pt-lg-4">
                <div id="spaces-container" className="container">
                    <div className="row">
                        <RestaurantFilters locations={locations}
                                           onFiltersChange={onSidebarFiltersChange}
                        />
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

                                    {!!restaurants.length ?
                                        restaurants.map((restaurant, key) =>
                                            <RestaurantListItem key={key} restaurant={restaurant}/>
                                        ) :
                                        (
                                            <img src={noResultsBanner} alt="no results banner for restaurants"/>
                                        )
                                    }

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
