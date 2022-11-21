import React from 'react';
import { useHistory } from 'react-router-dom';
import Tile from "../components/tile";
import login from "../assets/login.jpg";


function Login({ toggleAuth }) {
    const history = useHistory();

    function signIn() {
        toggleAuth(true);
        history.push('/');
    }

    return (
        <main>
            <section>
                <Tile img={login} imgDescription="Login" />
            </section>

            <article>
                <section>
                    <h1 className="center">Login pagina</h1>
                    <h4>Opmerking: de invulvelden zijn voor de show. Ik moet nog beginnen met de backend training het komende half jaar.</h4>
                    <label>
                        Email adres:
                        <input className="inputs" type="text" name="email" />
                    </label>
                    <label>
                        Wachtwoord:
                        <input className="inputs" type="text" name="password" />
                    </label>
                </section>
                <section>
                    <button className="submit" type="button" onClick={signIn}>
                        Inloggen
                    </button>
                </section>
            </article>
        </main>

    );
}

export default Login;