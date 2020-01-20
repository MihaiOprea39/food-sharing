import React, {lazy, Suspense} from 'react';
import './App.css';

// Vendor css
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'prismjs/themes/prism.css';

// Global styling
import './scss/spaces.scss';
// import './misc/scss/global.scss';

// import './assets/js/spaces';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/header/Header";

const HomeComponent = lazy(() => import('./components/home/Home'));
const SignInComponent = lazy(() => import('./components/signin/SignIn'));
const PickUpComponent = lazy(() => import('./components/PickUp'));
const NotFoundComponent = lazy(() => import('./components/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <SignInComponent/>
                    </Route>
                    <Route path="/pick-up">
                        <PickUpComponent/>
                    </Route>
                    <Route path="*">
                        <NotFoundComponent />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
