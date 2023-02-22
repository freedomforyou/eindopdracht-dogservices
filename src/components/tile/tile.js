import React from 'react';
import "./tile.module.css"

function Tile({ img, imgDescription, title, name, description, link, children }) {
    return (
        <section>
            {img && <img src={img} alt={imgDescription}/>}
            <h1>{title}</h1>
            <h3>{name}</h3>
            {description}
            {link}
            {children}
        </section>
    );
}

export default Tile;