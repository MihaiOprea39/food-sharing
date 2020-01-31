import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import './home.scss';
import video from '../../resources/video/intro.mp4';

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

export default function Home() {
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
        </main>
    );
}
