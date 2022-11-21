import React from 'react';
import styles from './Unsubscribe.module.css'
import unsubscribe from "../../assets/unsubscribe.png";
import Tile from "../../components/tile/tile";
import {Link} from "react-router-dom";


function UnsubscribePage() {
    return (
        <>
            <main>
                <Tile img={unsubscribe} imgDescription="Uitschrijven" />
                <Tile title="Uitschrijven">
                    <p>Stuur ons aub een bericht via <Link to="/contact" style={{ fontWeight: 'bold' }} >contact</Link>  en we zullen uw gegevens verwijderen.</p>
                </Tile>
            </main>
        </>
    )
}

export default UnsubscribePage;