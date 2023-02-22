import React, { useState } from 'react';
import styles from './Test.module.css'
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

function Test() {
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
                            <h3>Voor Venlo en omliggende dorpen</h3>
                            <h3>(Klik op de button).</h3>
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

                    {/*    </li>*/}
                    {/*</ul>*/}

            {/*</span>*/}
                 </span>

        </>
    );
}

export default Test;