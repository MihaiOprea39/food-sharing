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
                                <a href="https://github.com/MihaiOprea39" target="_blank" rel="nofollow"
                                   className="btn btn-lg btn-link btn-github text-white" data-toggle="tooltip"
                                   data-placement="top" title="Star us on Github">
                                    <i className="fab fa-github"/>
                                </a>
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
                </div>
                <hr/>
                <div className="copyright text-center mt-5 d-flex justify-content-center align-items-center">
                    <p id="current-year ml-3">Food Sharing 2020. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
