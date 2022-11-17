import React from 'react';
import {Link} from "react-router-dom";
import Tile from "../components/tile";
import Button from "../components/button";
import labrador from "../assets/Labradorboek.png";
import labradoodle from "../assets/Labradoodleboek.png";
import duitseherder from "../assets/Duitseherderboek.png";
import doberman from "../assets/doberman.jpg";
import bordercollie from "../assets/Bordercollieboek.png";


function Advertisers() {
    return (
        <>
            <main>
                <Tile img={doberman} imgDescription="doberman" />
                <Tile title="Hier onze adverteerders">
                    <p>De producten zijn zorgvuldig geselecteerd.</p>
                    <p>Klik voor meer informatie op de Info buttons.</p>
                </Tile>
            </main>
            <p> </p>
            <main>
                <Tile title="Labrador Handboek">
                    <p>“Ontdek Hoe Jij Je Labrador Bijna Direct Verandert In Een Lieve En Gehoorzame Hond..."</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Labrador_Handboek/9265/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Labrador Handboek
                        </a>
                    </Button>
                </Tile>
                <Tile img={labrador} imgDescription="Labrador" />
                <Tile img={labradoodle} imgDescription="Labradoodle" />
                <Tile title="Labradoodle Geheimen">
                    <p>"Ontdek Hoe Jij Je Labradoodle Bijna Direct Verandert In Een Lieve En Gehoorzame Hond..."</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Labradoodle_Geheimen/30973/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Labradoodle Geheimen
                        </a>
                    </Button>
                </Tile>
                <Tile title="Duitse Herder Handboek">
                    <p>“Ontdek Hoe Jij Je De Gelukkigste En Meest Gehoorzame Duitse Herder Van De Buurt Kunt Hebben…”</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Duitse_Herder_Handboek/79272/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Duitse Herder Handboek
                        </a>
                    </Button>
                </Tile>
                <Tile img={duitseherder} imgDescription="Duitse Herder" />
                <Tile img={bordercollie} imgDescription="Bordercollie" />
                <Tile title="Border Collie Geheimen">
                    <p>“Ontdek Hoe Jij De Gelukkigste En Meest Gehoorzame Border Collie Van De Buurt Kunt Hebben?"</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Border_Collie_Geheimen/22112/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Border Collie Geheimen
                        </a>
                    </Button>
                </Tile>
            </main>

        </>
    );
}

export default Advertisers;