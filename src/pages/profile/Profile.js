import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from "./Profile.module.css";
import Tile from "../../components/tile/tile";
import profilepic from "../../assets/profilepic.jpg";

function Profile() {
    const { user } = useContext(AuthContext);

return(
            <span className={styles.great}>
                <span className={styles.picture}>
                    <Tile img={profilepic} imgDescription="Profilepicture" />
                 </span>
                <span className={styles.picture}>
                    <h1 className="center">Profielpagina van : {user.username}</h1>
                     <h2>Informatie profiel</h2>
                    <h3>Uw geregistreerde gegevens.</h3>
                    <span className={styles.picture}>
                        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Id:</strong> {user.id}</p>
                        <p><strong>Rol:</strong> {user.role}</p>
                        <p><strong>Info:</strong> {user.info}</p>
                    </span>
             </span>
                    <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </span>
)
}
export default Profile;