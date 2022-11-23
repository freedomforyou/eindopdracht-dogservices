import React, { useState } from 'react';
import styles from './WeatherOverview.module.css'
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";
const apiKey = '9132b59a13a060e8812c4d0186286504';

function WeatherOverview() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');

    async function fetchData() {
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl&units=metric`);
            console.log(result.data);
            setWeatherData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <span className={styles.test}>
                 <span className={styles.great}>
                          <ul>
                        <li>
                             <h1>Weersverwachting in Venlo en omgeving</h1>
                            <h3>Klik op de button.</h3>
                        <Button type="button">
                            <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Venlo</Link>
                        </Button>
                        <Button type="button">
                            <Link to="/weertegelen" style={{ textDecoration: 'none' }}>Tegelen</Link>
                        </Button>
                        <Button type="button">
                            <Link to="/weerbaarlo" style={{ textDecoration: 'none' }}>Baarlo</Link>
                        </Button>
                            <Button type="button">
                                <Link to="/weermaasbree" style={{ textDecoration: 'none' }}>Maasbree</Link>
                            </Button>
                            <Button type="button">
                                <Link to="/weerblerick" style={{ textDecoration: 'none' }}>Blerick</Link>
                            </Button>
                        </li>
                    </ul>
                </span>

            </span>

            <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picturetop} >
                        <h1>Weersverwachting elders</h1>
                        <p>Geef een plaatsnaam in om de weersverwachting daar op te vragen zodat u hiermee rekening kunt houden als u uw uitlaatdienst gaat plannen.</p>

                        <li>
                            Geef een plaatsnaam in.
                        </li>
                        <li>
                            Klik op 'Zoek plaats'.
                        </li>
                         <li>
                            Klik vervolgens op 'Wat voor weer wordt het ?'
                        </li>
                          <p>Opm: kleinere plaatsen geven geen resultaat.</p>
                         <h3>Vul een plaatsnaam in :</h3>
                         <SearchBar setLocationHandler={setLocation} />
                        <p> </p>
                            <button className={styles.submit} type="button" onClick={fetchData}>
                                Wat voor weer wordt het ?
                            </button>
                    </div>

                    <div className={styles.picture}>


                    {Object.keys(weatherData).length > 0 &&

                        <>
                            <div className={styles.weather}>
                            <h3>Weersverwachting in:</h3>
                                <h2>{weatherData.name}</h2>
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

export default WeatherOverview;