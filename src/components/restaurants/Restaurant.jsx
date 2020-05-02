import React from 'react';
import Banner from "../banner/Banner";
import Recommended from "../recommended/Recommended";

export default function Restaurant() {
    return (
        <main>
            <Banner/>
            <div className="section pt-5 pt-lg-6">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav>
                                <div className="nav nav-tabs flex-column flex-md-row shadow-soft border-soft mb-3"
                                     id="nav-tab"
                                     role="tablist">
                                    <a className="nav-item nav-link active" id="nav-about-tab" data-toggle="tab"
                                       href="#nav-about"
                                       role="tab" aria-controls="nav-about" aria-selected="true"><i
                                        className="far fa-address-card"></i>About</a>
                                    <a className="nav-item nav-link" id="nav-video-tab" data-toggle="tab"
                                       href="#nav-video"
                                       role="tab" aria-controls="nav-video" aria-selected="false"><i
                                        className="far fa-play-circle"></i>Video</a>
                                    <a className="nav-item nav-link" id="nav-amenities-tab" data-toggle="tab"
                                       href="#nav-amenities"
                                       role="tab" aria-controls="nav-amenities" aria-selected="false"><i
                                        className="fas fa-cubes"></i>Amenities</a>
                                    <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab"
                                       href="#nav-reviews"
                                       role="tab" aria-controls="nav-reviews" aria-selected="false"><i
                                        className="far fa-star"></i>Reviews</a>
                                    <a className="nav-item nav-link" id="nav-location-tab" data-toggle="tab"
                                       href="#nav-location"
                                       role="tab" aria-controls="nav-location" aria-selected="false"><i
                                        className="fas fa-map-marker-alt"></i>Location</a>
                                </div>
                            </nav>
                            <div className="tab-content mt-5 mb-3" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-about" role="tabpanel"
                                     aria-labelledby="nav-about-tab">
                                    <h2 className="font-weight-normal">L'atelier Vancouver Coworking</h2>
                                    <div className="d-block d-md-flex">
                                        <h6 className="text-secondary font-weight-light"><i
                                            className="fas fa-check-circle mr-1 pr-1"></i>Verified</h6>
                                        <span className="lh-120 ml-md-4"><i
                                            className="fas fa-map-marker-alt mr-1 pr-1"></i>26,
                                        Vancouver, BC, Canada - 324578
                                        <a data-fancybox
                                           href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6971494,-74.2598683,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
                                           className="text-primary ml-md-3">See Location</a>
                                    </span>
                                    </div>
                                    <div className="fancy-gallery my-5">
                                        <div className="row">
                                            <a href="../../../public/assets/img/conference-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Conference Space">
                                                <img src="../../../public/assets/img/conference-office.jpg" alt=""/>
                                            </a>
                                            <a href="../../../public/assets/img/cowork-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Cowork Office">
                                                <img src="../../../public/assets/img/cowork-office.jpg" alt=""/>
                                            </a>
                                            <a href="../../../public/assets/img/lifestyle-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Lifestyle Space">
                                                <img src="../../../public/assets/img/lifestyle-office.jpg" alt=""/>
                                            </a>
                                            <a href="../../../public/assets/img/image-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Conference Space">
                                                <img src="../../../public/assets/img/image-office.jpg" alt=""/>
                                            </a>
                                            <a href="../../../public/assets/img/meeting-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Meeting Office">
                                                <img src="../../../public/assets/img/meeting-office.jpg" alt=""/>
                                            </a>
                                            <a href="../../../public/assets/img/private-office.jpg"
                                               className="mb-4 col-6 col-sm-4 img-fluid"
                                               data-fancybox="images" data-caption="Private Space">
                                                <img src="../../../public/assets/img/private-office.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <p><span className="font-weight-bold">L'atelier</span> is the brainchild of 3
                                        innovative
                                        guys that want to create a working hub for the local community. The plan is to
                                        offer a cool place to hang out with other creative souls and let the brainwaves
                                        go
                                        berserk.</p>
                                    <p>The guys were the group behind the Startup Weekend Vancouver, Startup Pirates
                                        Vancouver and Startup Coffee Vancouver, so they are no fools and have plenty of
                                        experience in startups and community growth. This project is another notch into
                                        creating Vancouver as a regional startup hub.</p>
                                    <p>Cowork Vancouver is aiming to attract the techies, the freelance developers or
                                        anyone wishing to get involved in the startup scene - really there are no
                                        exclusions of bodies who may want a desk - the founders just want a community of
                                        entrepreneurs and geeks to mingle with.</p>
                                    <div className="row shadow-sm mt-5">
                                        <div className="col-6 col-xl-3 card bg-soft">
                                            <div className="card-body text-center">
                                                <div className="icon">
                                                    <i className="far fa-calendar-alt"></i>
                                                </div>
                                                <p className="font-weight-normal h4 mt-3 mb-0">
                                                    <span className="counter text-dark mr-2">1</span>Year
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Minimum term
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-xl-3 card bg-soft border-left">
                                            <div className="card-body text-center">
                                                <div className="icon">
                                                    <i className="fas fa-ruler-combined"></i>
                                                </div>
                                                <p className="font-weight-normal mt-3 mb-0 h4">
                                                    <span className="counter text-dark mr-2">180</span>SqFt
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Space size
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-xl-3 card bg-soft border-left">
                                            <div className="card-body text-center">
                                                <div className="icon">
                                                    <i className="fas fa-users"></i>
                                                </div>
                                                <p className="font-weight-normal mt-3 mb-0 h4">
                                                    <span className="counter text-dark mr-2">15</span>+
                                                </p>
                                                <p className="text-muted mb-0">
                                                    People
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-xl-3 card bg-soft border-left">
                                            <div className="card-body text-center">
                                                <div className="icon">
                                                    <i className="fas fa-couch"></i>
                                                </div>
                                                <p className="font-weight-normal mt-3 mb-0 h4">
                                                    <span className="text-dark mr-2">Meeting</span>
                                                </p>
                                                <p className="text-muted mb-0">
                                                    Space type
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-video" role="tabpanel"
                                     aria-labelledby="nav-video-tab">
                                    <div className="video-poster overlay-dark position-relative rounded">
                                        <a data-fancybox href="https://vimeo.com/40842620">
                                            <span className="icon icon-white icon-xl"><i
                                                className="fas fa-play-circle"></i></span>
                                        </a>
                                        <img src="../../../public/assets/img/lifestyle-office.jpg" alt="Image"/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-amenities" role="tabpanel"
                                     aria-labelledby="nav-amenities-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Basic</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>High-Speed WiFi</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Air Conditioning</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Heating</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Seating</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Standing Desks</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Ergonomic Chairs</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Beanbags</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Community</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Events</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Community Lunches</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Workshops</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Community Drinks</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Facebook Group for Members</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Mentorship Programs</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Pitching events</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Accelerator programs</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Toastmasters</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Facilities</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Kitchen</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Skype Room</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Makerspace</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Personal Lockers</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Phone Booth</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Event Space For Rent</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Nearby Airbnb</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Onsite Airbnb</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Equipment</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Printer</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>3D Printer</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Projector</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Transportation</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>5 Minute Walk From Public Transit</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>10 Minute Walk From Metro Station</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Bike Parking</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Relax Zones</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Outdoor Terrace</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Lounge / Chill-out Area</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mb-4">
                                            <div className="card shadow-sm border-soft p-4">
                                                <h5 className="font-weight-normal">Caffeine Fix</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Free Tea</span>
                                                    </li>
                                                    <li className="d-flex py-1">
                                                    <span className="icon icon-xs icon-primary">
                                                        <i className="fas fa-check-circle mr-2"></i>
                                                    </span>
                                                        <span>Free Coffee</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-reviews" role="tabpanel"
                                     aria-labelledby="nav-reviews-tab">
                                    <p className="font-small font-weight-light text-gray mb-3">3 reviews found </p>
                                    <div className="bg-white border border-soft shadow-soft  p-4 mb-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <a href="./profile.html"
                                                   className="btn btn-xs btn-icon-only btn-primary mr-2 p-1"><span
                                                    className="fa fa-user"></span></a>
                                                <a href="./profile.html"
                                                   className="font-weight-normal font-small text-gray-800">Margaret
                                                    Mead</a>
                                                <span className="ml-2 font-small d-none d-md-inline">1 month ago</span>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                            <span className="d-flex justify-content-center">
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star  fas text-warning  mr-2"></i>
                                                <i className="star far fa-star text-gray"></i>
                                            </span>
                                            </div>
                                        </div>
                                        <p className="m-0">Always remember that you are absolutely unique. Just like
                                            everyone else.</p>
                                    </div>
                                    <div className="bg-white border border-soft shadow-soft  p-4 mb-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <a href="./profile.html"
                                                   className="btn btn-xs btn-icon-only btn-secondary mr-2 p-1"><span
                                                    className="fa fa-user"></span></a>
                                                <a href="./profile.html"
                                                   className="font-weight-normal font-small text-gray-800">Steve
                                                    Jobs</a>
                                                <span className="ml-2 font-small d-none d-md-inline">2 months ago</span>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                            <span className="d-flex justify-content-center">
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star  fas text-warning mr-2"></i>
                                                <i className="star fa-star  fas text-warning"></i>
                                            </span>
                                            </div>
                                        </div>
                                        <p className="m-0">Your time is limited, so don't waste it living someone else's
                                            life. Don't be trapped by dogma -- which is living with the results of other
                                            people's thinking.</p>
                                    </div>
                                    <div className="bg-white border border-soft shadow-soft  p-4 mb-4">
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <a href="./profile.html"
                                                   className="btn btn-xs btn-icon-only btn-tertiary mr-2 p-1"><span
                                                    className="fa fa-user"></span></a>
                                                <a href="./profile.html"
                                                   className="font-weight-normal font-small text-gray-800">Eleanor
                                                    Roosevelt</a>
                                                <span className="ml-2 font-small d-none d-md-inline">1 year ago</span>
                                            </div>
                                            <div className="d-flex justify-content-end align-items-center">
                                            <span className="d-flex justify-content-center">
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star fas text-warning mr-2"></i>
                                                <i className="star fa-star  fas text-warning  mr-2"></i>
                                                <i className="star far fa-star text-gray"></i>
                                            </span>
                                            </div>
                                        </div>
                                        <p className="m-0">The future belongs to those who believe in the beauty of
                                            their dreams.</p>
                                    </div>
                                    <form method="post">
                                        <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
                                            <h4 className="m-0">Add a review</h4>
                                            <span className="d-flex justify-content-center stars-rating">
                                            <i className="star far fa-star text-gray mr-2" data-rating-value="1"></i>
                                            <i className="star far fa-star text-gray mr-2" data-rating-value="2"></i>
                                            <i className="star far fa-star text-gray mr-2" data-rating-value="3"></i>
                                            <i className="star far fa-star text-gray mr-2" data-rating-value="4"></i>
                                            <i className="star far fa-star text-gray" data-rating-value="5"></i>
                                        </span>
                                        </div>
                                        <textarea name="description" className="form-control border"
                                                  placeholder="Add a review" rows="6"
                                                  data-bind-characters-target="#charactersRemaining" maxLength="1000"
                                                  required></textarea>
                                        <div className="d-flex justify-content-between mt-3">
                                            <small className="font-weight-light">
                                                <span id="charactersRemaining">1000</span> characters remaining</small>
                                            <button type="submit" className="btn btn-primary animate-up-2">Add review
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-location" role="tabpanel"
                                     aria-labelledby="nav-location-tab">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mapouter">
                                                <div className="gmap_canvas">
                                                    <iframe id="gmap_canvas"
                                                            src="https://maps.google.com/maps?q=san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <aside className="col-12 col-lg-4 mt-3 mt-lg-0">
                            <div className="card bg-soft shadow-sm border-soft p-3">
                                <div className="d-flex align-items-baseline">
                                    <span className="h3 font-weight-bold mb-0 mr-1">$ 250</span>
                                    <span className="small">/month</span>
                                </div>
                            </div>
                            <div className="card shadow-sm border-soft mt-4 p-3">
                                <button className="btn btn-primary availability" value="06/20/2018">Booking
                                    Availability
                                </button>
                            </div>
                            <div className="card shadow-sm border-soft mt-4 p-3">
                                <h5 className="font-weight-normal">Property Owner</h5>
                                <div className="media d-flex align-items-center my-3">
                                    <a href="./profile.html" className="avatar-lg mr-2" data-toggle="tooltip"
                                       data-placement="top" title="More details">
                                        <img className="img-fluid rounded-circle"
                                             src="../../../public/assets/img/team/profile-image-4.jpg" alt="avatar"/>
                                    </a>
                                    <div className="avatar-name"><a className="text-gray" href="./profile.html"
                                                                    data-toggle="tooltip" data-placement="top"
                                                                    title="More details">Tanislav Robert</a></div>
                                </div>
                                <button type="button" className="btn btn-block btn-secondary mb-3" data-toggle="modal"
                                        data-target="#modal-form">Contact Host
                                </button>
                                <div className="modal fade" id="modal-form" tabIndex="-1" role="dialog"
                                     aria-labelledby="modal-form"
                                     aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                                        <div className="modal-content">
                                            <div className="modal-body p-0">
                                                <div className="card shadow-md border-0">
                                                    <div className="card-body position-relative">
                                                        <button type="button" className="close mb-2"
                                                                data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                        <form className="mt-3">
                                                            <div className="form-group">
                                                                <div className="input-group mb-4">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><i
                                                                            className="far fa-user"></i></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Name"
                                                                           type="text"
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="input-group mb-4">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text"><i
                                                                            className="far fa-envelope"></i></span>
                                                                    </div>
                                                                    <input className="form-control" placeholder="Email"
                                                                           type="email"
                                                                           required/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <textarea className="form-control"
                                                                      placeholder="Write message"
                                                                      id="message-2" rows="4" required></textarea>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit"
                                                                        className="btn btn-block btn-primary mt-4">Send
                                                                    Message
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
                            <div className="card shadow-sm border-soft mt-4 p-3">
                                <h5 className="font-weight-normal">Request Desk</h5>
                                <form className="mt-3">
                                    <div className="form-group">
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-user"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Name" type="text" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-envelope"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Email" type="email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-mobile"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Phone" type="number" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    <textarea className="form-control" placeholder="Write short message to host"
                                              id="message"
                                              rows="4" required></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-block btn-primary mt-4">Send Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <Recommended/>
        </main>
    );
}
