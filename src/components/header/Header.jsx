import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import './header.scss';

// https://codedaily.io/tutorials/60/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React

function TrackScroll(header) {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const decideShrink = () => {
            const scrolled = document.scrollingElement.scrollTop;
            const position = header.offsetTop;

            setShrink(scrolled > position + 90);
        };
        window.addEventListener('scroll', decideShrink);

        return () => window.removeEventListener('scroll', decideShrink);
    }, [header.offsetTop]);

    return shrink;
}

export default function Header() {
    const header = useRef();
    const shrink = TrackScroll(header);


    return (
        <header className="header-global">
            <nav id="navbar-main"
                 className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="navbar-brand-dark" src="./assets/img/brand/light.svg" alt="Logo light"/>
                        <img className="navbar-brand-light" src="./assets/img/brand/secondary.svg" alt="Logo dark"/>
                    </Link>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <Link to="/">
                                        <img src="./assets/img/brand/primary.svg" alt="Menu logo"/>
                                    </Link>
                                </div>
                                <div className="col-6 collapse-close">
                                    <Link to="#navbar_global" className="fas fa-times" data-toggle="collapse"
                                          data-target="#navbar_global" aria-controls="navbar_global"
                                          aria-expanded="false"
                                          aria-label="Toggle navigation"></Link>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover ml-3">
                            <li className="nav-item">
                                <Link to={`/restaurant/${1}`} className="nav-link">
                                    <span className="nav-link-inner-text">Single</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link" data-toggle="dropdown">

                                    <span className="nav-link-inner-text">Pages</span><i
                                    className="fas fa-angle-down nav-link-arrow"></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link to="./html/pages/single-space.html" className="dropdown-item">Space
                                            details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/all-spaces.html" className="dropdown-item">Listing
                                            spaces</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/submit-space.html" className="dropdown-item">Submit
                                            space</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/profile.html" className="dropdown-item">Space
                                            owner</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/about.html" className="dropdown-item">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/contact.html" className="dropdown-item">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="./html/pages/blank.html" className="dropdown-item">Blank page</Link>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#"
                                              className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
                                              aria-haspopup="true" aria-expanded="false">My account <i
                                            className="fas fa-angle-right nav-link-arrow"></i></Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="./html/pages/my-account.html" className="dropdown-item">My
                                                    account</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/my-listings.html" className="dropdown-item">My
                                                    listings</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/edit-space.html" className="dropdown-item">Edit
                                                    space</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#"
                                              className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
                                              aria-haspopup="true" aria-expanded="false">Authentication <i
                                            className="fas fa-angle-right nav-link-arrow"></i></Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="./html/pages/sign-in.html" className="dropdown-item">Sign
                                                    In</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/sign-up.html" className="dropdown-item">Sign
                                                    Up</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/forgot-password-request.html"
                                                      className="dropdown-item">Forgot password</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#"
                                              className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
                                              aria-haspopup="true" aria-expanded="false">Blog <i
                                            className="fas fa-angle-right nav-link-arrow"></i></Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="./html/pages/blog.html"
                                                      className="dropdown-item">Articles</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/blog-single.html" className="dropdown-item">Single
                                                    article</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#"
                                              className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center"
                                              aria-haspopup="true" aria-expanded="false">Special pages <i
                                            className="fas fa-angle-right nav-link-arrow"></i></Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="./html/pages/coming-soon.html" className="dropdown-item">Coming
                                                    Soon</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/legal.html" className="dropdown-item">Legal
                                                    page</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/404.html" className="dropdown-item">404
                                                    page</Link>
                                            </li>
                                            <li>
                                                <Link to="./html/pages/500.html" className="dropdown-item">500
                                                    page</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/restaurants" className="nav-link">
                                    <span className="nav-link-inner-text">List</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-lg-block">
                        <Link to="./html/pages/sign-in.html"
                              className="btn btn-sm btn-primary animate-up-1 ml-3">Login</Link>
                        <Link to="./html/pages/sign-up.html" className="btn btn-sm btn-white animate-up-1 ml-3">Sign
                            up</Link>
                        <Link to="./html/pages/submit-space.html" className="btn btn-sm btn-outline-white ml-3"><i
                            className="fas fa-plus mr-2"></i>List a Space</Link>
                    </div>
                    <div className="d-flex d-lg-none align-items-center">
                        <Link to="./html/pages/sign-in.html"
                              className="btn btn-sm btn-primary animate-up-1 ml-3">Login</Link>
                        <Link to="./html/pages/sign-up.html" className="btn btn-sm btn-white animate-up-1 ml-3">Sign
                            up</Link>
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse"
                                data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>
                </div>
            </nav>
        </header>
    );
}