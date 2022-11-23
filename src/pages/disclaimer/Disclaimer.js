import React from 'react';
import styles from './Disclaimer.module.css'
import disclaimerpic from "../../assets/disclaimerpic.jpg";
import Tile from "../../components/tile/tile";

function DisclaimerPage() {
    return (
        <>
            <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picture}>
                    <Tile img={disclaimerpic} imgDescription="Disclaimer" />
                    </div>
                    <div className={styles.picture}>
                        <Tile title="Disclaimer">
                            <div>
                                <h3>Lees aub onze Disclaimer regels</h3>
                                <p>Wij geven slechts de mogelijkheid om contact met elkaar op te nemen. We kunnen geen garantie bieden op geleverde diensten. De klant en uitlaat service dienen zelf rederlijkewijs afspraken te maken. </p>
                                <p>Alle ingeschreven Uitlaat Diensten zijn zorgvuldig door ons onderzocht en als goed beoordeeld.</p>
                            </div>
                        </Tile>
                    </div>
                </span>
            </span>
        </>
    );
}

export default DisclaimerPage;