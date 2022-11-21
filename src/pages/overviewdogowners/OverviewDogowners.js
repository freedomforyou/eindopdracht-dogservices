import React from 'react';
import styles from './OverviewDogowners.module.css'
import { Link } from 'react-router-dom';
import dogowners from '../../data/dogowners.json';
import Button from "../../components/button/button";
import chantaljansen from "../../assets/1.jpg";
import Tileoverview from "../../components/tile/tileoverview";

function OverviewDogowners() {
    return (
        <>
            <main>
                <h1>Overzicht van ingeschreven Honden bezitters</h1>
            </main>
            <main>
                <h3>Momenteel zijn er {dogowners.length} Hondenbezitters bij ons ingeschreven.</h3>

                <ul>
                    {dogowners.map((dogowner) => {

                        return <li key={dogowner.id}>
                            <h4>{dogowner.id}</h4>
                            <Tileoverview img={dogowner.picture} imgDescription={dogowner.name} />
                            <h4>{dogowner.name}</h4>
                            <h4>Locatie: {dogowner.location}</h4>
                            <h4>Hondenras:</h4>
                            <p>{dogowner.dograce}</p>
                            <Button>
                                <Link to={`dogowner/${dogowner.id}`}>
                                    {dogowner.name}
                                </Link>
                            </Button>
                        </li>
                    })}
                </ul>
            </main>
        </>
    );
}
export default OverviewDogowners;