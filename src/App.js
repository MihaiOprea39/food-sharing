import React, {lazy, Suspense} from 'react';
import './App.css';

// Vendor css
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'prismjs/themes/prism.css';

// Global styling
import './scss/spaces.scss';

// import './reusable/scss/global.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const HomeComponent = lazy(() => import('./components/home/Home'));
const SignInComponent = lazy(() => import('./components/signin/SignIn'));
const RestaurantComponent = lazy(() => import('./components/restaurants/Restaurant'));
const RestaurantsListComponent = lazy(() => import('./components/restaurants/list/RestaurantList'));
const PickUpComponent = lazy(() => import('./components/PickUp'));
const NotFoundComponent = lazy(() => import('./components/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <HomeComponent/>
                    </Route>
                    <Route path="/pick-up">
                        <PickUpComponent/>
                    </Route>
                    <Route path="/restaurant/:id">
                        <RestaurantComponent/>
                    </Route>
                    <Route path="/restaurants">
                        <RestaurantsListComponent/>
                    </Route>
                    <Route path="*">
                        <NotFoundComponent/>
                    </Route>
                </Switch>
                <Footer/>
            </Suspense>
        </Router>
    );
}

export default App;
