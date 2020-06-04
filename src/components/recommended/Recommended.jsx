import React from "react";
import {Link} from "react-router-dom";
import CalculateStarRating from "../../services/calculate-star-rating";
import parse from "html-react-parser";

export default function Recommended({restaurants}) {
    return (
        <section className="section bg-soft">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="mb-5 font-weight-bold">Similar restaurants you might be interested into</h4>
                    </div>
                    {restaurants && restaurants.map((restaurant, key) => (
                        <div className="col-md-6 col-lg-4" key={key}>
                        <div className="card shadow-sm border-soft mb-4 animate-up-5">
                            <Link to={`restaurant/${restaurant.id}`} className="position-relative">
                                <img src={`${process.env.REACT_APP_RESOURCES_ROOT}/${restaurant.image}`}
                                     className="card-img-top space-image" alt="card-element"/>
                            </Link>
                            <div className="card-body">
                                <Link to={`restaurant/${restaurant.id}`}>
                                    <h5 className="font-weight-normal">{restaurant.name}</h5>
                                </Link>
                                <div className="post-meta">
                                    <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"/>{restaurant.address}</span>
                                </div>
                                <div className="d-flex my-4">
                                      {parse(CalculateStarRating(Number(restaurant.rating)))}
                                    <span className="badge badge-pill badge-secondary ml-2">{restaurant.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
