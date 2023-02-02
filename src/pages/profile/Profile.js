import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import styles from "./Profile.module.css";
import Tile from "../../components/tile/tile";
import profilepic from "../../assets/profilepic.jpg";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    useEffect(() => {
        // Info ophalen middels een mounting-cycle

        async function fetchProfileData() {
            // Token wordt uit de Local Storage gehaald als bewijs van authorisatie
            const [token] = localStorage.getItem('token');

            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user/', {
                    username: username,
                    email: email,
                });
                console.log(result.data);

                setProfileData(result.data);
                // JWT token aan de login-functie van de context meegegeven
                login(result.data.accessToken);

            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <>
            <span className={styles.great}>
             <span className={styles.picture}>
                    <Tile img={profilepic} imgDescription="Profilepicture" />
             </span>
                <span className={styles.picture}>
                    {/*<h1 className="center">Profielpagina van {user.username}</h1>*/}
                    <h2>Uw geregistreerde gegevens.</h2>
            <span className={styles.great}>
                {/*<p><strong>Gebruikersnaam:</strong> {user.username}</p>*/}
                {/*<p><strong>Email:</strong> {user.email}</p>*/}
            </span>

            {/*{Object.keys(user).length > 0 &&*/}
                <span className={styles.great}>
                    <h2>Informatie profiel</h2>
                    <span >
                        <h3>{profileData.username}</h3>
                        <p>{profileData.email}</p>
                    </span>
                </span>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    </span>
                </span>
        </>
    );
}

export default Profile;