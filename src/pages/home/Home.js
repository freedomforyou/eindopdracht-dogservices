import React from 'react';
import {Link} from "react-router-dom";
import styles from './Home.module.css'
import Tile from "../../components/tile/tile";
import Button from "../../components/button/button";
import kristel from "../../assets/kristel.png";
import peter from "../../assets/peter.png";
import dog from "../../assets/dog.png";
import doganimation1 from "../../assets/doganimation1.gif";
import dogservicepic from "../../assets/dogservicepic.png";


function Home() {
    return (
        <>
            <home>
                <Tile img={doganimation1} imgDescription="doganimation1" />
                <Tile title="Welkom op onze Honden Uitlaatservice">
                    <p>Wij brengen honden eigenaren en mensen die honden uitlaten bij elkaar.</p>
                    <p>Als hondeigenaar kunt u zich <b>gratis</b> en vrijblijvend registreren om op zoek te gaan naar een geschikte hondenuitlaatdienst. Als hondenuitlater kunt u zich ook aanmelden en uw diensten aanbieden.</p>
                </Tile>
            </home>
            <p> </p>
            <home>
                <h1 id="about-us">Over Ons</h1>
                <p className={styles.colums3}>
                    Hallo, wij zijn <b>Kristel</b> en <b>Peter</b>. Wij zijn een stel en we zijn beide dol op honden.
                    We willen graag helpen bij het bij elkaar brengen van hondenbezitters en honden uitlaters.
                    Registreert u zich aub als hondenbezitter of als uitlater verderop op deze pagina.
                    Voor vragen, opmerkingen en suggesties neemt u gerust <Link to="/contact" style={{ fontWeight: 'bold' }} >contact</Link> met ons op.
                </p>
            </home>
            <p> </p>
            <home>
                <div className={styles.picture}>
                    <Tile title="Kristel Jansen-Wilms">
                        <p>31 jaar. Moeder van 2 kinderen. Woon in Venlo. Van beroep lerares op een basisschool. Hobbies : kinderen, honden, tuinieren en lezen.</p>
                    </Tile>
                    <Tile img={kristel} imgDescription="Kristel" />
                </div>
                <div className={styles.picture}>
                    <Tile img={peter} imgDescription="Peter Jansen" />
                    <Tile title="Peter Jansen">
                        <p>34 jaar. Vader van 2 kinderen. Woon in Venlo. Van beroep accountant. Hobbies : kinderen, honden, klussen en gitaarspelen.</p>
                    </Tile>
                </div>
            </home>
            <p> </p>
            {/*<span className={styles.home}>*/}
            <home>
                <span className={styles.great}>
                    <div className={styles.picture}>
                        <Tile title="Hondenbezitters">
                            <p>Meld u zich gerust gratis aan zodat uw vrolijke viervoeter regelmatig een frisse neus kan halen en de 'benen' kan strekken.</p>
                            <Button>
                                <Link to="/registerowners" style={{ textDecoration: 'none' }} >Registreren Hondenbezitters</Link>
                            </Button>
                        </Tile>
                     </div>
                    <div className={styles.picture}>
                        <Tile img={dog} imgDescription="Dog" />
                    </div>
                    <div className={styles.picture}>
                         <Tile img={dogservicepic} imgDescription="Dog Services" />
                    </div>
                    <div className={styles.picture}>
                       <Tile title="Honden Uitlaat Services">
                            <p>Honden uitlaat diensten kunnen zich hier gratis aanmelden om in contact te komen met hondenbezitters.</p>
                            <Button>
                                <Link to="/registerservices" style={{ textDecoration: 'none' }}> Registreren Hondenuitlaters </Link>
                            </Button>
                       </Tile>
                    </div>
            </span>
 {/*</span>*/}
            </home>
        </>
    );
}

export default Home;