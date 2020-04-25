import React from 'react';
import './home.scss';

export default function Home() {

    return (
        <main className="home-container">
            <section className="section section-xl bg-primary overlay-dark text-white rounded" data-background="assets/img/hero.jpg">
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
                            <div className="card card-body">
                                <form autoComplete="off" className="row" method="get"
                                      action="html/pages/all-spaces.html">
                                    <div className="col-12 col-lg-5">
                                        <div className="form-group mb-lg-0">
                                            <div className="input-group input-group-lg mb-lg-0">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                                                </div>
                                                <input id="search-location" type="text"
                                                       className="form-control autocomplete"
                                                       placeholder="Search location" tabIndex="1" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="input-group input-group-lg mb-3 mb-lg-0">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input className="form-control datepicker" placeholder="Select date"
                                                   type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <button className="btn btn-lg btn-primary btn-block mt-3 mt-md-0 animate-up-2"
                                                type="submit">Find a desk
                                        </button>
                                    </div>
                                </form>
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
                            <h2 className="h1 mb-5">Explore our <span className="font-weight-bold">available</span> <br/>office
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
                            <div className="card-group shadow-soft border border-soft">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <div className="progress-wrapper mb-5">
                                            <div className="progress-info info-xl">
                                                <div className="progress-label">
                                                    <h6 className="font-weight-normal text-dark">Space occupancy
                                                        level</h6>
                                                </div>
                                                <div className="progress-percentage"><span
                                                    className="text-dark">85%</span></div>
                                            </div>
                                            <div className="progress progress-lg">
                                                <div className="progress-bar bg-primary" role="progressbar"
                                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                                                     style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <div
                                            className="d-flex flex-column flex-lg-row d-sm-flex justify-content-between align-items-center">
                                            <div className="mb-5 mb-lg-0">
                                                <h4 className="font-weight-normal">Book your tour experience today!</h4>
                                                <p className="lead mb-0">Schedule a tour, make an appointment to rent
                                                    space <br className="d-none d-lg-inline"/>at Themesberg, or ask for
                                                        more information.</p>
                                            </div>
                                            <div className="align-content-end">
                                                <button type="button" className="btn btn-primary animate-up-2"
                                                        data-toggle="modal" data-target="#modal-form">Schedule a tour
                                                </button>
                                            </div>
                                            <div className="modal fade" id="modal-form" tabIndex="-1" role="dialog"
                                                 aria-labelledby="modal-form"
                                                 aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-md"
                                                     role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-body p-0">
                                                            <div className="card bg-soft shadow-md border-0">
                                                                <div className="card-header bg-white py-4">
                                                                    <button type="button" className="close"
                                                                            data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">×</span>
                                                                    </button>
                                                                    <div className="text-muted text-center mb-3">
                                                                        <h3>Interested?</h3>
                                                                        <p>We would love to show you Spaces. Please let
                                                                            us know when you are available and we will
                                                                            make our best to receive you on that date
                                                                            and time.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <form className="mt-3">
                                                                        <div className="form-group">
                                                                            <div className="input-group mb-4">
                                                                                <div className="input-group-prepend">
                                                                                    <span
                                                                                        className="input-group-text"><i
                                                                                        className="far fa-user"></i></span>
                                                                                </div>
                                                                                <input className="form-control"
                                                                                       placeholder="Name" type="text"
                                                                                       required/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <div className="input-group mb-4">
                                                                                <div className="input-group-prepend">
                                                                                    <span
                                                                                        className="input-group-text"><i
                                                                                        className="far fa-envelope"></i></span>
                                                                                </div>
                                                                                <input className="form-control"
                                                                                       placeholder="Email" type="email"
                                                                                       required/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <div className="input-group mb-4">
                                                                                <div className="input-group-prepend">
                                                                                    <span
                                                                                        className="input-group-text"><i
                                                                                        className="fas fa-mobile"></i></span>
                                                                                </div>
                                                                                <input className="form-control"
                                                                                       placeholder="Phone" type="number"
                                                                                       required/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="input-group input-group-lg mb-lg-0">
                                                                            <div className="input-group-prepend">
                                                                                <span className="input-group-text"><i
                                                                                    className="far fa-calendar-alt"></i></span>
                                                                            </div>
                                                                            <input className="form-control datepicker"
                                                                                   placeholder="Select date" type="text"
                                                                                   data-position="top"/>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <button type="submit"
                                                                                    className="btn btn-block btn-primary mt-4">Send
                                                                                Request Quote
                                                                            </button>
                                                                        </div>
                                                                    </form>
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
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-12">
                            <h5 className="font-weight-normal mb-5">Top Cities</h5>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a href="./html/pages/all-spaces.html" className="card img-card fh-400 border-0 outer-bg"
                               data-background-inner="assets/img/newyork.jpg">
                                <div className="inner-bg overlay-dark"></div>
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-body text-white p-3">
                                        <h5 className="font-weight-normal text-uppercase text-center">New York</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a href="./html/pages/all-spaces.html" className="card img-card fh-400 border-0 outer-bg"
                               data-background-inner="assets/img/paris.jpg">
                                <div className="inner-bg overlay-dark"></div>
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-body text-white p-3">
                                        <h5 className="font-weight-normal text-uppercase text-center">Paris</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a href="./html/pages/all-spaces.html" className="card img-card fh-400 border-0 outer-bg"
                               data-background-inner="assets/img/london.jpg">
                                <div className="inner-bg overlay-dark"></div>
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-body text-white p-3">
                                        <h5 className="font-weight-normal text-uppercase text-center">London</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a href="./html/pages/all-spaces.html" className="card img-card fh-400 border-0 outer-bg"
                               data-background-inner="assets/img/tokyo.jpg">
                                <div className="inner-bg overlay-dark"></div>
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-body text-white p-3">
                                        <h5 className="font-weight-normal text-uppercase text-center">Tokyo</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-12">
                            <h5 className="font-weight-normal mb-5">Trending Spaces</h5>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/image-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-primary position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Office Space</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Collaborative Workspace</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>New York, Manhattan, USA</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">5.0</span>
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
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/cowork-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-secondary position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Coworking Space</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Coworking Workspace</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Bucharest, Sector 2, Romania</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-gray-200"></i>
                                        <i className="star fas fa-star text-gray-200"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">3.0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col pl-0">
                                            <span className="text-muted font-small d-block mb-2">Monthly</span>
                                            <span className="h5 text-dark font-weight-bold">300$</span>
                                        </div>
                                        <div className="col">
                                            <span className="text-muted font-small d-block mb-2">People</span>
                                            <span className="h5 text-dark font-weight-bold">24</span>
                                        </div>
                                        <div className="col pr-0">
                                            <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                            <span className="h5 text-dark font-weight-bold">3000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/meeting-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-warning position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Meeting Space</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Meeting Office Space</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>London, Canary Wharf, UK</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-gray-200"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">4.0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col pl-0">
                                            <span className="text-muted font-small d-block mb-2">Hourly</span>
                                            <span className="h5 text-dark font-weight-bold">50$</span>
                                        </div>
                                        <div className="col">
                                            <span className="text-muted font-small d-block mb-2">People</span>
                                            <span className="h5 text-dark font-weight-bold">3-5</span>
                                        </div>
                                        <div className="col pr-0">
                                            <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                            <span className="h5 text-dark font-weight-bold">400</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/conference-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-primary position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Conference Room</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Conference Room</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Paris, La Defense, France</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">4.7</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col pl-0">
                                            <span className="text-muted font-small d-block mb-2">Hourly</span>
                                            <span className="h5 text-dark font-weight-bold">100$</span>
                                        </div>
                                        <div className="col">
                                            <span className="text-muted font-small d-block mb-2">People</span>
                                            <span className="h5 text-dark font-weight-bold">2-20</span>
                                        </div>
                                        <div className="col pr-0">
                                            <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                            <span className="h5 text-dark font-weight-bold">200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/lifestyle-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-secondary position-absolute listing-badge">
                                        <span className="font-weight-normal font-xs">Lifestyle Space</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Lifestyle Space</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Madrid, Hortaleza, Spain</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">5.0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col pl-0">
                                            <span className="text-muted font-small d-block mb-2">Daily</span>
                                            <span className="h5 text-dark font-weight-bold">350$</span>
                                        </div>
                                        <div className="col">
                                            <span className="text-muted font-small d-block mb-2">People</span>
                                            <span className="h5 text-dark font-weight-bold">10-25</span>
                                        </div>
                                        <div className="col pr-0">
                                            <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                            <span className="h5 text-dark font-weight-bold">100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                <a href="./html/pages/single-space.html" className="position-relative">
                                    <img src="assets/img/private-office.jpg" className="card-img-top space-image"
                                         alt="image"/>
                                <span className="badge badge-warning position-absolute listing-badge">
                                    <span className="font-weight-normal font-xs">Private Space</span>
                                </span>
                                </a>
                                <div className="card-body">
                                    <a href="./html/pages/single-space.html">
                                        <h5 className="font-weight-normal">Private Space</h5>
                                    </a>
                                    <div className="post-meta">
                                        <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Budapest, Ferencvaros, Hungary</span>
                                    </div>
                                    <div className="d-flex my-4">
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-warning"></i>
                                        <i className="star fas fa-star text-gray-200"></i>
                                        <span className="badge badge-pill badge-secondary ml-2">4.0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="col pl-0">
                                            <span className="text-muted font-small d-block mb-2">Monthly</span>
                                            <span className="h5 text-dark font-weight-bold">100$</span>
                                        </div>
                                        <div className="col">
                                            <span className="text-muted font-small d-block mb-2">People</span>
                                            <span className="h5 text-dark font-weight-bold">1</span>
                                        </div>
                                        <div className="col pr-0">
                                            <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
                                            <span className="h5 text-dark font-weight-bold">10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-lg-6 mt-3 d-flex flex-column text-center">
                            <div>
                                <a href="html/pages/all-spaces.html" className="btn btn-primary animate-up-2 mb-2">Browse
                                    All</a>
                            </div>
                            <span className="font-xs">142 spaces in 6 countries</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section py-lg-6 py-5 bg-soft">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <h2 className="h1"><span className="font-weight-bold">How</span> it works?</h2>
                            <p className="lead mt-3">All you’ll need are the details of the building and location, the
                                types of space, pricing and some good quality photographs.</p>
                        </div>
                    </div>
                    <div className="row mt-lg-6 mt-3">
                        <div className="col-6 mx-auto">
                            <div className="nav-wrapper">
                                <ul className="nav nav-pills nav-fill flex-column flex-sm-row mt-4 mt-lg-0 mb-lg-4 mb-0"
                                    id="tab-32" role="tablist">
                                    <li className="nav-item mb-3 mb-lg-0">
                                        <a className="nav-link flex-sm-fill text-sm-center border-0 active"
                                           id="tab-link-example-7" data-toggle="tab"
                                           href="#link-example-7" role="tab" aria-controls="link-example-7"
                                           aria-selected="true"><i className="far fa-building"></i>Find your Space</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link flex-sm-fill text-sm-center border-0"
                                           id="tab-link-example-8" data-toggle="tab" href="#link-example-8"
                                           role="tab" aria-controls="link-example-8" aria-selected="false"><i
                                            className="far fa-money-bill-alt"></i>Submit your Space</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                                    <div className="col mt-lg-6 mt-3 text-center">
                                        <a href="./html/pages/all-spaces.html" className="btn btn-primary animate-up-2"><i
                                            className="fas fa-search-location mr-2"></i>Find a Location</a>
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


        </main>
    );
}
