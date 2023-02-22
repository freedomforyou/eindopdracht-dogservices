import React from 'react';
import "./tileweather.module.css"

function TileWeather ({ imgWeather, imgDescription, title, name, description, link, children }) {
    return (
        <section>
            {imgWeather && <img src={imgWeather} alt={imgDescription}/>}
            <h1>{title}</h1>
            <h3>{name}</h3>
            {description}
            {link}
            {children}
        </section>
    );
}

export default TileWeather;