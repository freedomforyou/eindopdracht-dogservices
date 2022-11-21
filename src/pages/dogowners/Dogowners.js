import React from 'react';
import dogowners from '../data/dogowners.json';
import { useParams, Link } from 'react-router-dom';
import Tile from "../components/tile";
import Button from "../components/button";
import jacobpietersen from "../assets/jacobpietersen.jpg";

function DogownerDetails () {
    const { dogownerId } = useParams();

    const currentDogowner = dogowners.find((dogowner) => {
        return dogowner.id === dogownerId;
    });

    return (
        <>
            <main>
                <section>
                    <div>
                        <h3>Naam Hondenbezitter :</h3>
                        <h3>{currentDogowner.name}</h3>
                        <h4>Woonplaats : {currentDogowner.location}</h4>
                        <h4>Ingeschreven sinds: {currentDogowner.date}</h4>
                        <h4>Informatie :</h4>
                        <p>{currentDogowner.content}</p>
                        <h4>Adres :</h4>
                        <p>{currentDogowner.address}</p>
                        <h4>Telefoon :</h4>
                        <p>{currentDogowner.phone}</p>
                        <h4>Hondenras :</h4>
                        <h4>{currentDogowner.dograce}</h4>
                        <img src={currentDogowner.picture}/>

                    </div>
                </section>
                <section>
                    <Tile img="{currentDogowner.picture}" imgDescription={currentDogowner.name} />
                    <Tile name={currentDogowner.name}>
                    </Tile>
                </section>
                <section>
                    <Button>
                        <Link to="/OverviewDogowners" style={{ textDecoration: 'none' }} >Terug naar overzicht Hondenbezitters</Link>
                    </Button>
                </section>
            </main>
        </>
    );
}

export default DogownerDetails;