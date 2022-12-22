import React from 'react';
import styles from './Registration.module.css'
import {Link} from "react-router-dom";
import Tile from "../../components/tile/tile";
import Button from "../../components/button/button";
import dog from "../../assets/dog.png";
import dogservicepic from "../../assets/dogservicepic.png";


function Register () {
    return (
        <>
            <span className={styles.registration}>
                <span className={styles.great}>
                    <div className={styles.picture}>
                <Tile title="Hondenbezitters">
                    <p>Meld u zich gerust gratis aan zodat uw vrolijke viervoeter regelmatig een frisse neus kan halen en de 'benen' kan strekken.</p>
                    <Button>
                        <Link to="/signup" style={{ textDecoration: 'none' }} >Registreren Hondenbezitters</Link>
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
                        <Link to="/signupservices" style={{ textDecoration: 'none' }}> Registreren Hondenuitlaters </Link>
                    </Button>
                </Tile>
        </div>
            </span>
 </span>
        </>
    );
}

export default Register;