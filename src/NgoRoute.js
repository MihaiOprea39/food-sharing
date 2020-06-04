import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

const NgoRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser
                    ?
                    currentUser.type === '0'
                        ?
                            <RouteComponent {...routeProps} />
                        :
                        <Redirect to="/" />
                    :
                    <Redirect to="/login" />
            }
        />
    );
};

export default NgoRoute;
