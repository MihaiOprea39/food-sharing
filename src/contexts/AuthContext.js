import React, {useEffect, useReducer, useState} from "react";
import firebase from "../firebase";
import loadingScreen from '../assets/img/gears-animation2.gif';
import {AuthReducer} from "../reducers/AuthReducer";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, dispatch] = useReducer(AuthReducer, null);
    const [pending, setPending] = useState(true);

    const handleUser = () => {
        firebase.auth().onAuthStateChanged(async (authUser) => {
            let userParsedData = null;
            
            console.log('default user', authUser);

            if (authUser) {
                const response = await firebase.firestore().collection('users').doc(authUser.uid).get();

                userParsedData = {...response.data(), uid: authUser.uid};
            }

            dispatch({type: '[USER] Load User', user: userParsedData})
            setPending(false)
        });
    }

    useEffect(() => {
        (async function asyncFn() {
            await handleUser();
        })();
    }, []);
    
    if (pending){
        return <div className="foodshare-loading-banner">
            <img src={loadingScreen} alt=""/>
        </div>
    }

    return (
        <AuthContext.Provider value={{currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};
