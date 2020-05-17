import React, {lazy, Suspense} from 'react';
import './App.css';

// Vendor css
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'prismjs/themes/prism.css';

// Global styling
import './scss/spaces.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {AuthProvider} from "./Auth";
import ProtectedRoute from "./ProtectedRoute";

const HomeComponent = lazy(() => import('./components/home/Home'));
const SignInComponent = lazy(() => import('./components/SignIn'));
const RegisterComponent = lazy(() => import('./components/Register'));
const RestaurantComponent = lazy(() => import('./components/restaurants/Restaurant'));
const RestaurantsListComponent = lazy(() => import('./components/restaurants/list/RestaurantList'));
const PickUpComponent = lazy(() => import('./components/PickUp'));
const NotFoundComponent = lazy(() => import('./components/NotFound'));

function App() {
    return (
        <AuthProvider>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                    <Switch>
                        <ProtectedRoute exact path="/" component={HomeComponent} />

                        <Route exact path="/login">
                            <SignInComponent/>
                        </Route>
                        <Route exact path="/register">
                            <RegisterComponent/>
                        </Route>

                        <ProtectedRoute path="/pick-up" component={PickUpComponent} />
                        <ProtectedRoute path="/restaurant/:id" component={RestaurantComponent} />
                        <ProtectedRoute path="/restaurants" component={RestaurantsListComponent} />

                        <Route path="*">
                            <NotFoundComponent/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Suspense>
            </Router>
        </AuthProvider>
    );
}

export default App;
