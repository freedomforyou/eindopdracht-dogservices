import React from 'react';
import styles from './Privacy.module.css'
import privacypic from "../../assets/privacypic.jpg";
import Tile from "../../components/tile/tile";

function PrivacyPage() {
    return (
        <>
            <span className={styles.test}>
                <span className={styles.great}>
                    <div className={styles.picture}>
                        <Tile img={privacypic} imgDescription="Privacy Policy" />
                    </div>
                        <div className={styles.picture}>
                            <Tile title="Privacy Policy">

                            <div>
                                <h3>Lees aub onze Privacy Policy</h3>
                                <p>
                                    Uw gegevens zijn veilig bij ons en worden niet met derden gedeeld.
                                    De gegevens van anderen die u hier vindt dienen met de hoogste discretie en voorzichtigheid behandeld te worden.
                                    De bedoeling is alleen om hondenliefhebbers en uitlaat diensten met elkaar in contact te brengen.
                                    Misbruik van gegevens zal leiden tot uitschrijving.
                                </p>
                            </div>
                            </Tile>

                        </div>

                </span>
            </span>
        </>
    )
}

export default PrivacyPage;



