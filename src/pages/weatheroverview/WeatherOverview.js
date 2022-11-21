import React, { useState } from 'react';
import Tile from "../components/tile/tile";
import axios from "axios";
import SearchBar from "../components/searchBar/SearchBar";
import {Link, Redirect} from "react-router-dom";
import Button from "../components/button/button";
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
            <main>
                <footer>
                    <ul>
                        <li>
                        <Button type="button">
                            <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Venlo</Link>
                        </Button>
                        {/*<button type="button" onClick={fetchData}>*/}
                        {/*    /!*<Redirect to="/weervenlo" />*!/*/}
                        {/*    Weersverwachting Venlo*/}
                        {/*</button>*/}
                        <Button type="button">
                            <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Tegelen</Link>
                        </Button>
                        <Button type="button">
                            <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Baarlo</Link>
                        </Button>
                            <Button type="button">
                                <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Maasbree</Link>
                            </Button>
                            <Button type="button">
                                <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Belfeld</Link>
                            </Button>
                            <Button type="button">
                                <Link to="/weervenlo" style={{ textDecoration: 'none' }}>Weersverwachting Blerick</Link>
                            </Button>
                        </li>
                    </ul>
                </footer>

            </main>
            <main>

                <section>
                    <h1>Weersverwachting elders</h1>
                    <p>Geef een plaatsnaam in om de weersverwachting daar op te vragen zodat u hiermee rekening kunt houden als u uw uitlaatdienst gaat plannen.</p>

                    <article>
                        <ul>
                            <li>
                                Geef een plaatsnaam in.
                            </li>
                            <li>
                                Klik op 'Zoek plaats'.
                            </li>
                            <li>
                                Klik vervolgens op 'Wat voor weer wordt het ?'
                            </li>
                        </ul>
                        <p>Opm: kleinere plaatsen geven geen resultaat.</p>

                    </article>

                </section>

                <div>
                    <article>
                        <div>
                            <SearchBar setLocationHandler={setLocation} />
                        </div>
                    {Object.keys(weatherData).length > 0 &&

                        <>
                            <h3>{weatherData.name}</h3>
                            <h4>Weertype : {weatherData.weather[0].description}</h4>
                            <h4>Luchtvochtigheid : {weatherData.main.humidity} procent</h4>
                            <h4>Windsnelheid : {weatherData.wind.speed} </h4>
                            <h4>Windrichting : {weatherData.wind.speed.name} Westen</h4>
                            <h4>Minimum temperatuur : {weatherData.main.temp_min}&deg;C</h4>
                            <h4>Maximum temperatuur : {weatherData.main.temp_max}&deg;C</h4>
                            <h4>Gemiddelde temperatuur : {weatherData.main.temp}&deg;C</h4>
                        </>
                    }
                        <button type="button" onClick={fetchData}>
                            Wat voor weer wordt het ?
                        </button>
                </article>
                </div>
            </main>

        </>
    );
}

export default WeatherOverview;