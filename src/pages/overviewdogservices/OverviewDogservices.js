import React from 'react';
import { Link } from 'react-router-dom';
import dogservices from '../data/dogservices.json';
import Button from "../components/button";
import chantaljansen from "../assets/1.jpg";
import Tile from "../components/tile";

function OverviewTest() {
    return (
        <>
            <main>
                <h1>Overzicht Honden Uitlaat Diensten</h1>
            </main>
            <main>
                <h3>Momenteel zijn er {dogservices.length} Honden Uitlaat Diensten bij ons ingeschreven.</h3>

                <ul>
                    {dogservices.map((dogservice) => {

                        return <li key={dogservice.id}>
                            <h4>{dogservice.id}</h4>
                            <Tile img={chantaljansen} imgDescription={dogservice.name} />
                            <h4>{dogservice.title}</h4>
                            <h4>Locatie: {dogservice.location}</h4>
                            <h4>Beschrijving:</h4>
                            <p>{dogservice.content}</p>
                            <Button>
                                <Link to={`dogservice/${dogservice.id}`}>
                                    {dogservice.title}
                                </Link>
                            </Button>
                        </li>
                    })}
                </ul>
            </main>
        </>
    );
}
export default OverviewTest;