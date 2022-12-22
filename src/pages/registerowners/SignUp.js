import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from "../registration/Registration.module.css";
import Tile from "../../components/tile/tile";
import profilepic from "../../assets/profilepic.jpg";
import {useForm} from "react-hook-form";

function SignUp() {
    // formuliergegevens
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // formuliergegevens die eigenlijk ook ingevoerd dienen te worden
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,
            });


            // Na Registratie wordt er naar de login-pagina doorgestuurd.
            history.push('/signinserver');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
                <span className={styles.great}>
                <span className={styles.picture}>
                    <Tile img={profilepic} imgDescription="Profilepicture" />
                </span>
                <span className={styles.picture}>
                    <div className={styles.picture}>
                        <h1>Registratie Hondenbezitters</h1>
                        <h4>U kunt zich gratis en vrijblijvend inschrijven. Uw gegevens zijn veilig en worden niet met derden gedeeld.</h4>
                        <p>U kunt zich ten alle tijde weer uitschrijven. Uw gegevens worden dan definitief verwijderd.</p>
                    </div>
            <form onSubmit={handleSubmit}>
                <section>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        className="inputs"
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                    </section>
                <p> </p>
                <section>
                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        className="inputs"
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                     </section>
                <p> </p>
                    <section>
                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        className="inputs"
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                         </section>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}

                <p> </p>
                    <section>
                        <label htmlFor="firstName">Voornaam  </label>
                        <input className="inputs" placeholder="Uw voornaam"/>
                         {/*<input className="inputs" placeholder="Uw voornaam" {...register("firstName")} />*/}
                    </section>
                    <section>
                        <label htmlFor="lastName">Achternaam  </label>
                        <input className="inputs" placeholder="Uw achternaam"/>
                        {/*<input className="inputs" placeholder="Uw achternaam" {...register("lastName")} />*/}
                    </section>
                    <section>
                        <label htmlFor="address">Adres   </label>
                        <input className="inputs" placeholder="Uw adres"/>
                        {/*<input className="inputs" placeholder="Uw adres" {...register("address")} />*/}
                    </section>
                    <section>
                        <label htmlFor="phoneNumber">Telefoonnr </label>
                        {/*<input className="inputs" placeholder="Uw telefoonnr" {...register("phoneNumber")} />*/}
                    </section>
                    <section>
                        <label htmlFor="dogRace">Uw hondenras  </label>
                        {/*<input className="inputs" placeholder="Uw hondenras" {...register("dogRace")} />*/}
                    </section>
                    <section>
                        <label htmlFor="dogRace">Leeftijd hond  </label>
                        {/*<input className="inputs" placeholder="Leeftijd hond" {...register("dogAge")} />*/}
                        <select>
                            <option selected value="0-3 jaar">0-3 jaar</option>
                            <option value="4-6 jaar">4-6 jaar</option>
                            <option value="7-10 jaar">7-10 jaar</option>
                            <option value="> 10 jaar">> 10 jaar</option>
                        </select>
                    </section>
                    <section>
                        <label htmlFor="dogRace">Karakter hond  </label>
                        {/*<input className="inputs" placeholder="Karakter hond" {...register("dogCharacter")} />*/}
                        <select>
                            <option value="Rustig">Rustig</option>
                            <option value="Wild">Wild</option>
                            <option selected value="Braaf">Braaf</option>
                            <option value="Gehoorzaam">Gehoorzaam</option>
                        </select>
                    </section>
                    <section>
                        <label htmlFor="dogRace">Korte beschrijving hond </label>
                        {/*<input className="inputs" placeholder="Beschrijving hond" {...register("dogDescription")} />*/}
                    </section>

                    <section>
                        <p>Hoe vaak moet de hond uitgelaten worden ?</p>
                        <select
                            name="delivery"
                            id="delivery-field"
                            value={deliveryFrequency}
                            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                        >
                            <option value="day">Dagelijks</option>
                            <option value="week">Iedere week</option>
                            <option value="two-week">Om de week</option>
                            <option value="month">Iedere maand</option>
                        </select>
                    </section>

                    <section>
                        <p>Overdag of 's avonds ?</p>
                        <input className="inputs"
                               type="radio"
                               value="daytime"
                               name="timeslot"
                               id="timeslot-field-daytime"
                               checked={deliveryTimeslot === 'daytime'}
                               onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                        />
                        <label htmlFor="timeslot-field-daytime">Overdag</label>
                        <input className="inputs"
                               type="radio"
                               value="evening"
                               checked={deliveryTimeslot === 'evening'}
                               onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                               name="timeslot"
                               id="timeslot-field-evening"
                        />
                        <label htmlFor="timeslot-field-evening">'s Avonds</label>
                    </section>
                    <section>
                        <label htmlFor="remark-field">Eventuele opmerkingen</label>
                        <textarea className="inputs"
                                  name="remark"
                                  id="remark-field"
                                  value={remark}
                                  onChange={(e) => setRemark(e.target.value)}
                                  rows={6}
                                  cols={40}
                        />
                    </section>
                    <section>
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree-field"
                            value={agreeTerms}
                            onChange={(e) => toggleAgreeTerms(e.target.checked)}
                        />
                        <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
                    </section>
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </button>
                <p>Door te verzenden gaat u akkoord met de <Link to="/Requirements">Alg. Voorwaarden</Link>  en <Link to="/privacy">Privacy Policy</Link>
                </p>
            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signinserver">hier</Link> inloggen.</p>
                    </span>
                 </span>
        </>
    );
}

export default SignUp;