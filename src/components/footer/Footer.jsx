import {Link} from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
        <footer className="footer section bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="footer-brand" to="./index.html">
                            <img src="./assets/img/brand/light.svg" alt="Brand logo footer"/>
                        </Link>
                        <p className="mt-4 text-gray">For those seeking the finest in services and technology in a
                            downtown
                            business center, without the high cost.</p>
                        <ul className="social-buttons mb-5 mb-lg-0">
                            <li>
                                <Link to="https://twitter.com/themesberg" target="_blank" rel="nofollow"
                                   className="btn btn-lg btn-link btn-twitter text-white" data-toggle="tooltip"
                                   data-placement="top" title="Follow us on Twitter">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/themesberg" target="_blank" rel="nofollow"
                                   className="btn btn-lg btn-link btn-facebook text-white" data-toggle="tooltip"
                                   data-placement="top" title="Like us on Facebook">
                                    <i className="fab fa-facebook"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/themesberg" target="_blank" rel="nofollow"
                                   className="btn btn-lg btn-link btn-github text-white" data-toggle="tooltip"
                                   data-placement="top" title="Star us on Github">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://dribbble.com/themesberg" target="_blank" rel="nofollow"
                                   className="btn btn-lg btn-link btn-dribbble text-white" data-toggle="tooltip"
                                   data-placement="top" title="Like us on Dribbble">
                                    <i className="fab fa-dribbble"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mt-4 mt-md-0">
                        <h6 className="font-weight-normal">About Us</h6>
                        <ul className="links-vertical">
                            <li><Link className="text-gray" to="https://themesberg.com/blog" target="_blank">Blog</Link>
                            </li>
                            <li><Link className="text-gray" to="https://themesberg.com/about" target="_blank">About
                                Us</Link></li>
                            <li><Link className="text-gray" to="https://themesberg.com/products"
                                   target="_blank">Products</Link>
                            </li>
                            <li><Link className="text-gray" to="https://themesberg.com/contact" target="_blank">Contact
                                Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 mt-4 mt-md-0">
                        <h6 className="font-weight-normal">Market</h6>
                        <ul className="links-vertical">
                            <li><Link className="text-gray" to="#">Sales FAQ</Link></li>
                            <li><Link className="text-gray" to="#">How to Register</Link></li>
                            <li><Link className="text-gray" to="#">Sell Goods</Link></li>
                            <li><Link className="text-gray" to="#">Receive Payment</Link></li>
                            <li><Link className="text-gray" to="#">Sell Goods</Link></li>
                            <li><Link className="text-gray" to="#">Receive Payment</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-4 mt-3 mt-lg-0 mt-4 mt-md-0">
                        <h6 className="font-weight-normal">Subscribe</h6>
                        <p className="text-gray">Join our mailing list. We write rarely, but only the best content.</p>
                        <form>
                            <div className="form-row">
                                <div className="col-12">
                                    <input type="email" className="form-control mb-2" placeholder="Email Address"
                                           name="email"
                                           required/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-secondary shadow-soft btn-block"
                                            data-loading-text="Sending">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <small className="text-gray mt-3 form-text">We’ll never share your details. See our <Link
                            className="text-light"
                            to="./html/pages/legal.html">Privacy Policy</Link>
                        </small>
                    </div>
                </div>
                <hr/>
                <div className="copyright text-center mt-5">
                    &#xA9; <span id="current-year"></span> <Link to="https://themesberg.com">Themesberg</Link>. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
