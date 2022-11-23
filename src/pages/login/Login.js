import React from 'react';
import styles from './Login.module.css'
import { useHistory } from 'react-router-dom';
import Tile from "../../components/tile/tile";
import login from "../../assets/login.jpg";


function Login({ toggleAuth }) {
    const history = useHistory();

    function signIn() {
        toggleAuth(true);
        history.push('/');
    }

    return (
        <span className={styles.great}>
             <span className={styles.picture}>
                    <Tile img={login} imgDescription="Login" />
             </span>
                <span className={styles.picture}>
                    <h1 className="center">Login pagina</h1>
                    <h4>Opmerking: de invulvelden zijn voor de show. Ik moet nog beginnen met de backend training het komende half jaar.</h4>
                    <label>
                        Email adres:
                        <input className="inputs" placeholder="Uw email" type="text" name="email" />
                    </label>
                     <p> </p>
                    <label>
                        Wachtwoord:
                        <input className="inputs" placeholder="Uw wachtwoord" type="text" name="password" />
                    </label>
                    <p> </p>
                    <div>
                        <button className={styles.submit} type="button" onClick={signIn}>
                        Inloggen
                    </button>
                    </div>

                </span>
        </span>

    );
}

export default Login;