import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Button from "./button";


function TopMenu ({ isAuth, toggleAuth }) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>

                    <li>
                        <Button type="button">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </Button>
                    </li>

                    <li>
                        <Button type="button">
                            <NavLink to="/reviews">
                                Reviews
                            </NavLink>
                        </Button>
                    </li>

                    <li>
                        <Button type="button">
                            <NavLink to="/registration">
                                Registreren
                            </NavLink>
                        </Button>
                    </li>

                    <li>
                        <Button type="button">
                            <NavLink to="/weersoverzicht">
                                Weersverwachting
                            </NavLink>
                        </Button>
                    </li>

                    <li>
                        <Button type="button">
                            <NavLink to="/adverteerders">
                                Adverteerders
                            </NavLink>
                        </Button>
                    </li>

                    <li>
                        <Button type="button">
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </Button>
                    </li>


                    {isAuth === true
                        ?  <> <Redirect to="/OverviewDogservices" />

                            <li>
                                <Button type="button">
                                    <NavLink to="/OverviewDogservices">
                                        Uitlaatdiensten
                                    </NavLink>
                                </Button>
                            </li>

                            <li>
                                <Button type="button">
                                    <NavLink to="/OverviewDogowners">
                                        Hondenbezitters
                                    </NavLink>
                                </Button>
                            </li>

                            <li>
                                <Button className="submit" type="button" onClick={signOut}>
                                    Uitloggen
                                </Button>
                            </li>
                        </>
                        :
                        <li>
                            <Button className="submit" type="button" >
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </Button>
                        </li>

                    }
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;