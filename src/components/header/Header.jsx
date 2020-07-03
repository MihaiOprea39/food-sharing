import {Link} from "react-router-dom";
import React, {useContext} from "react";
import './header.scss';
import firebase from "../../firebase";
import {AuthContext} from "../../contexts/AuthContext";

export default function Header() {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <></>;
    }

    return (
        <header className="header-global">
            <nav id="navbar-main"
                 className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary headroom py-lg-2 px-lg-6">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="navbar-brand-dark" src={`${process.env.REACT_APP_RESOURCES_ROOT}/light.svg`} alt="Logo light"/>
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
                                          aria-label="Toggle navigation"/>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover ml-3">
                            <li className="nav-item">
                                <Link to="/restaurants" className="nav-link">
                                    <span className="nav-link-inner-text">Restaurants</span>
                                </Link>
                            </li>
                            {currentUser && currentUser.type === '0' && <li className="nav-item">
                                <Link to="/pick-up" className="nav-link">
                                    <span className="nav-link-inner-text">Pick up</span>
                                </Link>
                            </li> }
                        </ul>
                    </div>
                    {currentUser && (
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav navbar-nav-hover ml-3">
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link d-flex align-items-center p-0"
                                          data-toggle="dropdown">

                                    <span
                                        className="nav-link-inner-text">{currentUser ? currentUser.displayName : 'Account'}</span>
                                        <div className="profile-image-small ml-1">
                                            {currentUser.avatar &&
                                            <img src={currentUser.avatar}
                                                 className="card-img-top rounded-circle" alt="image"
                                                 style={{width: '45px', height: '45px'}}/>
                                            }
                                        </div>
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/profile" className="dropdown-item">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/conversations" className="dropdown-item">Conversations</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#" className="dropdown-item"
                                                  onClick={() => firebase.auth().signOut()}>Sign out</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
