import React from 'react';
import styles from './Advertisers.module.css'
import Tile from "../../components/tile/tile";
import Button from "../../components/button/button";
import labrador from "../../assets/Labradorboek.png";
import labradoodle from "../../assets/Labradoodleboek.png";
import duitseherder from "../../assets/Duitseherderboek.png";
import doberman from "../../assets/doberman.jpg";
import bordercollie from "../../assets/Bordercollieboek.png";


function Advertisers() {
    return (
        <>
            <span className={styles.advertiserstop}>
                <span className={styles.picture}>
                    <Tile img={doberman} imgDescription="doberman" />
                </span>
                    <span className={styles.picture}>
                        <Tile title="Hier ruimte voor onze adverteerders">
                            <p>De producten zijn zorgvuldig door ons geselecteerd en van hoge kwaliteit.</p>
                            <p>Klik voor meer informatie op de Info buttons.</p>
                        </Tile>
                    </span>
            </span>
            <span className={styles.advertisers}>
                <div className={styles.picture}>
                     <Tile title="Labrador Handboek">
                        <p>“Ontdek Hoe Jij Je Labrador Bijna Direct Verandert In Een Lieve En Gehoorzame Hond..."</p>
                        <Button>
                        <a href="https://www.paypro.nl/producten/Labrador_Handboek/9265/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Labrador Handboek
                        </a>
                        </Button>
                    </Tile>
                </div>
                <div className={styles.picture}>
                    <Tile img={labrador} imgDescription="Labrador" />
               </div>

                 <div className={styles.picture}>
                    <Tile img={labradoodle} imgDescription="Labradoodle" />
                </div>

               <div className={styles.picture}>
                    <Tile title="Labradoodle Geheimen">
                    <p>"Ontdek Hoe Jij Je Labradoodle Bijna Direct Verandert In Een Lieve En Gehoorzame Hond..."</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Labradoodle_Geheimen/30973/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Labradoodle Geheimen
                        </a>
                    </Button>
                </Tile>
                </div>
                <div className={styles.picture}>
                    <Tile title="Duitse Herder Handboek">
                    <p>“Ontdek Hoe Jij Je De Gelukkigste En Meest Gehoorzame Duitse Herder Van De Buurt Kunt Hebben…”</p>
                    <Button>
                        <a href="https://www.paypro.nl/producten/Duitse_Herder_Handboek/79272/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Duitse Herder Handboek
                        </a>
                    </Button>
                    </Tile>
                </div>
               <div className={styles.picture}>
                     <Tile img={duitseherder} imgDescription="Duitse Herder" />
                </div>

                <div className={styles.picture}>
                     <Tile img={bordercollie} imgDescription="Bordercollie" />
                </div>

                <div className={styles.picture}>
                    <Tile title="Border Collie Geheimen">
                        <p>“Ontdek Hoe Jij De Gelukkigste En Meest Gehoorzame Border Collie Van De Buurt Kunt Hebben?"</p>
                        <Button>
                        <a href="https://www.paypro.nl/producten/Border_Collie_Geheimen/22112/14902" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                            Border Collie Geheimen
                        </a>
                        </Button>
                    </Tile>
                </div>
            </span>
        </>
    );
}

export default Advertisers;