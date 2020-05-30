import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../Auth";
import firebase from "../firebase";
import FoodShareToast from "./reusable/Toast";
import isEqual from 'lodash/isEqual';

const defaultUser = {
    displayName: '',
    email: '',
    phone: '',
};

const defaultToast = {
    visible: false,
    message: '',
    type: 'success'
};

export default function Profile() {
    const {currentUser} = useContext(AuthContext);
    const [updatedUser, setUpdatedUser] = useState(defaultUser);
    const [toast, setToast] = useState(defaultToast);

    const onDetailsChange = (event) => {
        setUpdatedUser({
            ...updatedUser,
            [event.target.name]: event.target.value
        })
    }

    const updatePassword = (event) => {
        event.persist();
        event.preventDefault();

        const {newPassword, confirmPassword} = event.target.elements;

        if ((!newPassword.value || !confirmPassword.value) || newPassword.value !== confirmPassword.value) {
            setToast({
                visible: true,
                message: 'Passwords do not match or have not been filled.',
                type: 'error'
            });

            return;
        }

        firebase.auth().currentUser.updatePassword(confirmPassword.value)
            .then(() => {
                setToast({
                    visible: true,
                    message: 'Password has been successfully updated.',
                    type: 'success'
                });

                event.target.reset();

            })
            .catch((error) => {
                setToast({
                    visible: true,
                    message: error.message,
                    type: 'error'
                });
            })
    }

    const updateProfile = () => {
        const {displayName, email, phone} = updatedUser;

        if (displayName !== currentUser.displayName) {
            firebase.auth().currentUser.updateProfile({displayName})
                .then(() => updateDatabaseCredential('displayName'));
        }

        if (email !== currentUser.email) {
            firebase.auth().currentUser.updateEmail(email)
                .then(() => updateDatabaseCredential('email'));
        }

        if (phone !== currentUser.phone) {
            updateDatabaseCredential('phone');
        }
    };

    // TO DO: UPDATE CURRENT USER THROUGH CONTEXT

    const updateDatabaseCredential = (credential) => {
        firebase
            .firestore()
            .collection('users')
            .doc(currentUser.uid)
            .set({
                [credential]: updatedUser[credential]
            }, {merge: true})
            .then(() =>
                setToast({
                        ...toast,
                        visible: true,
                        message: 'Your profile has been successfully updated.',
                        type: 'success'
                    }
                ));
    };

    const isUpdateButtonDisabled = () => isEqual(currentUser, updatedUser);

    useEffect(() => setUpdatedUser(currentUser), [currentUser]);

    return (
        <div className="section section-lg">

            <FoodShareToast visible={toast.visible}
                            message={toast.message}
                            severity={toast.type}
                            onClose={() => setToast({...toast, visible: false})}
            />

            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <nav>
                            <div className="nav nav-tabs flex-column flex-md-row shadow-soft border-soft" id="nav-tab"
                                 role="tablist">
                                <Link to="#" className="nav-item nav-link text-dark active"><i
                                    className="far fa-user mr-2"/>My account</Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card shadow-soft border p-4 mb-4">
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="displayName">Display name</label>
                                        <input type="text" className="form-control shadow-soft" id="displayName"
                                               placeholder="First name" name="displayName" autoComplete="off"
                                               value={updatedUser.displayName}
                                               onChange={onDetailsChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control shadow-soft" id="email"
                                               placeholder="Enter email" name="email" autoComplete="off"
                                               value={updatedUser.email}
                                               onChange={onDetailsChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="phonenumber">Phone number</label>
                                        <input type="text" className="form-control shadow-soft" id="phonenumber"
                                               placeholder="Phone number" name="phone" autoComplete="off"
                                               value={updatedUser.phone}
                                               onChange={onDetailsChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button
                                        className={`btn btn-primary btn-dark mt-2 animate-up-2 ${isUpdateButtonDisabled() ? 'not-allowed-element' : ''}`}
                                        onClick={updateProfile}>Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <form action="#" method="post" className="card shadow-soft border p-4 mb-4">
                            <label>Profile picture</label>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <div className="profile-image-small fmxw-100 mr-4">
                                    <img src="../../assets/img/team/profile-image-2.jpg"
                                         className="card-img-top rounded-circle" alt="image"/>
                                </div>
                                <div className="custom-file">
                                    <input id="profile-image" type="file" className="custom-file-input"/>
                                    <label className="custom-file-label" htmlFor="profile-image">Choose file</label>
                                </div>
                            </div>
                            <small className="text-gray-500 font-weight-light font-xs d-block mt-2">Image should be
                                75x75 pixels and only *.jpg, *.png and *.jpeg formats are accepted.</small>
                        </form>
                        <form onSubmit={updatePassword} className="card shadow-soft border p-4">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="new-password">New password</label>
                                        <input type="password" name="newPassword" className="form-control shadow-soft"
                                               id="new-password"
                                               placeholder="New password"/>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group" style={{marginTop: '31px'}}>
                                        <input type="password" name="confirmPassword"
                                               className="form-control shadow-soft"
                                               placeholder="Confirm password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-outline-dark mt-2" type="submit">Change password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
