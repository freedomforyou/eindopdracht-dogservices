import React from 'react';
import styles from './Disclaimer.module.css'
import disclaimerpic from "../../assets/disclaimerpic.jpg";
// import PageHeader from "../components/PageHeader";
import Tile from "../../components/tile/tile";

function DisclaimerPage() {
    return (
        <>
            <main>
                <Tile img={disclaimerpic} imgDescription="Disclaimer" />
                <Tile title="Disclaimer">
                    <h3>Lees aub onze Disclaimer regels</h3>
                    <p>Wij geven slechts de mogelijkheid om contact met elkaar op te nemen. We kunnen geen garantie bieden op geleverde diensten. De klant en uitlaat service dienen zelf rederlijkewijs afspraken te maken. </p>
                    <p>Alle ingeschreven Uitlaat Diensten zijn zorgvuldig door ons onderzocht en als goed beoordeeld.</p>
                </Tile>
            </main>
        </>
    );
}

export default DisclaimerPage;