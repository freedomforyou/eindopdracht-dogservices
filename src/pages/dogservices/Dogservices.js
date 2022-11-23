import React from 'react';
import styles from './Dogservices.module.css'
import dogservices from '../../data/dogservices.json';
import { useParams, Link } from 'react-router-dom';
import Button from "../../components/button/button";

function DogserviceDetails () {
    const { dogserviceId } = useParams();

    const currentDogservice = dogservices.find((dogservice) => {
        return dogservice.id === dogserviceId;
    });

    return (
        <>
             <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picture}>
                        <h3>Naam Uitlaat Service: {currentDogservice.title}</h3>
                        <h4>Locatie: {currentDogservice.location}</h4>
                        <h4>Ingeschreven sinds: {currentDogservice.date}</h4>
                        <p>Korte beschrijving: {currentDogservice.content}</p>
                        <p>Eigenaar: {currentDogservice.serviceowner}</p>
                        <p>Adres: {currentDogservice.address}</p>
                        <p>Telefoon: {currentDogservice.phonenumber}</p>
                        <h4>Algemene beoordeling: </h4>
                        <p>{currentDogservice.general}</p>
                    </div>
                    <div className={styles.picture}>
                        <img src={currentDogservice.piccode} alt={currentDogservice.serviceowner}/>
                        <h3>{currentDogservice.serviceowner}</h3>
                        <Button>
                            <Link to="/OverviewDogservices" style={{ textDecoration: 'none' }} >Terug naar Overzicht Uitlaatdiensten</Link>
                        </Button>
                    </div>
                 </span>
            </span>
        </>
    );
}

export default DogserviceDetails;