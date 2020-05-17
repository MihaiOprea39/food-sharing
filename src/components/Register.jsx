import React, {useCallback, useContext, useState} from 'react';
import registerSvg from '../assets/img/signup.svg';
import {Link, Redirect, withRouter} from "react-router-dom";
import firebase from "../firebase";
import FoodShareToast from "./reusable/Toast";
import {AuthContext} from "../Auth";

const Register = ({history}) => {
    const [errorToast, setErrorToast] = useState(null);

    const handleRegister = useCallback(async event => {
        event.preventDefault();

        const {email, password, username, userType} = event.target.elements;

        try {
            const credentials = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);

            await firebase.firestore().collection('users').doc(credentials.user.uid).set({
                displayName: username.value,
                email: email.value,
                type: userType.value
            });

            history.push('/');

        } catch (error) {
            setErrorToast(error);
        }
    }, [history]);

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <main>
            {errorToast && (
                <FoodShareToast visible={!!errorToast}
                                message={errorToast.message}
                                severity="error"
                                onClose={() => setErrorToast(null)}
                />
            )}
            <section className="min-vh-100 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 col-md-6 col-lg-6 offset-md-1 order-md-2">
                            <img src={registerSvg} alt="..." className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 order-md-1">
                            <div>
                                <div className="mb-5 mt-3 text-center">
                                    <h2 className="font-weight-normal">Join Food Sharing</h2>
                                    <p className="text-gray mb-0">Drop in to a widespread food sharing network all around the globe.</p>
                                </div>
                                <span className="clearfix"/>
                                <form onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-user"/></span>
                                            </div>
                                            <input type="email" name="email" className="form-control" id="input-email"
                                                   placeholder="E-mail" required autoComplete="off"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-user-tag"/></span>
                                            </div>
                                            <input type="text" name="username" className="form-control" id="input-username"
                                                   placeholder="Username" required autoComplete="off"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-utensils"/></span>
                                            </div>
                                            <select className="custom-select custom-select" name="userType">
                                                <option value="0">NGO</option>
                                                <option value="1">Restaurant owner</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-unlock-alt"/></span>
                                            </div>
                                            <input className="form-control" placeholder="Password" type="password"
                                                   required autoComplete="off"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-unlock-alt"/></span>
                                            </div>
                                            <input type="password" className="form-control" name="password"
                                                   id="input-password-confirm"
                                                   placeholder="Confirm password" required autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-block btn-primary animate-up-2">Create
                                            account
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-4"><small>Already have an account?</small>
                                    <Link to="/login" className="small font-weight-bold ml-1">Sign in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default withRouter(Register);
