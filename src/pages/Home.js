import React from 'react';
import {Link} from "react-router-dom";
import Tile from "../components/tile";
import Button from "../components/button";
import kristel from "../assets/kristel.png";
import peter from "../assets/peter.png";
import dog from "../assets/dog.png";
import doganimation1 from "../assets/doganimation1.gif";
import dogservicepic from "../assets/dogservicepic.png";


function Home() {
    return (
        <>
            <main>
                <Tile img={doganimation1} imgDescription="doganimation1" />
                <Tile title="Welkom op onze Honden Uitlaatservice">
                    <p>Wij brengen honden eigenaren en mensen die honden uitlaten bij elkaar.</p>
                    <p>Als hondeigenaar kunt u zich <b>gratis</b> en vrijblijvend registreren om op zoek te gaan naar een geschikte hondenuitlaatdienst. Als hondenuitlater kunt u zich ook aanmelden en uw diensten aanbieden.</p>
                </Tile>
            </main>
            <p> </p>
            <main>
                <h1 id="about-us">Over Ons</h1>
                <p className="colums-3">
                    Hallo, wij zijn <b>Kristel</b> en <b>Peter</b>. Wij zijn een stel en we zijn beide dol op honden.
                    We willen graag helpen bij het bij elkaar brengen van hondenbezitters en honden uitlaters.
                    Registreert u zich aub als hondenbezitter of als uitlater verderop op deze pagina.
                    Voor vragen, opmerkingen en suggesties neemt u gerust <Link to="/contact" style={{ fontWeight: 'bold' }} >contact</Link> met ons op.
                </p>
            </main>
            <p> </p>
            <main>
                <Tile title="Kristel Jansen-Wilms">
                    <p>31 jaar. Moeder van 2 kinderen. Woon in Venlo. </p>
                    <p>Van beroep lerares op een basisschool. </p>
                    <p>Hobbies : kinderen, honden, tuinieren en lezen.</p>
                </Tile>
                <Tile img={kristel} imgDescription="Kristel" />

                <Tile img={peter} imgDescription="Peter Jansen" />
                <Tile title="Peter Jansen">
                    <p>34 jaar. Vader van 2 kinderen. Woon in Venlo. </p>
                    <p>Van beroep accountant. </p>
                    <p>Hobbies : kinderen, honden, klussen en gitaarspelen.</p>
                </Tile>

            </main>
            <p> </p>
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

export default Home;