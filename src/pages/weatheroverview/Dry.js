import React, { useState } from 'react';
import axios from "axios";
import styles from "./WeatherOverview.module.css";
import dry from "../../assets/drypic.jpg";
import Tile from "../../components/tile/tile";
import {Link} from "react-router-dom";
const apiKey = '9132b59a13a060e8812c4d0186286504';

function Dry () {
    const [dryData, setDryData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=baarlo,nl&appid=${apiKey}&lang=nl&units=metric`);
            console.log(result.data);
            dryData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picturetop} >
                        <h1>Waar is het droog?</h1>
                         <Tile img={dry} imgDescription="Droog" />
                            <button className={styles.submit} type="button" onClick={fetchData}>
                                Wat voor weer wordt het ?
                            </button>
                        <p>  </p>
                            <button type="button">
                                <Link to="/weersoverzicht" style={{ textDecoration: 'none' }}>Terug naar overzicht</Link>
                            </button>
                    </div>

                    <div className={styles.picture}>


                    {Object.keys(dryData).length > 0 &&

                        <>
                            <div className={styles.weather}>
                                <h3>Weersverwachting in:</h3>
                                <h2>{dryData.name}</h2>
                                <h4>Weertype : {dryData.weather[0].description}</h4>
                                <h4>Gemiddelde temperatuur : {dryData.main.temp}&deg;C</h4>
                            </div>
                        </>
                    }

                    </div>
                </span>
            </span>

        </>
    );
}

export default Dry;