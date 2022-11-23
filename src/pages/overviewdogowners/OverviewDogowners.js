import React from 'react';
import styles from './OverviewDogowners.module.css'
import {Link} from 'react-router-dom';
import dogowners from '../../data/dogowners.json';

function OverviewDogowners() {

    return (
        <>
            <span className={styles.test}>
                <h1>Overzicht van ingeschreven Honden bezitters</h1>
                <h3>Momenteel zijn er {dogowners.length} Hondenbezitters bij ons ingeschreven.</h3>
            </span>
            <span className={styles.test}>
                <div>
                <ul className={styles.overview}>
                    {dogowners.map((dogowner) => {

                        return <li key={dogowner.id}>
                            <span className={styles.great}>
                                <div className={styles.picture}>
                                    <h3>{dogowner.id}. {dogowner.name}</h3>
                                    <h4>Locatie: {dogowner.location}</h4>
                                    <h4>Hondenras: {dogowner.dograce} </h4>
                                    <button className={styles.submit} type="submit">
                                        <Link to={`dogowner/${dogowner.id}`}>
                                            {dogowner.name}
                                        </Link>
                                    </button>
                                     </div>

                                     <div className={styles.picture}>
                                         <img src={dogowner.piccode} alt={dogowner.name}/>
                                         <h3>{dogowner.name}</h3>
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
export default OverviewDogowners;