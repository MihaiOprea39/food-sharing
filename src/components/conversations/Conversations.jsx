import React, {useState} from 'react';
import './conversations.scss';
import {Link} from "react-router-dom";
import Conversation from "./Conversation";
import MessagesPanel from "./MessagesPanel";

export default function Conversations() {
    const [conversations, setConversations] = useState([]);

    return (
        <div className="conversations-parent-wrapper">
            <div className="modal fade" id="disconnected" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row mb-5">
                                <div className="col-md-6 offset-md-3">
                                    <img src="./dist/media/svg/undraw_warning_cyit.svg" className="img-fluid"
                                         alt="image"/>
                                </div>
                            </div>
                            <p className="lead text-center">Application disconnected</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-success btn-lg">Reconnect</button>
                            <a href="login.html" className="btn btn-link">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal call fade" id="call" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="call">
                                <div>
                                    <figure className="mb-4 avatar avatar-xl">
                                        <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                             alt="image"/>
                                    </figure>
                                    <h4>Brietta Blogg <span className="text-success">calling...</span></h4>
                                    <div className="action-button">
                                        <button type="button" className="btn btn-danger btn-floating btn-lg"
                                                data-dismiss="modal">
                                            <i data-feather="x"></i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-pulse btn-floating btn-lg">
                                            <i data-feather="phone"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal call fade" id="videoCall" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="call">
                                <div>
                                    <figure className="mb-4 avatar avatar-xl">
                                        <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                             alt="image"/>
                                    </figure>
                                    <h4>Brietta Blogg <span className="text-success">video calling...</span></h4>
                                    <div className="action-button">
                                        <button type="button" className="btn btn-danger btn-floating btn-lg"
                                                data-dismiss="modal">
                                            <i data-feather="x"></i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-pulse btn-floating btn-lg">
                                            <i data-feather="video"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addFriends" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i data-feather="user-plus" className="mr-2"></i> Add Friends
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="ti-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-info">Send invitations to friends.</div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="emails" className="col-form-label">Email addresses</label>
                                    <input type="text" className="form-control" id="emails"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="col-form-label">Invitation message</label>
                                    <textarea className="form-control" id="message"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="newGroup" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i data-feather="users" className="mr-2"></i> New Group
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="ti-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="group_name" className="col-form-label">Group name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="group_name"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-light" data-toggle="tooltip" title="Emoji"
                                                    type="button">
                                                <i data-feather="smile"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-2">The group members</p>
                                <div className="form-group">
                                    <div className="avatar-group">
                                        <figure className="avatar" data-toggle="tooltip" title="Tobit Spraging">
                                            <span className="avatar-title bg-success rounded-circle">T</span>
                                        </figure>
                                        <figure className="avatar" data-toggle="tooltip" title="Cloe Jeayes">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                        <figure className="avatar" data-toggle="tooltip" title="Marlee Perazzo">
                                            <span className="avatar-title bg-warning rounded-circle">M</span>
                                        </figure>
                                        <figure className="avatar" data-toggle="tooltip" title="Stafford Pioch">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                        <figure className="avatar" data-toggle="tooltip" title="Bethena Langsdon">
                                            <span className="avatar-title bg-info rounded-circle">B</span>
                                        </figure>
                                        <a href="#" title="Add friends">
                                            <figure className="avatar">
                                    <span className="avatar-title bg-primary rounded-circle">
                                        <i data-feather="plus"></i>
                                    </span>
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Create Group</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="settingModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i data-feather="settings" className="mr-2"></i> Settings
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="ti-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#account" role="tab"
                                       aria-controls="account"
                                       aria-selected="true">Account</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#notification" role="tab"
                                       aria-controls="notification" aria-selected="false">Notification</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#contact" role="tab"
                                       aria-controls="contact"
                                       aria-selected="false">Security</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="account" role="tabpanel">
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch1"/>
                                        <label className="custom-control-label" htmlFor="customSwitch1">Allow connected
                                            contacts</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch2"/>
                                        <label className="custom-control-label" htmlFor="customSwitch2">Confirm message
                                            requests</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch3"/>
                                        <label className="custom-control-label" htmlFor="customSwitch3">Profile
                                            privacy</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch4"/>
                                        <label className="custom-control-label" htmlFor="customSwitch4">Developer mode
                                            options</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch5"/>
                                        <label className="custom-control-label" htmlFor="customSwitch5">Two-step
                                            security
                                            verification</label>
                                    </div>
                                </div>
                                <div className="tab-pane" id="notification" role="tabpanel">
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch6"/>
                                        <label className="custom-control-label" htmlFor="customSwitch6">Allow mobile
                                            notifications</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch7"/>
                                        <label className="custom-control-label" htmlFor="customSwitch7">Notifications
                                            from
                                            your
                                            friends</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch8"/>
                                        <label className="custom-control-label" htmlFor="customSwitch8">Send
                                            notifications
                                            by email</label>
                                    </div>
                                </div>
                                <div className="tab-pane" id="contact" role="tabpanel">
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch9"/>
                                        <label className="custom-control-label" htmlFor="customSwitch9">Suggest changing
                                            passwords every
                                            month.</label>
                                    </div>
                                    <div className="form-item custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" readOnly
                                               id="customSwitch10"/>
                                        <label className="custom-control-label" htmlFor="customSwitch10">Let me know
                                            about
                                            suspicious
                                            entries to your account</label>
                                    </div>
                                    <div className="form-item">
                                        <p>
                                            <a className="btn btn-light" data-toggle="collapse" href="#collapseExample"
                                               role="button"
                                               aria-expanded="false"
                                               aria-controls="collapseExample">
                                                <i data-feather="plus" className="mr-2"></i> Security Questions
                                            </a>
                                        </p>
                                        <div className="collapse" id="collapseExample">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Question 1"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Answer 1"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Question 2"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Answer 2"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editProfileModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i data-feather="edit-2" className="mr-2"></i> Edit Profile
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="ti-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#personal" role="tab"
                                       aria-controls="personal" aria-selected="true">Personal</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#about" role="tab"
                                       aria-controls="about"
                                       aria-selected="false">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#social-links" role="tab"
                                       aria-controls="social-links" aria-selected="false">Social Links</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="personal" role="tabpanel">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="fullname" className="col-form-label">Fullname</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="fullname"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i data-feather="user"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Avatar</label>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <figure className="avatar mr-3 item-rtl">
                                                        <img src="https://via.placeholder.com/200X200"
                                                             className="rounded-circle"
                                                             alt="image"/>
                                                    </figure>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="customFile"/>
                                                    <label className="custom-file-label" htmlFor="customFile">Choose
                                                        file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="city" className="col-form-label">City</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="city"
                                                       placeholder="Ex: Columbia"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i data-feather="target"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="col-form-label">Phone</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="phone"
                                                       placeholder="(555) 555 55 55"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i data-feather="phone"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website" className="col-form-label">Website</label>
                                            <input type="text" className="form-control" id="website"
                                                   placeholder="https://"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="about" role="tabpanel">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="about-text" className="col-form-label">Write a few words
                                                that
                                                describe
                                                you</label>
                                            <textarea className="form-control" id="about-text"></textarea>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" readOnly
                                                   id="customCheck1"/>
                                            <label className="custom-control-label" htmlFor="customCheck1">View
                                                profile</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane" id="social-links" role="tabpanel">
                                    <form>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-facebook">
                                            <i className="ti-facebook"/>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-twitter">
                                            <i className="ti-twitter"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-instagram">
                                            <i className="ti-instagram"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-linkedin">
                                            <i className="ti-linkedin"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-dribbble">
                                            <i className="ti-dribbble"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-youtube">
                                            <i className="ti-youtube"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-google">
                                            <i className="ti-google"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Username"/>
                                                <div className="input-group-append">
                                        <span className="input-group-text bg-whatsapp">
                                            <i className="fa fa-whatsapp"></i>
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <header className="main-header">
                <div id="logo">
                    <a href="#">
                        <img src="dist/media/img/logo.png" alt="logo"/>
                    </a>
                </div>
                <div className="header-nav">
                    <ul className="nav">
                        <li><Link to="/" data-navigation-target="contact-information">Home</Link></li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="navbar-toggler">
                        <a href="#">
                            <i data-feather="menu"></i>
                        </a>
                    </div>
                    <div className="dropdown">
                        <a href="#" data-toggle="dropdown">
                            <span className="mr-2 d-none d-sm-inline-block">Mirabelle Tow</span>
                            <figure className="avatar">
                                <img src="https://via.placeholder.com/200X200" className="rounded-circle" alt="image"/>
                            </figure>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item"
                               data-navigation-target="contact-information">Profile</a>
                            <a href="#" className="dropdown-item" data-toggle="modal"
                               data-target="#settingModal">Settings</a>
                            <div className="dropdown-divider"></div>
                            <a href="login.html" className="dropdown-item text-danger">Logout</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="layout">

                <div className="content">

                    <div id="chats" className="sidebar chat-list active">
                        <header>
                            <span>Chats</span>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body">
                            {conversations && (
                                <ul className="list-group list-group-flush">
                                    {conversations.map((conversation, index) =>
                                        <Conversation key={index} conversation={conversation}/>
                                    )}
                                    <li className="list-group-item">
                                        <figure className="avatar avatar-state-success">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                        <div className="users-list-body">
                                            <div>
                                                <h5 className="text-primary">Townsend Seary</h5>
                                                <p>What's up, how are you?</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="new-message-count">3</div>
                                                <small className="text-primary">03:41 PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <figure className="avatar avatar-state-warning">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                        <div className="users-list-body">
                                            <div>
                                                <h5 className="text-primary">Forest Kroch</h5>
                                                <p>
                                                    <i className="fa fa-camera mr-1"></i> Photo
                                                </p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="new-message-count">1</div>
                                                <small className="text-primary">Yesterday</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item active-chat">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Byrom Guittet</h5>
                                                <p>I sent you all the files. Good luck with 😃</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">11:05 AM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Margaretta Worvell</h5>
                                                <p>I need you today. Can you come with me?</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <figure className="avatar">
                                <span className="avatar-title bg-warning bg-success rounded-circle">
                                    <i className="fa fa-users"></i>
                                </span>
                                        </figure>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>😍 My Family 😍</h5>
                                                <p><strong>Maher Ruslandi: </strong>Hello!!!</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">Yesterday</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-warning">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Jennica Kindred</h5>
                                                <p>
                                                    <i className="fa fa-video-camera mr-1"></i>
                                                    Video
                                                </p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <span className="avatar-title bg-info rounded-circle">M</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Marvin Rohan</h5>
                                                <p>Have you prepared the files?</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">Yesterday</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Townsend Seary</h5>
                                                <p>Where are you?</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <span className="avatar-title bg-secondary rounded-circle">G</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Gibb Ivanchin</h5>
                                                <p>I want to visit them.</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Harald Kowalski</h5>
                                                <p>Reports are ready.</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <span className="avatar-title bg-success rounded-circle">A</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Afton McGilvra</h5>
                                                <p>I do not know where is it. Don't ask me, please.</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Alexandr Donnelly</h5>
                                                <p>Can anyone enter the meeting?</p>
                                            </div>
                                            <div className="users-list-action">
                                                <small className="text-muted">03:41 PM</small>
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <a href="#" className="dropdown-item">Add to archive</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="p-3">
                            <button data-navigation-target="new-chat" className="btn btn-primary btn-block btn-lg">New
                                Chat
                            </button>
                        </div>
                    </div>

                    <div id="friends" className="sidebar">
                        <header>
                            <span>Friends</span>
                            <ul className="list-inline">
                                <li className="list-inline-item" data-toggle="tooltip" title="Add friends">
                                    <a className="btn btn-outline-light" href="#" data-toggle="modal"
                                       data-target="#addFriends">
                                        <i data-feather="user-plus"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-danger sidebar-close">
                                        <i data-feather="x"></i>
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body">
                            <p>137 Friends</p>
                            <div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Harrietta Souten</h5>
                                                <p>Dental Hygienist</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-warning">
                                                <span className="avatar-title bg-success rounded-circle">A</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Aline McShee</h5>
                                                <p>Marketing Assistant</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-success">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Brietta Blogg</h5>
                                                <p>Actuary</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-success">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Karl Hubane</h5>
                                                <p>Chemical Engineer</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Jillana Tows</h5>
                                                <p>Project Manager</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-success">
                                                <span className="avatar-title bg-info rounded-circle">AD</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Alina Derington</h5>
                                                <p>Nurse</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-secondary">
                                                <span className="avatar-title bg-warning rounded-circle">S</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Stevy Kermeen</h5>
                                                <p>Associate Professor</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Stevy Kermeen</h5>
                                                <p>Senior Quality Engineer</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar">
                                                <img src="https://via.placeholder.com/200X200"
                                                     className="rounded-circle"
                                                     alt="image"/>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Gloriane Shimmans</h5>
                                                <p>Web Designer</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <figure className="avatar avatar-state-warning">
                                                <span className="avatar-title bg-secondary rounded-circle">B</span>
                                            </figure>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Bernhard Perrett</h5>
                                                <p>Software Engineer</p>
                                            </div>
                                            <div className="users-list-action">
                                                <div className="action-toggle">
                                                    <div className="dropdown">
                                                        <a data-toggle="dropdown" href="#">
                                                            <i data-feather="more-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">New chat</a>
                                                            <a href="#" data-navigation-target="contact-information"
                                                               className="dropdown-item">Profile</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="new-chat" className="sidebar">
                        <header>
                            <span>New Chat</span>
                            <ul className="list-inline">
                                <li className="list-inline-item" data-toggle="tooltip" title="Create Group">
                                    <a className="btn btn-outline-light" href="#" data-toggle="modal"
                                       data-target="#newGroup">
                                        <i data-feather="users"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-danger sidebar-close">
                                        <i data-feather="x"></i>
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Harrietta Souten</h5>
                                            <p>Dental Hygienist</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-warning">
                                            <span className="avatar-title bg-success rounded-circle">A</span>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Aline McShee</h5>
                                            <p>Marketing Assistant</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-success">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Brietta Blogg</h5>
                                            <p>Actuary</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-success">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Karl Hubane</h5>
                                            <p>Chemical Engineer</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Jillana Tows</h5>
                                            <p>Project Manager</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-success">
                                            <span className="avatar-title bg-info rounded-circle">AD</span>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Alina Derington</h5>
                                            <p>Nurse</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-secondary">
                                            <span className="avatar-title bg-warning rounded-circle">S</span>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Stevy Kermeen</h5>
                                            <p>Associate Professor</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Stevy Kermeen</h5>
                                            <p>Senior Quality Engineer</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar">
                                            <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                                 alt="image"/>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Gloriane Shimmans</h5>
                                            <p>Web Designer</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <figure className="avatar avatar-state-warning">
                                            <span className="avatar-title bg-secondary rounded-circle">B</span>
                                        </figure>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Bernhard Perrett</h5>
                                            <p>Software Engineer</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">New chat</a>
                                                        <a href="#" data-navigation-target="contact-information"
                                                           className="dropdown-item">Profile</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item text-danger">Block</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="favorites" className="sidebar">
                        <header>
                            <span>Favorites</span>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-danger sidebar-close">
                                        <i data-feather="x"></i>
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body">
                            <ul className="list-group list-group-flush users-list">
                                <li className="list-group-item">
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Jennica Kindred</h5>
                                            <p>I know how important this file is to you. You can trust me ;)</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Remove favorites</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Marvin Rohan</h5>
                                            <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"/>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Remove favorites</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Frans Hanscombe</h5>
                                            <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"/>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Remove favorites</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Karl Hubane</h5>
                                            <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"/>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Remove favorites</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="archived" className="sidebar">
                        <header>
                            <span>Archived</span>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-danger sidebar-close">
                                        <i data-feather="x"/>
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <form>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </form>
                        <div className="sidebar-body">
                            <ul className="list-group list-group-flush users-list">
                                <li className="list-group-item">
                                    <figure className="avatar">
                                        <span className="avatar-title bg-danger rounded-circle">M</span>
                                    </figure>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Mercedes Pllu</h5>
                                            <p>I know how important this file is to you. You can trust me ;)</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"/>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Restore</a>
                                                        <div className="dropdown-divider"/>
                                                        <a href="#" className="dropdown-item text-danger">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <figure className="avatar">
                                        <span className="avatar-title bg-secondary rounded-circle">R</span>
                                    </figure>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Rochelle Golley</h5>
                                            <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                                        </div>
                                        <div className="users-list-action">
                                            <div className="action-toggle">
                                                <div className="dropdown">
                                                    <a data-toggle="dropdown" href="#">
                                                        <i data-feather="more-horizontal"/>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item btn-open-chat">Open</a>
                                                        <a href="#" className="dropdown-item">Restore</a>
                                                        <div className="dropdown-divider"/>
                                                        <a href="#" className="dropdown-item text-danger">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="contact-information" className="sidebar">
                        <header>
                            <span>Profile</span>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-outline-light" data-toggle="modal"
                                       data-target="#editProfileModal"
                                       title="Edit profile">
                                        <i data-feather="edit-2"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-danger sidebar-close">
                                        <i data-feather="x"/>
                                    </a>
                                </li>
                            </ul>
                        </header>
                        <div className="sidebar-body">
                            <div className="text-center">
                                <figure className="avatar avatar-xl mb-4">
                                    <img src="https://via.placeholder.com/200X200" className="rounded-circle"
                                         alt="image"/>
                                </figure>
                                <h5 className="mb-1">Mirabelle Tow</h5>
                                <small className="text-muted font-italic">Last seen: Today</small>
                                <ul className="nav nav-tabs justify-content-center mt-5" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                           role="tab"
                                           aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                           role="tab"
                                           aria-controls="profile" aria-selected="false">Media</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <p className="text-muted">Lorem ipsum is a pseudo-Latin text used in web design,
                                        typography,
                                        layout, and printing in place of English to emphasise design elements over
                                        content.
                                        It's also called placeholder (or filler) text. It's a convenient tool for
                                        mock-ups.</p>
                                    <div className="mt-4 mb-4">
                                        <h6>Phone</h6>
                                        <p className="text-muted">(555) 555 55 55</p>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <h6>City</h6>
                                        <p className="text-muted">Germany / Berlin</p>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <h6>Website</h6>
                                        <p>
                                            <a href="#">www.franshanscombe.com</a>
                                        </p>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <h6 className="mb-3">Social media accounts</h6>
                                        <ul className="list-inline social-links">
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-facebook"
                                                   data-toggle="tooltip" title="Facebook">
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-twitter"
                                                   data-toggle="tooltip" title="Twitter">
                                                    <i className="fa fa-twitter"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-whatsapp"
                                                   data-toggle="tooltip" title="Whatsapp">
                                                    <i className="fa fa-whatsapp"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-linkedin"
                                                   data-toggle="tooltip" title="Linkedin">
                                                    <i className="fa fa-linkedin"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-google"
                                                   data-toggle="tooltip"
                                                   title="Google">
                                                    <i className="fa fa-google"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="btn btn-sm btn-floating btn-instagram"
                                                   data-toggle="tooltip" title="Instagram">
                                                    <i className="fa fa-instagram"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <h6 className="mb-3">Settings</h6>
                                        <div className="form-group">
                                            <div className="form-item custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customSwitch11"/>
                                                <label className="custom-control-label"
                                                       htmlFor="customSwitch11">Block</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-item custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" readOnly
                                                       id="customSwitch12"/>
                                                <label className="custom-control-label"
                                                       htmlFor="customSwitch12">Mute</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-item custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customSwitch13"/>
                                                <label className="custom-control-label" htmlFor="customSwitch13">Get
                                                    notification
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel"
                                     aria-labelledby="profile-tab">
                                    <h6 className="mb-3 d-flex align-items-center justify-content-between">
                                        <span>Recent Files</span>
                                        <a href="#" className="btn btn-link small">
                                            <i data-feather="upload" className="mr-2"/> Upload
                                        </a>
                                    </h6>
                                    <div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                                <a href="#">
                                                    <i className="fa fa-file-pdf-o text-danger mr-2"/> report4221.pdf
                                                </a>
                                            </li>
                                            <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                                <a href="#">
                                                    <i className="fa fa-image text-muted mr-2"/> avatar_image.png
                                                </a>
                                            </li>
                                            <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                                <a href="#">
                                                    <i className="fa fa-file-excel-o text-success mr-2"/>
                                                    excel_report_file2020.xlsx
                                                </a>
                                            </li>
                                            <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                                <a href="#">
                                                    <i className="fa fa-file-text-o text-warning mr-2"/> articles342133.txt
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MessagesPanel/>

                </div>
            </div>
        </div>
    );
}
