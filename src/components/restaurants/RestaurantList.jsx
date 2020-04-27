import React, {useEffect, useState} from 'react';
import Banner from "../banner/Banner";
import firebase from "../../firebase";
import parse from 'html-react-parser';
import RestaurantFilters from "./RestaurantFilters";
import {Pagination} from "@material-ui/lab";

const DEFAULT_LIMIT = 5;

function CalculateStarRating(rating) {
    const rounded = Math.floor(rating);
    const decimal = rating - rounded;

    let totalStars = '<i class="star fas fa-star text-warning"/>'.repeat(rounded);

    if (decimal) {
        totalStars = totalStars.concat('<i class="star fas fa-star-half text-warning"/>');
    }

    return totalStars;
}

export default function RestaurantsList() {
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [restaurants, setRestaurants] = useState([]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);

        fetchRestaurants();
    };

    const fetchRestaurants = () => {

        firebase
            .firestore()
            .collection('restaurants')
            .orderBy('name', 'asc')
            .limit(DEFAULT_LIMIT)
            .onSnapshot((snapshot => {
                const availableRestaurants = snapshot.docs.map(doc => doc.data());

                setRestaurants(availableRestaurants);
            }));

    };

    const getNumberOfRestaurantPages = () => {
        firebase
            .firestore()
            .collection('restaurants')
            .get()
            .then(snap => setPageCount(Math.ceil(snap.size / DEFAULT_LIMIT)));
    };

    useEffect(() => {
        fetchRestaurants();
        getNumberOfRestaurantPages();
    }, []);

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

                        <RestaurantFilters/>

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
                                                    <span className="small lh-120"><i
                                                        className="fas fa-map-marker-alt mr-2"/>
                                                        {restaurant.address}</span>
                                                            </div>
                                                            <div className="d-flex my-4">
                                                                {parse(CalculateStarRating(restaurant.rating))}
                                                                <span className="badge badge-pill badge-secondary ml-2">
                                                                {Number(restaurant.rating).toFixed(1)}
                                                            </span>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="col pl-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Monthly</span>
                                                                    <span
                                                                        className="h5 text-dark font-weight-bold">500$</span>
                                                                </div>
                                                                <div className="col">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">People</span>
                                                                    <span
                                                                        className="h5 text-dark font-weight-bold">12</span>
                                                                </div>
                                                                <div className="col pr-0">
                                                            <span
                                                                className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                                                    <span
                                                                        className="h5 text-dark font-weight-bold">1200</span>
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
                                            <Pagination count={pageCount} page={currentPage} onChange={handlePageChange}/>
                                        </div>
                                    </div>

                                    {/*<div className="row">*/}
                                    {/*    <div className="col mt-3 d-flex justify-content-center">*/}
                                    {/*        <nav aria-label="Page navigation example">*/}
                                    {/*            <ul className="pagination">*/}
                                    {/*                <li className="page-item disabled"><a className="page-link"*/}
                                    {/*                                                      tabIndex="-1"*/}
                                    {/*                                                      href="#">Previous</a></li>*/}
                                    {/*                <li className="page-item"><a className="page-link" href="#">1</a>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="page-item active"><a className="page-link"*/}
                                    {/*                                                    href="#">2</a></li>*/}
                                    {/*                <li className="page-item"><a className="page-link" href="#">3</a>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="page-item"><a className="page-link" href="#">4</a>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="page-item"><a className="page-link" href="#">5</a>*/}
                                    {/*                </li>*/}
                                    {/*                <li className="page-item"><a className="page-link" href="#">Next</a>*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*        </nav>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}