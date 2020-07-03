import {Link} from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
        <footer className="footer section bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Link className="footer-brand" to="./index.html">
                            <img src={`${process.env.REACT_APP_RESOURCES_ROOT}/light.svg`} alt="Brand logo footer"/>
                        </Link>
                        <p className="mt-4 text-gray">For those seeking the finest in food sharing services and
                            technology in a fast-paced, always online platform, without the hassle that usually comes
                            along.</p>
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
                </div>
                <hr/>
                <div className="copyright text-center mt-5 d-flex justify-content-center align-items-center">
                    <p id="current-year ml-3">Food Sharing 2020. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
