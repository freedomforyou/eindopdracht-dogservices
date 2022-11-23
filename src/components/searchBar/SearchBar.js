import React, { useState } from 'react';
import './SearchBar.module.css';
import styles from "./SearchBar.module.css";

function SearchBar({ setLocationHandler }) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('Locatie verstuurd!');

        setLocationHandler(query);
    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>

            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een stad in Nederland"
            />
            <p>   </p>
            <button className={styles.submit} type="submit">
                Zoek plaats
            </button>
        </form>
    );
}

export default SearchBar;