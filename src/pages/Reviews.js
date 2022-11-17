import React from 'react';
import dogservices from "../data/dogservices.json";
import {Link} from "react-router-dom";
import Button from "../components/button";

function ReviewsPage() {
    return (
        <>
            <main>
                <div>
                    <h1>Reviews van aangesloten Honden Uitlaatservices</h1>
                    <p className="colums-3">Om de details en contactgegevens van de uitlaatservice te zien, zult u even moeten inloggen. Heeft u nog geen account, registreer dan aub even gratis.</p>
                </div>
                <ul>
                    {dogservices.map((dogservice) => {
                        return <li key={dogservice.id}>
                            <div>
                                <h4>{dogservice.id}.</h4>
                                <h3>{dogservice.title}</h3>
                                <h4>Locatie: {dogservice.location}</h4>
                                <h5>Algemene indruk:</h5>
                                <p>{dogservice.general}</p>
                                <Button>
                                    <Link to={`dogservice/${dogservice.id}`}>
                                        {dogservice.title}
                                    </Link>
                                </Button>
                            </div>
                        </li>

                    })}

                </ul>
            </main>
        </>
    );
}

export default ReviewsPage;