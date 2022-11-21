import React from 'react';
import privacypic from "../assets/privacypic.jpg";
import Tile from "../components/tile";

function PrivacyPage() {
    return (
        <>
            <main>
                <Tile img={privacypic} imgDescription="Privacy Policy" />
                <Tile title="Privacy Policy">
                    <h3>Lees aub onze Privacy Policy</h3>
                    <p>
                        Uw gegevens zijn veilig bij ons en worden niet met derden gedeeld.
                        De gegevens van anderen die u hier vindt dienen met de hoogste discretie en voorzichtigheid behandeld te worden.
                        De bedoeling is alleen om hondenliefhebbers en uitlaat diensten met elkaar in contact te brengen.
                        Misbruik van gegevens zal leiden tot uitschrijving.
                    </p>
                </Tile>
            </main>
        </>
    )
}

export default PrivacyPage;



