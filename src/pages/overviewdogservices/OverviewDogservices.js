import React from 'react';
import styles from './Overviewdogservices.module.css'
import { Link } from 'react-router-dom';
import dogservices from '../../data/dogservices.json';
import Button from "../../components/button/button";
import Tileoverview from "../../components/tile/tileoverview";

function OverviewTest() {
    return (
        <>
            <test>
                <h1>Overzicht Honden Uitlaat Diensten</h1>
                <h3>Momenteel zijn er {dogservices.length} Honden Uitlaat Diensten bij ons ingeschreven.</h3>
            </test>
            <span className={styles.overview}>
                <div>
                    <ul>
                    {dogservices.map((dogservice) => {

                        return <li key={dogservice.id}>
                            <great>
                                <div>
                                    <h4>{dogservice.id}.</h4>
                                </div>
                                <div>
                                    <Tileoverview img={dogservice.picture} imgDescription={dogservice.name} />
                                </div>
                                <div>
                                    <h4>{dogservice.title}</h4>
                                    <h4>Locatie: {dogservice.location}</h4>
                                    <h4>Beschrijving:</h4>
                                    <p>{dogservice.content}</p>
                                    <Button>
                                        <Link to={`dogservice/${dogservice.id}`}>
                                            {dogservice.title}
                                        </Link>
                                    </Button>
                                </div>

                            </great>
                        </li>
                    })}
                </ul>
                </div>
            </span>
        </>
    );
}
export default OverviewTest;