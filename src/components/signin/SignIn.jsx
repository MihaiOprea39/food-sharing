import React from 'react';
import signInSvg from '../../assets/img/signin.svg';
import {Link} from "react-router-dom";

export default function SignIn() {
    return (
        <main>
            <section className="min-vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 col-md-6 col-lg-6 offset-md-1 order-md-2">
                            <img src={signInSvg} alt="..." className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 order-md-1">
                            <div>
                                <div className="text-center text-md-center mt-4 mt-md-0">
                                    <h2 className="font-weight-normal">WELCOME BACK!</h2>
                                    <p className="text-gray mb-0">Please log back in to access your included.co
                                        account.</p>
                                </div>
                                <div className="btn-wrapper mt-4 mb-5 text-center">
                                    <Link to="#"
                                       className="d-block d-sm-inline-block btn btn-sm btn-icon btn-twitter animate-up-1 mb-2 mr-1">
                                    <span className="btn-inner-icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                        <span className="btn-inner-text">Twitter</span>
                                    </Link>
                                    <Link to="#"
                                       className="d-block d-sm-inline-block btn btn-sm btn-icon btn-facebook animate-up-1 mb-2 mr-1">
                                    <span className="btn-inner-icon">
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                        <span className="btn-inner-text">Facebook</span>
                                    </Link>
                                    <Link to="#"
                                       className="d-block d-sm-inline-block btn btn-sm btn-icon btn-instagram animate-up-1 mb-2">
                                    <span className="btn-inner-icon">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                        <span className="btn-inner-text">Instagram</span>
                                    </Link>
                                </div>
                                <span className="clearfix"></span>
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-user"></i></span>
                                            </div>
                                            <input type="email" className="form-control" id="input-email"
                                                   placeholder="Enter email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-unlock-alt"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Password" type="password"
                                                   required/>
                                            <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="far fa-eye"></i>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-block btn-primary animate-up-2">Sign in
                                        </button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                <span>
                                    <small>Not registered?</small>
                                    <Link to="./sign-up.html" className="small font-weight-bold">Create account</Link>
                                </span>
                                    <div><Link to="./forgot-password-request.html" className="small text-right">Lost
                                        password?</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>);
}
