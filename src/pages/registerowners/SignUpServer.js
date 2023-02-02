import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from "../registration/Registration.module.css";
import Tile from "../../components/tile/tile";
import profilepic from "../../assets/profilepic.jpg";
import {useForm} from "react-hook-form";

function SignUpServer() {
// formuliergegevens
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        console.log(username, email, password)
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email: email,
                password: password,
                username: username,
                role: ["user"]
            });
            console.log(result)
// Na Registratie wordt er naar de login-pagina doorgestuurd.
            history.push('/signinserver');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }
    return (<><span className={styles.great}><span className={styles.picture}><Tile img={profilepic} imgDescription="Profilepicture" /></span><span className={styles.picture}><div className={styles.picture}><h1>Registratie Hondenbezitters Heroku</h1><h4>U kunt zich gratis en vrijblijvend inschrijven. Uw gegevens zijn veilig en worden niet met derden gedeeld.</h4></div><form onSubmit={handleSubmit}><section><label htmlFor="email-field">
Emailadres:<input
            className="inputs"
            type="email"
            id="email-field"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /></label></section><p> </p><section><label htmlFor="username-field">
Gebruikersnaam:<input
            className="inputs"
            type="text"
            id="username-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        /></label></section><p> </p><section><label htmlFor="password-field">
Wachtwoord:<input
            className="inputs"
            type="password"
            id="password-field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        /></label></section><p> </p><section><label htmlFor="role-field">
Role:<input
            className="inputs"
            type="role"
            id="role-field"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
        /></label></section>
            {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}<button
                type="submit"
                className="form-button"
                disabled={loading}>
Registreren</button><p>Door te verzenden gaat u akkoord met de <Link to="/Requirements">Alg. Voorwaarden</Link> en <Link to="/privacy">Privacy Policy</Link></p>
             <p>U kunt zich ten alle tijde weer uitschrijven. Uw gegevens worden dan definitief verwijderd.</p>
    </form><p>Heb je al een account? Je kunt je <Link to="/signinserver">hier</Link> inloggen.</p>

    </span>
    </span>
    </>
    );
}
export default SignUpServer;