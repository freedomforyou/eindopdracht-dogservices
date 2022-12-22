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

    useEffect(() => {
        // Info ophalen middels een mounting-cycle

        async function fetchProfileData() {
            // Token wordt uit de Local Storage gehaald als bewijs van authorisatie
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
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
                    <h1 className="center">Profielpagina van {user.username}</h1>
                    <h2>Uw geregistreerde gegevens.</h2>
            <span className={styles.great}>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </span>

            {Object.keys(profileData).length > 0 &&
                <span className={styles.great}>
                    <h2>Informatie profiel</h2>
                    <span >
                        <h3>{profileData.title}</h3>
                        <p>{profileData.content}</p>
                    </span>
                </span>
            }
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
                    </span>
                </span>
        </>
    );
}

export default Profile;