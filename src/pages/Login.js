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
            <Tile img={login} imgDescription="Login" />
            <article>
                <section>
                    <h1>Login pagina</h1>
                    <label>
                        Email adres:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Wachtwoord:
                        <input type="text" name="password" />
                    </label>
                </section>
                <section>
                    <button type="button" onClick={signIn}>
                        Inloggen
                    </button>
                </section>
            </article>
        </main>

    );
}

export default Login;