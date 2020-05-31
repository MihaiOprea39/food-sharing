import React, {useCallback, useContext, useState} from 'react';
import signInSvg from '../assets/img/signin.svg';
import {Link, withRouter, Redirect} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import firebase from "../firebase";
import FoodShareToast from "./reusable/Toast";

const SignIn = ({history}) => {
    const [errorToast, setErrorToast] = useState(null);

    const handleLogIn = useCallback(async event => {
        event.preventDefault();

        const {email, password} = event.target.elements;

        try {
            await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
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
                            <img src={signInSvg} alt="..." className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 order-md-1">
                            <div>
                                <div className="text-center text-md-center mt-4 mt-md-0">
                                    <h2 className="font-weight-normal mb-5">Welcome back!</h2>
                                </div>
                                <span className="clearfix"/>

                                <form onSubmit={handleLogIn}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="far fa-user"/></span>
                                            </div>
                                            <input type="email" className="form-control" id="input-email"
                                                   placeholder="Enter email" required name="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-unlock-alt"/></span>
                                            </div>
                                            <input className="form-control" name="password" placeholder="Password" type="password"
                                                   required/>
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
                                    <Link to="/register" className="small font-weight-bold ml-1">Create account</Link>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default withRouter(SignIn);
