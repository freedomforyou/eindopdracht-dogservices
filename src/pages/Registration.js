import React from 'react';
import {Link} from "react-router-dom";
import Tile from "../components/tile";
import Button from "../components/button";
import dog from "../assets/dog.png";
import dogservicepic from "../assets/dogservicepic.png";


function Register () {
    return (
        <>
            <main>
                <Tile title="Hondenbezitters">
                    <p>Meld u zich gerust gratis aan zodat uw vrolijke viervoeter regelmatig een frisse neus kan halen en de 'benen' kan strekken.</p>
                    <Button>
                        <Link to="/registerowners" style={{ textDecoration: 'none' }} >Registreren Hondenbezitters</Link>
                    </Button>
                </Tile>
                <Tile img={dog} imgDescription="Dog" />
                <Tile img={dogservicepic} imgDescription="Dog Services" />
                <Tile title="Honden Uitlaat Services">
                    <p>Honden uitlaat diensten kunnen zich hier gratis aanmelden om in contact te komen met hondenbezitters.</p>
                    <Button>
                        <Link to="/registerservices" style={{ textDecoration: 'none' }}> Registreren Hondenuitlaters </Link>
                    </Button>
                </Tile>
            </main>

        </>
    );
}

export default Register;