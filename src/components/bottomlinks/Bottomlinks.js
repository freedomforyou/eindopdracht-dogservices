import React from 'react';
import { NavLink, Link} from 'react-router-dom';

function Bottomlinks () {

    return (
        <>
            <footer>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/Requirements">
                            Algemene voorwaarden
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/disclaimer">
                            Disclaimer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy">
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">
                            Registreren
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Unsubscribe">
                            Uitschrijven
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signupserver">
                            Signup Heroku
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/signinserver">
                            Signin Heroku
                        </NavLink>
                    </li>
                </ul>
            </footer>

            <footer>
                <h4>Frontend Eindopdracht © Koos Dorssers 2022</h4>
            </footer>
        </>
    );
}

export default Bottomlinks;