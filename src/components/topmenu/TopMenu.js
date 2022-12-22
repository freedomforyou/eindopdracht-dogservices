import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Button from "../button/button";
import { AuthContext } from '../../context/AuthContext';
import styles from "../../components/topmenu/TopMenu.css";


function TopMenu ({ isAuth, toggleAuth }) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <top>
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
                                <Button type="button">
                                    <NavLink to="/profile">
                                        Profile
                                    </NavLink>
                                </Button>
                            </li>

                            <li>
                                <Button className={styles.submit} type="button" clickHandler={signOut}>
                                    Uitloggen
                                </Button>
                            </li>
                        </>
                        :
                        <li>
                            <Button  className={styles.submit} type="button" >
                                <NavLink to="/signin">
                                    Inloggen
                                </NavLink>
                            </Button>
                        </li>

                    }
                </ul>
            </div>
        </top>
    );
}

export default TopMenu;