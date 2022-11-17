import React from 'react';

function PageHeader({ icon, title }) {
    return (
        <div className="title-container">
            <h1>{title}</h1>
            <img src={icon} alt={title} />
        </div>
    );
}

export default PageHeader;