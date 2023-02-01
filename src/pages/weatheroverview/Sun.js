import React, { useState } from 'react';
import axios from "axios";
import styles from "./WeatherOverview.module.css";
import sunpic from "../../assets/sunpic.jpg";
import Tile from "../../components/tile/tile";
import {Link} from "react-router-dom";
const apiKey = '9132b59a13a060e8812c4d0186286504';

function Sun () {
    const [sunData, setSunData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=baarlo,nl&appid=${apiKey}&lang=nl&units=metric`);
            console.log(result.data);
            setSunData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picturetop} >
                        <h1>Waar schijnt de zon?</h1>
                         <Tile img={sunpic} imgDescription="Zonneschijn" />
                            <button className={styles.submit} type="button" onClick={fetchData}>
                                Wat voor weer wordt het ?
                            </button>
                        <p>  </p>
                            <button type="button">
                                <Link to="/weersoverzicht" style={{ textDecoration: 'none' }}>Terug naar overzicht</Link>
                            </button>
                    </div>

                    <div className={styles.picture}>


                    {Object.keys(sunData).length > 0 &&

                        <>
                            <div className={styles.weather}>
                                <h3>Weersverwachting in:</h3>
                                <h2>{sunData.name}</h2>
                                <h4>Weertype : {sunData.weather[0].description}</h4>
                                <h4>Gemiddelde temperatuur : {sunData.main.temp}&deg;C</h4>
                            </div>
                        </>
                    }

                    </div>
                </span>
            </span>

        </>
    );
}

export default Sun;