import React from 'react';
import styles from './Dogowners.module.css'
import dogowners from '../../data/dogowners.json';
import { useParams, Link } from 'react-router-dom';
import Button from "../../components/button/button";

function DogownerDetails () {
    const { dogownerId } = useParams();
    const currentDogowner = dogowners.find((dogowner) => {
        return dogowner.id === dogownerId;
    });

    return (
        <>
             <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picture}>
                        <h3>Naam Hondenbezitter: {currentDogowner.name}</h3>
                        <h4>Woonplaats : {currentDogowner.location}</h4>
                        <h4>Ingeschreven sinds: {currentDogowner.date}</h4>
                        <h4>Informatie :</h4>
                        <p>{currentDogowner.content}</p>
                        <h4>Adres: {currentDogowner.address}</h4>
                        <h4>Telefoon: {currentDogowner.phonenumber}</h4>
                        <h4>Hondenras: {currentDogowner.dograce}</h4>
                    </div>
                    <div className={styles.picture}>
                        <img src={currentDogowner.piccode} alt={currentDogowner.name}/>
                        <h3>{currentDogowner.name}</h3>
                        <Button className={styles.submit} >
                            <Link to="/OverviewDogowners" style={{ textDecoration: 'none' }} >Terug naar overzicht Hondenbezitters</Link>
                        </Button>
                    </div>
                  </span>
            </span>
        </>
    );
}

export default DogownerDetails;