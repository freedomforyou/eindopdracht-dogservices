import React from 'react';
import styles from './Reviews.module.css'
import dogservices from "../../data/dogservices.json";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";

function ReviewsPage() {
    return (
        <>
            <span className={styles.test}>
                <div>
                    <h1>Reviews van aangesloten Honden Uitlaatservices</h1>
                    <p className="colums-3">Om de details en contactgegevens van de uitlaatservice te zien, zult u even moeten inloggen. Heeft u nog geen account, registreer dan aub even gratis.</p>
                </div>
                 </span>
            <span className={styles.test}>
                <ul className={styles.overview}>
                    {dogservices.map((dogservice) => {
                        return <li key={dogservice.id}>
                            <span className={styles.great}>
                                <div className={styles.picture}>
                                    <h3>{dogservice.id}. {dogservice.title}</h3>
                                    <h4>Locatie: {dogservice.location}</h4>
                                    <h4>Algemene indruk:</h4>
                                    <p>{dogservice.general}</p>
                                    <p> </p>
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
            </span>
        </>
    );
}

export default ReviewsPage;