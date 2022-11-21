import React from 'react';
import './tileoverview.module.css'

function TileOverview ({ img, imgDescription, title, name, description, children }) {
    return (
        <sectionoverview>
            {img && <img src={img} alt={imgDescription}/>}
            <h1>{title}</h1>
            <h3>{name}</h3>
            {description}
            {children}
        </sectionoverview>
    );
}

export default TileOverview;