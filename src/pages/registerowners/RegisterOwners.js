import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function RegistrationOwners () {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        await sleep(2000);
        if (data.username === "bill") {
            alert(JSON.stringify(data));
        } else {
            alert("Er is een fout opgetreden");
        }
    };

    console.log(errors);

    return (
        <>
            <main>
                <section>
                    <h4>Opmerking: de invulvelden zijn voor de show. Ik moet nog beginnen met de backend training het komende half jaar.</h4>
                    <h1>Registratie Hondenbezitters</h1>
                    <h4>U kunt zich gratis en vrijblijvend inschrijven. Uw gegevens zijn veilig en worden niet met derden gedeeld.</h4>
                    <p>U kunt zich ten alle tijde weer uitschrijven. Uw gegevens worden dan definitief verwijderd.</p>
                </section>

            </main>
            <main>
                {/*<section>*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <h3>Vul aub alle velden in.</h3>
                    </section>
                    <section>
                        <label htmlFor="firstName">Voornaam  </label>
                        <input className="inputs" placeholder="Uw voornaam" {...register("firstName")} />
                    </section>
                    <section>
                        <label htmlFor="lastName">Achternaam  </label>
                        <input className="inputs" placeholder="Uw achternaam" {...register("lastName")} />
                    </section>
                    <section>
                        <label htmlFor="address">Adres   </label>
                        <input className="inputs" placeholder="Uw adres" {...register("address")} />
                    </section>
                    <section>
                        <label htmlFor="phoneNumber">Telefoonnr </label>
                        <input className="inputs" placeholder="Uw telefoonnr" {...register("phoneNumber")} />
                    </section>
                    <section className="password">
                        <label className="form__label" htmlFor="password">Wachtwoord  </label>
                        <input className="inputs" type="password" id="password" placeholder="Wachtwoord"/>
                    </section>
                    <section className="confirm-password">
                        <label className="form__label" htmlFor="confirmPassword">Bevestig wachtwoord  </label>
                        <input className="inputs" type="password" id="confirmPassword" placeholder="Bevestig wachtwoord"/>
                    </section>
                    <section>
                        <label htmlFor="dogRace">Uw hondenras  </label>
                        <input className="inputs" placeholder="Uw hondenras" {...register("dogRace")} />
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
                        <input className="inputs" placeholder="Beschrijving hond" {...register("dogDescription")} />
                    </section>
                    <section>
                        <label htmlFor="email">Email  </label>
                        <input className="inputs"
                            placeholder="Uw email adres"
                            type="text"
                            {...register("email")}
                        />
                    </section>
                    <div style={{ color: "red" }}>
                        {Object.keys(errors).length > 0 &&
                            "There are errors, check your console."}
                    </div>

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

                    <button className="submit" type="submit">
                        Verzenden
                    </button>
                </form>
                {/*</section>*/}
            </main>
        </>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RegistrationOwners />, rootElement);

export default RegistrationOwners
