import React, {useEffect, useState} from 'react';
import Banner from "../banner/Banner";
import firebase from "../../firebase";
import parse from 'html-react-parser';

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

function calculateStarRating(rating) {
    const rounded = Math.floor(rating);
    const decimal = rating - rounded;

    let totalStars = '<i class="star fas fa-star text-warning"/>'.repeat(rounded);

    if (decimal) {
        totalStars = totalStars.concat('<i class="star fas fa-star-half text-warning"/>');
    }

    return totalStars;
}

export default function RestaurantsList() {
    const restaurants = FetchRestaurants();

    return (
        <main>
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
                                                <span className="input-group-text"><i
                                                    className="fas fa-search"></i></span>
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
                                                className="far fa-calendar-alt"></i></span>
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
                        <aside className="col-12 col-lg-3 mt-3 mt-lg-0 z-2 order-lg-2">
                            <div id="filters-sidebar" className="d-none d-lg-block">
                                <form action="#" method="get" className="sidebar-inner">
                                    <div className="card list-group list-group-flush shadow-sm border-soft p-3">
                                        <a href="#" data-target="#price"
                                           className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                                           data-toggle="collapse" role="button" aria-expanded="false"
                                           aria-controls="price">
                                            <span className="icon-title h6 mb-0 font-weight-bold">Price range</span>
                                            <span className="icon"><i className="fas fa-plus"></i></span>
                                        </a>
                                        <div id="price" className="collapse">
                                            <div className="pt-5">
                                                <div id="input-slider-range" data-range-value-min="100"
                                                     data-range-value-max="500"></div>
                                                <div className="row d-none">
                                                    <div className="col-6">
                                                        <span className="range-slider-value value-low"
                                                              data-range-value-low="200"
                                                              id="input-slider-range-value-low"></span>
                                                    </div>
                                                    <div className="col-6 text-right">
                                                        <span className="range-slider-value value-high"
                                                              data-range-value-high="400"
                                                              id="input-slider-range-value-high"></span>
                                                    </div>
                                                </div>
                                                <span className="font-xs text-gray">*Prices are in USD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card list-group list-group-flush shadow-sm border-soft mt-4 p-3">
                                        <a href="#" data-target="#capacity"
                                           className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                                           data-toggle="collapse" role="button" aria-expanded="false"
                                           aria-controls="capacity">
                                            <span className="icon-title h6 mb-0 font-weight-bold">Capacity</span>
                                            <span className="icon"><i className="fas fa-plus"></i></span>
                                        </a>
                                        <div id="capacity" className="collapse">
                                            <div className="form-group">
                                                <label htmlFor="people" className="pt-2">People</label>
                                                <select className="custom-select custom-select-sm" id="people">
                                                    <option>1 Person</option>
                                                    <option>2-5 Persons</option>
                                                    <option>10-20 Persons</option>
                                                    <option>20-40 Persons</option>
                                                    <option>50+ Persons</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="size">Size</label>
                                                <select className="custom-select custom-select-sm" id="size">
                                                    <option>10 Sq. Ft - 20 Sq. Ft</option>
                                                    <option>20 Sq. Ft - 50 Sq. Ft</option>
                                                    <option>50 Sq. Ft - 100 Sq. Ft</option>
                                                    <option>100 Sq. Ft - 200 Sq. Ft</option>
                                                    <option>200+ Sq. Ft</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shadow-sm border-soft mt-4 p-3">
                                        <a href="#" data-target="#reviews"
                                           className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                                           data-toggle="collapse" role="button" aria-expanded="false"
                                           aria-controls="reviews">
                                            <span className="icon-title h6 mb-0 font-weight-bold">Rating</span>
                                            <span className="icon"><i className="fas fa-plus"></i></span>
                                        </a>
                                        <ul id="reviews" className="collapse list-group list-group list-group-flush">
                                            <li className="list-group-item border-0 py-1 pt-2 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        <span className="d-flex">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <span>(12)</span>
                                                    </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        <span className="d-flex"></span>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <span className="font-small ml-1">(23)</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        <span className="d-flex">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <span className="font-small ml-1">(32)</span>
                                                    </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        <span className="d-flex">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <span className="font-small ml-1">(9)</span>
                                                    </span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                        <span className="d-flex">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <i className="star far fa-star text-gray"></i>
                                                        <span className="font-small ml-1">(4)</span>
                                                    </span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card shadow-sm border-soft mt-4 p-3">
                                        <a href="#" data-target="#amenities-1"
                                           className="accordion-panel-header w-100 d-flex align-items-center justify-content-between"
                                           data-toggle="collapse" role="button" aria-expanded="false"
                                           aria-controls="amenities-1">
                                            <span className="icon-title h6 mb-0 font-weight-bold">Amenities</span>
                                            <span className="icon"><i className="fas fa-plus"></i></span>
                                        </a>
                                        <ul id="amenities-1"
                                            className="collapse list-group list-group list-group-flush">
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span> Kitchen
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span> Conference Room
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span> Coffee & Drinks
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox"/>
                                                        <span className="form-check-sign"></span> Bike Parking
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-sm btn-block btn-primary animate-up-2 mt-4"
                                            type="submit">Apply filters
                                    </button>
                                </form>
                            </div>
                        </aside>
                        <div className="col-md-12 col-lg-9 order-lg-1">
                            <div className="justify-content-between align-items-center d-none d-md-flex">
                                <div className="mr-3">
                                    <p className="mb-3 mb-md-0 font-small">Showing 0 - 8 of 62
                                    </p>
                                </div>
                                <div className="nav-wrapper position-relative p-0">
                                    <ul className="nav nav-pills nav-pill-rounded" id="tab-34" role="tablist">
                                        <li className="nav-item pr-0">
                                            <a className="nav-link text-sm-center active" id="tab-link-example-13"
                                               data-toggle="tab"
                                               href="#link-example-13" role="tab" aria-controls="link-example-13"
                                               aria-selected="true">
                                                <span className="nav-link-icon d-block"><i
                                                    className="fas fa-th-list"></i></span>
                                            </a>
                                        </li>
                                        <li className="nav-item pr-0">
                                            <a className="nav-link text-sm-center" id="tab-link-example-14"
                                               data-toggle="tab"
                                               href="#link-example-14" role="tab" aria-controls="link-example-14"
                                               aria-selected="false">
                                                <span className="nav-link-icon d-block"><i
                                                    className="fas fa-th-large"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content mt-4 mt-lg-4" id="tabcontentexample-5">
                                <div className="tab-pane fade show active" id="link-example-13" role="tabpanel"
                                     aria-labelledby="tab-link-example-13">
                                    {restaurants.map((restaurant, key) => {
                                        return (
                                            <div className="row" key={key}>
                                            <div className="col-lg-12">
                                                <div
                                                    className="card card-article-wide shadow-sm flex-md-row no-gutters border-soft mb-4 animate-up-5">
                                                    <a href="single-space.html" className="col-md-6 col-lg-6">
                                                        <img src="../../assets/img/private-office.jpg" alt="image"
                                                             className="card-img-top space-image-lg"/>
                                                    </a>
                                                    <div
                                                        className="card-body d-flex flex-column justify-content-between col-auto p-4">
                                                        <a href="single-space.html">
                                                            <h4 className="font-weight-normal mb-0">{restaurant.name}</h4>
                                                        </a>
                                                        <div className="post-meta">
                                                    <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"/>
                                                        {restaurant.address}</span>
                                                        </div>
                                                        <div className="d-flex my-4">
                                                            {parse(calculateStarRating(restaurant.rating))}
                                                            <span className="badge badge-pill badge-secondary ml-2">
                                                                {Number(restaurant.rating).toFixed(1)}
                                                            </span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Monthly</span>
                                                                <span className="h5 text-dark font-weight-bold">500$</span>
                                                            </div>
                                                            <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                                <span className="h5 text-dark font-weight-bold">12</span>
                                                            </div>
                                                            <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                                <span className="h5 text-dark font-weight-bold">1200</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    <div className="row">
                                        <div className="col mt-3 d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item disabled"><a className="page-link"
                                                                                          tabIndex="-1"
                                                                                          href="#">Previous</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item active"><a className="page-link"
                                                                                        href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">4</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">5</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="link-example-14" role="tabpanel"
                                     aria-labelledby="tab-link-example-14">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/image-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-primary position-absolute listing-badge">
                                                        <span className="font-weight-normal font-xs">Office Space</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Collaborative Workspace</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>New York, Manhattan, USA</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">5.0</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Monthly</span>
                                                            <span className="h5 text-dark font-weight-bold">450$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">12</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">1200</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/cowork-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-secondary position-absolute listing-badge">
                                                        <span
                                                            className="font-weight-normal font-xs">Coworking Space</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Coworking Workspace</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>Bucharest, Sector 2, Romania</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-gray-200"></i>
                                                        <i className="star fas fa-star text-gray-200"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">3.0</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Monthly</span>
                                                            <span className="h5 text-dark font-weight-bold">300$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">24</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">3000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/meeting-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-warning position-absolute listing-badge">
                                                        <span
                                                            className="font-weight-normal font-xs">Meeting Space</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Meeting Office Space</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>London, Canary Wharf, UK</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-gray-200"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">4.0</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Hourly</span>
                                                            <span className="h5 text-dark font-weight-bold">50$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">3-5</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">400</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/conference-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-primary position-absolute listing-badge">
                                                        <span
                                                            className="font-weight-normal font-xs">Conference Room</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Conference Room</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>Paris, La Defense, France</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">4.7</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Hourly</span>
                                                            <span className="h5 text-dark font-weight-bold">100$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">2-20</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">200</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/lifestyle-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-secondary position-absolute listing-badge">
                                                            <span
                                                                className="font-weight-normal font-xs">Lifestyle Space</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Lifestyle Space</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>Madrid, Hortaleza, Spain</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">5.0</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Daily</span>
                                                            <span className="h5 text-dark font-weight-bold">350$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">10-25</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">100</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative">
                                                    <img src="../../assets/img/private-office.jpg"
                                                         className="card-img-top space-image-lg" alt="image"/>
                                                    <span
                                                        className="badge badge-warning position-absolute listing-badge">
                                                        <span
                                                            className="font-weight-normal font-xs">Private Space</span>
                                                    </span>
                                                </a>
                                                <div className="card-body">
                                                    <a href="./single-space.html">
                                                        <h5 className="font-weight-normal">Private Space</h5>
                                                    </a>
                                                    <div className="post-meta">
                                                        <span className="small lh-120"><i
                                                            className="fas fa-map-marker-alt mr-2"></i>Budapest, Ferencvaros, Hungary</span>
                                                    </div>
                                                    <div className="d-flex my-4">
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-warning"></i>
                                                        <i className="star fas fa-star text-gray-200"></i>
                                                        <span
                                                            className="badge badge-pill badge-secondary ml-2">4.0</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Monthly</span>
                                                            <span className="h5 text-dark font-weight-bold">100$</span>
                                                        </div>
                                                        <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                            <span className="h5 text-dark font-weight-bold">1</span>
                                                        </div>
                                                        <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                            <span className="h5 text-dark font-weight-bold">10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-5 text-center">
                                            <button className="btn btn-primary" type="submit">Show More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}