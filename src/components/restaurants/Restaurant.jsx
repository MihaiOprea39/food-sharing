import React, {useEffect, useState} from 'react';
import Banner from "../reusable/banner/Banner";
import Recommended from "../recommended/Recommended";
import firebase from "../../firebase";
import {Link, useParams} from "react-router-dom";
import ReviewsComponent from "../reviews/Reviews";
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import './restaurant.scss';
import Typography from "@material-ui/core/Typography";
import FoodShareMap from "../reusable/map/Map";

export default function Restaurant() {
    const [generatedId, setGeneratedId] = useState('');
    const [restaurant, setRestaurant] = useState(null);
    const [recommended, setRecommended] = useState([]);
    const [owner, setOwner] = useState(null);
    const [amenities, setAmenities] = useState(null);
    const [reviews, setReviews] = useState(null);
    const {id: restaurantId} = useParams();
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    const getRecommended = (locationId) => {
        firebase.firestore()
            .collection('restaurants')
            .where('location', '==', Number(locationId))
            .limit(3)
            .get()
            .then((snapshot) => {
                const data = snapshot.docs.map(document => document.data());
                const filteredData = data.filter(({id}) => id !== Number(restaurantId));

                setRecommended(filteredData);
            });
    }

    const getRestaurantData = () => {
        firebase.firestore()
            .collection('restaurants')
            .where('id', '==', Number(restaurantId))
            .get()
            .then(snapshot => {
                const data = snapshot.docs.map(document => {
                    setGeneratedId(document.id);

                    getAmenities(document);
                    getReviews(document);
                    getOwner();
                    getRecommended(document.data().location || null);

                    return {
                        ...document.data(),
                        readyForPickup: false
                    };
                });

                setRestaurant(data[0] || null);
            })
    };

    const getAmenities = (document) => {
        firebase.firestore()
            .collection('restaurants')
            .doc(document.id)
            .collection('amenities')
            .get()
            .then(snap => {
                const amenities = snap.docs.map(amenity => ({[amenity.data().name]: amenity.data().list}));

                setAmenities(amenities);
            });
    };

    const getReviews = (document) => {
        firebase.firestore()
            .collection('restaurants')
            .doc(document.id)
            .collection('reviews')
            .orderBy('timestamp', 'asc')
            .get()
            .then(snap => {
                const reviews = snap.docs.map(review => review.data());

                setReviews(reviews);
            });
    };

    const getOwner = () => {
        firebase.firestore()
            .collection('users')
            .where('type', '==', '1')
            .where('restaurants', 'array-contains', Number(restaurantId))
            .get()
            .then(snapshot => {
                const owner = snapshot.docs.map(document => document.data());

                setOwner(owner[0]);
            });
    };

    const onReviewSubmit = (review) => {
        firebase.firestore()
            .collection('restaurants')
            .doc(generatedId)
            .collection('reviews')
            .add(review)
            .then(() => {
                const updatedReviews = [...reviews, review];
                const updatedAverageRating = calculateAverageRating(updatedReviews);

                updateRating(updatedAverageRating);
                setReviews(updatedReviews);
            });
    };

    const updateRating = (rating) => {
        firebase.firestore()
            .collection('restaurants')
            .doc(generatedId)
            .set({
                rating
            }, {merge: true})
            .then(() => {
                setRestaurant({...restaurant, rating});
            });
    }

    const calculateAverageRating = (reviews) => {
        const ratings = reviews.map(({rating}) => Number(rating));
        const ratingsSum = ratings.reduce((acc, current) => acc + current, 0);

        return (ratingsSum / ratings.length).toFixed(2) || 0;
    };

    useEffect(getRestaurantData, []);

    return (
        <main>
            {restaurant && <Banner
                title={`${restaurant.name}`}
                subtitle="You are now viewing a single restaurant listing. You are about to discover a cohesive description
                 the owner has made available, the reviews the other organisation have left in regards to this listing, as well as all amenities
                 that set this restaurant apart from others. A location tool for simplicity is also available."
            >
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Link color="inherit" to="/restaurants">
                    Restaurants
                </Link>
                <Typography color="textPrimary">{restaurant.name}</Typography>
            </Banner>
            }
            {restaurant &&
            <div className="section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mt-3 ml-lg-0">
                            <div className="restaurant-single-wrapper">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={`${activeTab === '1' ? 'active' : ''}`}
                                            onClick={() => {
                                                toggleTab('1');
                                            }}
                                        >
                                            <span><i className="far fa-address-card"/> About</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={`${activeTab === '2' ? 'active' : ''}`}
                                            onClick={() => {
                                                toggleTab('2');
                                            }}
                                        >
                                            <span><i className="far fa-star"/> Reviews</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={`${activeTab === '3' ? 'active' : ''}`}
                                            onClick={() => {
                                                toggleTab('3');
                                            }}
                                        >
                                            <span><i className="fas fa-cubes"/> Amenities</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={`${activeTab === '4' ? 'active' : ''}`}
                                            onClick={() => {
                                                toggleTab('4');
                                            }}
                                        >
                                            <span><i className="fas fa-map-marker-alt"/> Location</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <h2 className="font-weight-normal">{restaurant.name}</h2>
                                        <div className="d-block d-md-flex">
                                            <span className="lh-120"><i
                                                className="fas fa-map-marker-alt mr-1 pr-1"/>
                                                {restaurant.address}
                                                <a data-fancybox className="text-primary ml-md-3" onClick={() => {
                                                    toggleTab('4');
                                                }}>See Location</a>
                                    </span>
                                        </div>
                                        <div className="fancy-gallery my-5">
                                            <div className="row">
                                                {
                                                    restaurant && restaurant.gallery.map((image, key) =>
                                                        <Link to={`/${process.env.REACT_APP_RESOURCES_ROOT}/${image}`}
                                                              className="mb-4 col-6 col-sm-4 img-fluid"
                                                              data-fancybox="images" data-caption="Restaurant space"
                                                              key={key}>
                                                            <img
                                                                src={`${process.env.REACT_APP_RESOURCES_ROOT}/${image}`}
                                                                alt=""/>
                                                        </Link>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        <p>{restaurant.description}</p>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ReviewsComponent reviews={reviews} addReview={onReviewSubmit}/>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div className="row">
                                            {amenities && amenities.map((amenity, key) =>
                                                <div className="col-12 col-lg-6 mb-4" key={key}>
                                                    <div className="card shadow-sm border-soft p-4">
                                                        <h5 className="font-weight-normal">{Object.keys(amenity)[0]}</h5>
                                                        <ul className="list-unstyled mb-0">
                                                            {Object.values(amenity)[0].map((value, index) =>
                                                                <li className="d-flex py-1" key={index}>
                                                                <span className="icon icon-xs icon-primary">
                                                                    <i className="fas fa-check-circle mr-2"/>
                                                                </span>
                                                                    <span>{value}</span>
                                                                </li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        {/*<FoodShareMap*/}
                                        {/*    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=places`}*/}
                                        {/*    loadingElement={<div style={{height: `100%`}}/>}*/}
                                        {/*    containerElement={<div style={{height: `100vh`}}/>}*/}
                                        {/*    mapElement={<div style={{height: `100%`}}/>}*/}
                                        {/*    markers={[restaurant]}*/}
                                        {/*    center={{*/}
                                        {/*        lat: restaurant.latitude,*/}
                                        {/*        lng: restaurant.longitude*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                        <aside className="col-12 col-lg-4 mt-2">
                            <div className="card bg-soft shadow-sm border-soft p-3">
                                <div className="d-flex align-items-center justify-content-center">
                                    <span><i className="foodshare-star star fas fa-star text-warning"/></span>
                                    <span className="h3 font-weight-bold mb-0 mr-1">{restaurant.rating} <span
                                        className="font-weight-light">/</span> 5</span>
                                </div>
                            </div>
                            {owner && (
                                <div className="card shadow-sm border-soft mt-4 p-3 owner-card">
                                    <h5 className="font-weight-normal">Property Owner</h5>
                                    <div className="media d-block align-items-center my-3 mb-0">
                                        <div className="avatar-lg mr-2" style={{width: '6rem', height: '6rem'}}>
                                            <img className="img-fluid rounded-circle"
                                                 src={owner.avatar}
                                                 alt="avatar"/>
                                        </div>
                                        <div className="avatar-name">
                                            <p className="font-weight-400">{owner.displayName}</p>
                                            <p className="font-weight-400">{owner.email}</p>
                                            <p className="font-weight-400">{owner.phone}</p>
                                        </div>
                                    </div>
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
                                                                        <input className="form-control"
                                                                               placeholder="Name"
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
                                                                        <input className="form-control"
                                                                               placeholder="Email"
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
                            )}
                        </aside>
                    </div>
                </div>
            </div>
            }
            {!!recommended.length && <Recommended restaurants={recommended}/> }
        </main>
    );
}
