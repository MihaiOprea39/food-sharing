import React from "react";

export default function RestaurantFilters() {
    return (
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
    );
}