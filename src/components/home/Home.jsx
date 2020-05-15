import React, {useEffect, useState} from 'react';
import './home.scss';
import SchedulePickUpFilters from "../schedule-pickup/ScheduleFilters";
import {Link, useHistory} from "react-router-dom";
import firebase from "../../firebase";
import countBy from 'lodash/countBy';
import CalculateStarRating from "../../services/calculate-star-rating";
import parse from "html-react-parser";

export default function Home() {
    const history = useHistory();
    const [topLocations, setTopLocations] = useState([]);
    const [topRestaurants, setTopRestaurants] = useState([]);
    const [restaurantCount, setRestaurantCount] = useState(null);
    const [locationCount, setLocationCount] = useState(null);

    const handleScheduleFilters = (filters) => {
        const {date, restaurant: {id: restaurantId}} = filters;
        const queryString = `restaurant=${restaurantId}&date=${date}`

        history.push(`/pick-up?${queryString}`);
    }

    const getRestaurants = () => {
        firebase.firestore().collection('restaurants').get().then(snap => {
            const locationIds = snap.docs.map(doc => doc.data().location);
            const locationIdsOccurrences = countBy(locationIds);
            const topLocationIds = Object.keys(locationIdsOccurrences).sort((a, b) => locationIdsOccurrences[a] - locationIdsOccurrences[b]).slice(0, 4);

            setRestaurantCount(snap.size);

            getTopLocations(topLocationIds);
            getTopRestaurants();
        })

    };

    const getTopLocations = (topLocationIds) => {
        firebase.firestore().collection('locations').get().then(snapshot => {
            const locationsData = snapshot.docs.map(doc => doc.data());
            const topLocations = locationsData.filter(({id}) => topLocationIds.includes(id.toString()));

            setTopLocations(topLocations || []);
            setLocationCount(snapshot.size);
        })
    }

    const getTopRestaurants = () => {
        firebase.firestore()
            .collection('restaurants')
            .where('rating', '==', '5')
            .limit(6)
            .get().then(snapshot => {
            const topRestaurants = snapshot.docs.map(doc => doc.data());

            setTopRestaurants(topRestaurants);
        })
    }

    useEffect(getRestaurants, []);

    return (
        <main className="home-container">
            <section className="section section-xl bg-primary overlay-dark text-white rounded"
                     data-background="assets/img/hero.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-md-center">
                            <h1 className="display-2">
                                Find your perfect <span className="font-weight-bolder">coworking</span> space.
                            </h1>
                            <p className="lead text-muted mt-4">
                                <span className="font-weight-bold">12,000+</span> coworking spaces with desks, offices &
                                meeting rooms in <span className="font-weight-bold">165+</span> countries. <br/>Discover
                                and reserve space today.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <SchedulePickUpFilters onFiltersSubmit={handleScheduleFilters}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section py-lg-6 py-5 bg-soft">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <h2 className="h1"><span className="font-weight-bold">How it works? </span></h2>
                            <p className="lead mt-3">All you’ll need are the details of the building and location, the
                                types of space, pricing and some good quality photographs.</p>
                        </div>
                    </div>
                    <div className="row mt-lg-3 mt-3">
                        <div className="col-12">
                            <div className="tab-content mt-lg-5" id="tabcontentexample-3">
                                <div className="tab-pane fade show active" id="link-example-7" role="tabpanel"
                                     aria-labelledby="tab-link-example-7">
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary mb-4 rounded-circle">
                                                        <i className="fas fa-search"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">1. Choose a workspace</h5>
                                                    <p>It takes no longer than 15 minutes to list your space on
                                                        themesberg. Our user friendly onboarding process.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary mb-4 rounded-circle">
                                                        <i className="far fa-calendar-check"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">2. Schedule a tour</h5>
                                                    <p>After you have uploaded your space - our website makes it easy
                                                        for you to keep the details up to date.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary mb-4 rounded-circle">
                                                        <i className="fas fa-mouse-pointer"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">3. Book your workspace</h5>
                                                    <p>Orders coming from themesberg are 100% prepaid. We will bring you
                                                        not just leads but new clients.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="link-example-8" role="tabpanel"
                                     aria-labelledby="tab-link-example-8">
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-secondary mb-4 rounded-circle">
                                                        <i className="fas fa-clipboard-list"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">1. List your space</h5>
                                                    <p>It takes no longer than 15 minutes to list your space on
                                                        themesberg. Our user friendly onboarding process.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-secondary mb-4 rounded-circle">
                                                        <i className="far fa-user"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">2. Get ready</h5>
                                                    <p>After you have uploaded your space - our website makes it easy
                                                        for you to keep the details up to date.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="card shadow-soft border-0 mb-4 mb-lg-0 text-center">
                                                <div className="card-body p-3 px-xl-4 py-xl-6">
                                                    <div
                                                        className="icon icon-shape icon-shape-secondary mb-4 rounded-circle">
                                                        <i className="far fa-money-bill-alt"></i>
                                                    </div>
                                                    <h5 className="font-weight-normal my-3">3. Earn money</h5>
                                                    <p>Orders coming from themesberg are 100% prepaid. We will bring you
                                                        not just leads but new clients.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-6 text-center">
                                        <a href="./html/pages/submit-space.html"
                                           className="btn btn-secondary animate-up-2"><i
                                            className="fas fa-plus mr-2"></i>List a Space</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pb-lg-6 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="icon-box text-center">
                                <div className="icon icon-primary icon-xl">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h6 className="font-weight-normal text-gray mt-4 mb-3">24 Hr Access</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="icon-box text-center">
                                <div className="icon icon-primary icon-xl">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <h6 className="font-weight-normal text-gray mt-4 mb-3">Fast Internet</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="icon-box text-center">
                                <div className="icon icon-primary icon-xl">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <h6 className="font-weight-normal text-gray mt-4 mb-3">Good Coworkers</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="icon-box text-center">
                                <div className="icon icon-primary icon-xl">
                                    <i className="fas fa-city"></i>
                                </div>
                                <h6 className="font-weight-normal text-gray mt-4 mb-3">Modern Building</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-md-4">
                            <h2 className="h1 mb-5">Explore our <span className="font-weight-bold">available</span>
                                <br/>office
                                spaces.</h2>
                        </div>
                        <div className="col-md-4">
                            <p className="lead">Coworking is not only about the physical place, but about establishing
                                the coworking community first. Its benefits can already be experienced outside of its
                                places, and it is recommended</p>
                            <p className="lead mt-4">To start with building a coworking community first before
                                considering opening a Coworking place.</p>
                        </div>
                        <div className="col-md-4">
                            <p className="lead">However, some coworking places don’t build a community: they just get a
                                part of an existing one by combining their opening with</p>
                            <p className="lead mt-4">An event which attracts their target group. Real-estate centric
                                coworking spaces are about selling desks first, with building community as a secondary
                                goal.</p>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-12">
                            <h5 className="font-weight-normal mb-5">Top Locations</h5>
                        </div>
                        {topLocations && topLocations.map((location, key) => (
                                <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0" key={key}>
                                    <Link to={`/restaurants?location=${location.id}`}
                                          className="card img-card fh-400 border-0 outer-bg"
                                          data-background-inner="assets/img/newyork.jpg">
                                        <div className="inner-bg overlay-dark"></div>
                                        <div className="card-img-overlay d-flex align-items-center">
                                            <div className="card-body text-white p-3">
                                                <h5 className="font-weight-normal text-uppercase text-center">{location.name}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                    <div className="row mt-6">
                        <div className="col-12">
                            <h5 className="font-weight-normal mb-5">Trending restaurants</h5>
                        </div>
                        {topRestaurants && topRestaurants.map((restaurant, key) => (
                                <div className="col-md-6 col-lg-4" key={key}>
                                    <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                        <Link to={`/restaurant/${restaurant.id}`} className="position-relative">
                                            <img src="assets/img/image-office.jpg" className="card-img-top space-image"
                                                 alt="a card"/>
                                            <span className="badge badge-primary position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Office Space</span>
                                </span>
                                        </Link>
                                        <div className="card-body">
                                            <a href="./html/pages/single-space.html">
                                                <h5 className="font-weight-normal">{restaurant.name}</h5>
                                            </a>
                                            <div className="post-meta">
                                                <span className="small lh-120"><i
                                                    className="fas fa-map-marker-alt mr-2"/>{restaurant.address}</span>
                                            </div>
                                            <div className="d-flex my-4">
                                                {parse(CalculateStarRating(restaurant.rating))}
                                                <span
                                                    className="badge badge-pill badge-secondary ml-2">{restaurant.rating}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="col pl-0">
                                                    <span className="text-muted font-small d-block mb-2">Monthly</span>
                                                    <span className="h5 text-dark font-weight-bold">2100$</span>
                                                </div>
                                                <div className="col">
                                                    <span className="text-muted font-small d-block mb-2">People</span>
                                                    <span className="h5 text-dark font-weight-bold">12</span>
                                                </div>
                                                <div className="col pr-0">
                                                    <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                    <span className="h5 text-dark font-weight-bold">1200</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                        <div className="col mt-lg-6 mt-3 d-flex flex-column text-center">
                            <div>
                                <Link to="/restaurants" className="btn btn-primary animate-up-2 mb-2"><i
                                    className="fas fa-search-location mr-2"/>Browse
                                </Link>
                            </div>
                            {(locationCount && restaurantCount) && (
                                <span
                                    className="font-sm">{restaurantCount} restaurants in {locationCount} locations
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
