import React, { useState } from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Bottomlinks from "./components/Bottomlinks";
import RequirementsPage from "./pages/Requirements";
import DisclaimerPage from "./pages/Disclaimer";
import PrivacyPage from "./pages/Privacy";
import AdvertisersPage from './pages/Advertisers';
import RegistrationPage from './pages/Registration';
import RegistrationOwnersPage from './pages/RegisterOwners';
import RegistrationServicesPage from './pages/RegisterServices';
import WeatherOverview from "./pages/WeatherOverview";
import DogownersPage from "./pages/Dogowners";
import DogservicePage from "./pages/Dogservices"
import UnsubscribePage from "./pages/Unsubscribe";
import OverviewDogservices from "./pages/OverviewDogservices";
import OverviewDogowners from "./pages/OverviewDogowners";
import TopMenu from "./components/TopMenu";
import WeatherVenlo from "./pages/WeatherVenlo";

function PrivateRoute({ children, isAuth, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <div>
            <TopMenu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/reviews">
                    <Reviews />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/weersoverzicht">
                    <WeatherOverview />
                </Route>

                <Route path="/registration">
                    <RegistrationPage />
                </Route>

                <Route path="/dogowners">
                    <DogownersPage />
                </Route>

                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated} />
                </Route>

                <Route path="/Requirements">
                    <RequirementsPage />
                </Route>

                <Route path="/Disclaimer">
                    <DisclaimerPage />
                </Route>

                <Route path="/Privacy">
                    <PrivacyPage />
                </Route>

                <Route path="/registerowners">
                    <RegistrationOwnersPage />
                </Route>

                <Route path="/registerservices">
                    <RegistrationServicesPage />
                </Route>

                <Route path="/Unsubscribe">
                    <UnsubscribePage />
                </Route>

                <Route path="/weervenlo">
                    <WeatherVenlo />
                </Route>

                <Route path="/adverteerders">
                    <AdvertisersPage />
                </Route>

                <PrivateRoute exact path="/OverviewDogservices" isAuth={isAuthenticated}>
                    <OverviewDogservices />
                </PrivateRoute>

                <PrivateRoute exact path="/dogservice/:dogserviceId" isAuth={isAuthenticated}>
                    <DogservicePage />
                </PrivateRoute>

                <PrivateRoute exact path="/OverviewDogowners" isAuth={isAuthenticated}>
                    <OverviewDogowners />
                </PrivateRoute>

                <PrivateRoute exact path="/dogowner/:dogownerId" isAuth={isAuthenticated}>
                    <DogownersPage />
                </PrivateRoute>

            </Switch>

            <Bottomlinks/>
        </div>
    );
}

export default App;
