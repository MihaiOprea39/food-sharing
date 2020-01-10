import React, {lazy, Suspense} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/Header";

const HomeComponent = lazy(() => import('./components/Home'));
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
                    <Route path="*">
                        <NotFoundComponent />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
