import React, { useState } from 'react';
import styles from './WeatherOverview.module.css'
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import {Link} from "react-router-dom";
import Button from "../../components/button/button";
import baarlo from "../../assets/Baarlo.png";
import Tile from "../../components/tile/tile";
import venlo from "../../assets/Venlo.png";
import tegelen from "../../assets/Tegelen.png";
import maasbree from "../../assets/Maasbree.png";
import blerick from "../../assets/Blerick.png";
import TileWeather from "../../components/tileweather/tileweather";
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
            <span className={styles.overview}>
                        <section>
                            <h2>Weersverwachting</h2>
                            <h3>Voor Venlo en omliggende dorpen (Klik op de button).</h3>
                        </section>
            </span>

            <span className={styles.overview}>
                                    <Tile>
                                        <Tile img={venlo} imgDescription="Venlo" />
                                        <Button>
                                            <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Venlo</Link>
                                        </Button>
                                    </Tile>

                                    <Tile>
                                         <TileWeather imgWeather={tegelen} imgDescription="Tegelen" />
                                        <Button>
                                           <Link to="/weertegelen" style={{ textDecoration: 'none' }}>Tegelen</Link>
                                        </Button>
                                    </Tile>

                                    <Tile>
                                          <TileWeather imgWeather={baarlo} imgDescription="Baarlo" />
                                        <Button>
                                           <Link to="/weerbaarlo" style={{ textDecoration: 'none' }}>Baarlo</Link>
                                        </Button>
                                    </Tile>

                                    <Tile>
                                          <TileWeather imgWeather={maasbree} imgDescription="Maasbree" />
                                        <Button>
                                           <Link to="/weermaasbree" style={{ textDecoration: 'none' }}>Maasbree</Link>
                                        </Button>
                                    </Tile>

                                    <Tile>
                                         <TileWeather imgWeather={blerick} imgDescription="Blerick" />
                                        <Button>
                                            <Link to="/weerblerick" style={{ textDecoration: 'none' }}>Blerick</Link>
                                        </Button>
                                    </Tile>

                 </span>

            <span className={styles.overview}>
                 <span className={styles.test}>
                          <ul>
                        <li>
                             <h2>Waar schijnt de zon ? Waar is het droog?</h2>
                            <h3>(omgeving Noord-Limburg)</h3>
                            <h3>Klik op de button.</h3>
                        <Button type="button">
                            <Link to="/zon" style={{ textDecoration: 'none' }}>Waar schijnt de zon?</Link>
                        </Button>
                        <Button type="button">
                            <Link to="/droog" style={{ textDecoration: 'none' }}>Waar is het droog?</Link>
                        </Button>

                        </li>
                    </ul>
                </span>

            </span>

            <span className={styles.overview}>
                <span className={styles.details}>
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

                    <div className={styles.details}>


                    {Object.keys(weatherData).length > 0 &&

                        <>
                            <div className={styles.weather}>
                                <h3>Weersverwachting in {weatherData.name}</h3>
                                    <h4>Weertype : {weatherData.weather[0].description}</h4>
                                    <h4>Bewolking : {weatherData.clouds.all} procent</h4>
                                    <h4>Luchtvochtigheid : {weatherData.main.humidity} procent</h4>
                                    <h4>Windsnelheid : {weatherData.wind.speed} </h4>
                                    <h4>Windrichting : {weatherData.wind.deg} graden</h4>
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