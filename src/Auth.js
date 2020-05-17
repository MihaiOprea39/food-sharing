import React, { useEffect, useState } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    const handleUser = () => {
        firebase.auth().onAuthStateChanged(async (authUser) => {
            let userParsedData = null;

            if (authUser) {
                const response = await firebase.firestore().collection('users').doc(authUser.uid).get();

                userParsedData = {...response.data(), uid: authUser.uid};
            }

            setCurrentUser(userParsedData)
            setPending(false)
        });
    }

    useEffect(() => {
        (async function asyncFn() {
            await handleUser();
        })();
    }, []);
    
    if (pending){
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
