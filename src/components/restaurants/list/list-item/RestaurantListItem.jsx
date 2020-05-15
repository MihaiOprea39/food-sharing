import React from 'react';
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import CalculateStarRating from '../../../../services/calculate-star-rating';

export default function RestaurantListItem({restaurant}) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div
                    className="restaurant-list-item card card-article-wide shadow-sm flex-md-row no-gutters border-soft mb-4 animate-up-5">
                    <Link to={`restaurant/${restaurant.id}`}
                          className="col-md-6 col-lg-6">
                        <img
                            src={`${process.env.REACT_APP_RESOURCES_ROOT}/${restaurant.image}`}
                            alt="image"
                            className="card-img-top space-image-lg"/>
                    </Link>
                    <div
                        className="card-body d-flex flex-column justify-content-between col-auto p-4">
                        <Link to={`restaurant/${restaurant.id}`}>
                            <h4 className="font-weight-normal mb-0">{restaurant.name}</h4>
                        </Link>
                        <div className="post-meta">
                            <span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"/>
                                {restaurant.address}
                            </span>
                        </div>
                        <div className="d-flex my-4">
                            {parse(CalculateStarRating(restaurant.rating))}
                            <span className="badge badge-pill badge-secondary ml-2">
                                {Number(restaurant.rating).toFixed(1)}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                                <span className="text-muted font-small d-block mb-2">Monthly</span>
                                <span className="h5 text-dark font-weight-bold">500$</span>
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
        </div>
    );
}
