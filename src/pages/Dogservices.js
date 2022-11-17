import React from 'react';
import dogservices from '../data/dogservices.json';
import { useParams, Link } from 'react-router-dom';
import Tile from "../components/tile";
import chantaljansen from "../assets/1.jpg";
import Button from "../components/button";

function DogserviceDetails () {
    const { dogserviceId } = useParams();

    const currentDogservice = dogservices.find((dogservice) => {
        return dogservice.id === dogserviceId;
    });

    return (
        <>
            <main>
                <h2>Naam Uitlaat Service:</h2>
                <h1>"{currentDogservice.title}"</h1>
            </main>
            <main>
                <section>
                    <Tile>
                        <h4>Locatie: {currentDogservice.location}</h4>
                        <h4>Ingeschreven sinds: {currentDogservice.date}</h4>
                        <p>Korte beschrijving: "{currentDogservice.content}"</p>
                        <p>Eigenaar: {currentDogservice.owner}</p>
                        <p>Adres: {currentDogservice.address}</p>
                        <p>Algemene beoordeling:</p>
                        <p>{currentDogservice.general}</p>
                    </Tile>
                </section>
                <section>
                    <Tile img={chantaljansen} imgDescription={currentDogservice.owner} />
                    <Tile name={currentDogservice.owner}>
                    </Tile>
                </section>
                <section>
                    <Button>
                        <Link to="/OverviewDogservices" style={{ textDecoration: 'none' }} >Terug naar Overzicht Uitlaatdiensten</Link>
                    </Button>
                </section>
            </main>
        </>
    );
}

export default DogserviceDetails;