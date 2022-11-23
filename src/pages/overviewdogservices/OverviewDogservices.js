import React from 'react';
import styles from './Overviewdogservices.module.css'
import { Link } from 'react-router-dom';
import dogservices from '../../data/dogservices.json';
import Button from "../../components/button/button";

function OverviewTest() {
    return (
        <>
           <span className={styles.test}>
                    <span className={styles.home}>
                        <h1>Overzicht Honden Uitlaat Diensten</h1>
                        <h3>Momenteel zijn er {dogservices.length} Honden Uitlaat Diensten bij ons ingeschreven.</h3>
                    </span>
           </span>
            <span className={styles.test}>
                <div>
                    <ul className={styles.overview}>
                    {dogservices.map((dogservice) => {

                        return <li key={dogservice.id}>
                            <span className={styles.great}>
                                <div className={styles.picture}>
                                    <h4>{dogservice.id}. {dogservice.title}</h4>
                                    <h4>Locatie: {dogservice.location}</h4>
                                    <h4>Beschrijving:</h4>
                                    <p>{dogservice.content}</p>
                                    <Button>
                                        <Link to={`dogservice/${dogservice.id}`}>
                                            {dogservice.title}
                                        </Link>
                                    </Button>
                                </div>
                                <div className={styles.picture}>
                                         <img src={dogservice.piccode} alt={dogservice.serviceowner}/>
                                         <h3>{dogservice.serviceowner}</h3>
                                </div>
                            </span>
                        </li>
                    })}
                </ul>
                </div>
            </span>
        </>
    );
}
export default OverviewTest;