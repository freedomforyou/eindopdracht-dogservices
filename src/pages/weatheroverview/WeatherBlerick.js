import React, { useState } from 'react';
import axios from "axios";
import styles from "./WeatherOverview.module.css";
import blerick from "../../assets/Blerick.png";
import Tile from "../../components/tile/tile";
import Button from "../../components/button/button";
import {Link} from "react-router-dom";
const apiKey = '9132b59a13a060e8812c4d0186286504';

function WeatherVenlo () {
    const [weatherData, setWeatherData] = useState({});

    async function fetchData() {
        try {
            // Blerick heeft geen eigen weersverwachting, daarom Venlo gepakt
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=venlo,nl&appid=${apiKey}&lang=nl&units=metric`);
            console.log(result.data);
            setWeatherData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <span className={styles.great}>
                <span className={styles.test}>
                    <div className={styles.picturetop} >
                        <h1>Weersverwachting Blerick</h1>
                        <p>Opm : de weersverwachting voor Blerick is hetzelfde als die voor Venlo</p>
                         <Tile img={blerick} imgDescription="Blerick" />
                            <button className={styles.submit} type="button" onClick={fetchData}>
                                Wat voor weer wordt het ?
                            </button>

                        <p>  </p>
                            <Button type="button">
                                <Link to="/weersoverzicht" style={{ textDecoration: 'none' }}>Terug naar overzicht</Link>
                            </Button>
                    </div>

                    <div className={styles.picture}>
                    {Object.keys(weatherData).length > 0 &&

                        <>
                            <div className={styles.weather}>
                                <h3>Weersverwachting in:</h3>
                                <h2>{weatherData.name}-Blerick</h2>
                                <h4>Weertype : {weatherData.weather[0].description}</h4>
                                <h4>Luchtvochtigheid : {weatherData.main.humidity} procent</h4>
                                <h4>Windsnelheid : {weatherData.wind.speed} </h4>
                                <h4>Windrichting : {weatherData.wind.speed.name} Westen</h4>
                                <h4>Minimum temperatuur : {weatherData.main.temp_min}&deg;C</h4>
                                <h4>Maximum temperatuur : {weatherData.main.temp_max}&deg;C</h4>
                                <h4>Gemiddelde temperatuur : {weatherData.main.temp}&deg;C</h4>
                            </div>
                        </>
                    }

                    </div>
                </span>
            </span>

        </>
    );
}

export default WeatherVenlo;