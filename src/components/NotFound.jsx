import React from 'react';
import NotFoundImage from '../assets/img/404-error.svg';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <main>
            <section className="section min-vh-100">
                <div className="container py-5">
                    <div className="row text-center d-flex align-items-center justify-content-center">
                        <div className="col-md-10 d-flex align-items-center">
                            <div>
                                <Link to="/">
                                    <img className="img-fluid w-75" src={NotFoundImage}
                                         alt="the 404 display" />
                                </Link>
                                <h1 className="mt-5 font-weight-light">Page not <span
                                    className="font-weight-bolder text-primary">found</span></h1>
                                <p className="lead my-4">Oops! Looks like you followed a bad link. If you think this is
                                    a
                                    problem with us, please tell us.</p>
                                <Link className="btn btn-primary animate-hover" to="/"><i
                                    className="fas fa-chevron-left mr-3 pl-2 animate-left-3"></i>Go
                                    back home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
