import React from 'react';
import styles from './Requirements.module.css'
import requirements from "../../assets/requirements.jpg";
import Tile from "../../components/tile/tile";


function RequirementsPage() {
    return (
        <>
            <main>
                <Tile img={requirements} imgDescription="Algemene Voorwaarden" />
                <Tile title="Algemene Voorwaarden">
                    <h3>Lees aub onze Voorwaarden</h3>
                    <p>Wij geven slechts de mogelijkheid om contact met elkaar op te nemen. We kunnen geen garantie bieden op geleverde diensten. De klant en uitlaat service dienen zelf rederlijkewijs afspraken te maken. </p>
                    <p>Alle ingeschreven Uitlaat Diensten zijn zorgvuldig door ons onderzocht en als goed beoordeeld.</p>
                </Tile>
            </main>
        </>
    )
}

export default RequirementsPage;