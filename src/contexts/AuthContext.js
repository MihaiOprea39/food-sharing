import React, {useEffect, useReducer, useState} from "react";
import firebase from "../firebase";
import loadingScreen from '../assets/img/gears-animation2.gif';
import {AuthReducer, loadUser} from "../reducers/AuthReducer";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, userDispatch] = useReducer(AuthReducer, null);
    const [pending, setPending] = useState(true);

    const isNewUser = () => {
        if (!firebase.auth().currentUser) {
            return false;
        }

        return firebase.auth().currentUser.metadata.creationTime === firebase.auth().currentUser.metadata.lastSignInTime;
    }

    const handleUser = () => {
        firebase.auth().onAuthStateChanged(async (authUser) => {
            let userData = null;

            if (authUser) {
                const response = await firebase.firestore().collection('users').doc(authUser.uid).get();

                userData = {...response.data(), uid: authUser.uid};
            }
            if (!isNewUser()) {
                userDispatch(loadUser(userData));
            }
            setPending(false)
        });
    }

    useEffect(() => {
        (async function asyncFn() {
            await handleUser();
        })();
    }, []);

    if (pending) {
        return <div className="foodshare-loading-banner">
            <img src={loadingScreen} alt=""/>
        </div>
    }

    return (
        <AuthContext.Provider value={{currentUser, userDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};
