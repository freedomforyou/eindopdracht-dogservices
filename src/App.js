import React, { useState,  useContext } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Reviews from './pages/reviews/Reviews'
import Contact from './pages/contact/Contact'
import Bottomlinks from "./components/bottomlinks/Bottomlinks";
import RequirementsPage from "./pages/requirements/Requirements";
import DisclaimerPage from "./pages/disclaimer/Disclaimer";
import PrivacyPage from "./pages/privacy/Privacy";
import AdvertisersPage from './pages/advertisers/Advertisers';
import RegistrationPage from './pages/registration/Registration';
import RegistrationOwnersPage from './pages/registerowners/RegisterOwners';
import RegistrationServicesPage from './pages/registerservices/RegisterServices';
import WeatherOverview from "./pages/weatheroverview/WeatherOverview";
import DogownersPage from "./pages/dogowners/Dogowners";
import DogservicePage from "./pages/dogservices/Dogservices"
import UnsubscribePage from "./pages/unsubscribe/Unsubscribe";
import OverviewDogservices from "./pages/overviewdogservices/OverviewDogservices";
import OverviewDogowners from "./pages/overviewdogowners/OverviewDogowners";
import TopMenu from "./components/topmenu/TopMenu";
import WeatherVenlo from "./pages/weatheroverview/WeatherVenlo";
import WeatherTegelen from "./pages/weatheroverview/WeatherTegelen";
import WeatherBaarlo from "./pages/weatheroverview/WeatherBaarlo";
import WeatherBlerick from "./pages/weatheroverview/WeatherBlerick";
import WeatherMaasbree from "./pages/weatheroverview/WeatherMaasbree";
import Sun from "./pages/weatheroverview/Sun";
import Dry from "./pages/weatheroverview/Dry";
import SignUpServices from "./pages/registerservices/SignUpServices";
import SignUpServer from "./pages/registerowners/SignUpServer";
import SignInServer from "./pages/login/SignInServer";
import Profile from "./pages/profile/Profile";
import { AuthContext } from './context/AuthContext';

function PrivateRoute({ children, isAuth, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    const { isAuth } = useContext(AuthContext);

    return (
        <>
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

                <Route path="/weertegelen">
                    <WeatherTegelen />
                </Route>

                <Route path="/weerbaarlo">
                    <WeatherBaarlo />
                </Route>

                <Route path="/weermaasbree">
                    <WeatherMaasbree />
                </Route>

                <Route path="/weerblerick">
                    <WeatherBlerick />
                </Route>

                <Route path="/adverteerders">
                    <AdvertisersPage />
                </Route>

                    <Route path="/signupservices">
                        <SignUpServices />
                    </Route>

                    <Route path="/signinserver">
                        <SignInServer />
                    </Route>

                    <Route path="/signupserver">
                        <SignUpServer />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/zon">
                        <Sun />
                    </Route>

                    <Route path="/droog">
                        <Dry />
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
        </>
    );
}

export default App;
