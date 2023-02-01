import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import styles from "../registration/Registration.module.css";
import Tile from "../../components/tile/tile";
import loginpic from "../../assets/login.jpg";

function SignInServer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(result.data);

            // JWT token aan de login-functie van de context meegegeven
            // login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <span className={styles.great}>
             <span className={styles.picture}>
                    <Tile img={loginpic} imgDescription="Loginpicture" />
             </span>
                <span className={styles.picture}>
                    <h1 className="center">Login pagina Heroku</h1>
                    <p>Vul aub de inloggegevens in.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username-field">
                    Username:
                     <p> </p>
                    <input
                        className="inputs"
                        type="username"
                        id="username-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <p> </p>
                <label htmlFor="password-field">
                    Wachtwoord:
                     <p> </p>
                    <input
                        className="inputs"
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Combinatie van username en wachtwoord is onjuist</p>}
                <p> </p>
                <button
                    type="submit"
                    className="form-button"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan aub eerst.</p>
                    </span>
                </span>
        </>
    );
}

export default SignInServer;