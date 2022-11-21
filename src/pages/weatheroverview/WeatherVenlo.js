import React, { useState } from 'react';
import Tile from "../components/tile/tile";
import axios from "axios";
import SearchBar from "../components/searchBar/SearchBar";
import {Link} from "react-router-dom";
import Button from "../components/button/button";
const apiKey = '9132b59a13a060e8812c4d0186286504';

function WeatherVenlo () {
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
                <Tile title="Weersverwachting">
                </Tile>
                <div>

                    <SearchBar setLocationHandler={setLocation} />
                    <span className="location-details">

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
                        <Button type="button" onClick={fetchData}>
                            Wat voor weer wordt het ?
                        </Button>
                </span>
                </div>
            </main>
        </>
    );
}

export default WeatherVenlo;