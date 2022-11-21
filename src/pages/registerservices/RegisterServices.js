import React, {useState} from "react";
import styles from './RegisterServices.module.css'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function RegisterservicesPage () {

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
                    <h1>Registratie Hondenuitlaatdiensten</h1>
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
                        <label htmlFor="descriptionService">Beschrijving uitlaatservice  </label>
                        <input className="inputs" placeholder="Beschrijving uitlaatservice" {...register("descriptionService")} />
                    </section>
                    <section>
                        <label htmlFor="yearsActive">Jaren actief</label>
                        {/*<input className="inputs" placeholder="Jaren actief" {...register("yearsActive")} />*/}
                        <select>
                            <option selected value="0-2 jaar">0-2 jaar</option>
                            <option value="2-4 jaar">2-4 jaar</option>
                            <option value="4-6 jaar">4-6 jaar</option>
                            <option value="> 6 jaar">> 6 jaar</option>
                        </select>
                    </section>
                    <section>
                        <label htmlFor="price">Prijs uitlaatdienst  </label>
                        <input className="inputs" placeholder="Prijs" {...register("price")} />

                    </section>
                    <section>
                        <label htmlFor="serviceInfo">Eventuele aanvullende info </label>
                        <input className="inputs" placeholder="Eventuele aanvullende info" {...register("serviceInfo")} />
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

                        <label htmlFor="inWeekend">U laat ook honden uit in het weekend ?</label>
                            {/*<input className="inputs" placeholder="Jaren actief" {...register("yearsActive")} />*/}
                            <select>
                                <option value="Ja">Ja</option>
                                <option value="Nee">Nee</option>
                                <option value="Soms">Soms</option>
                            </select>
                    </section>

                    <section>
                        <p>U laat honden uit overdag of 's avonds of beide ?</p>
                        <select>
                        <option value="day">Overdag</option>
                        <option value="week">'s Avonds</option>
                        <option value="two-week">Beide</option>
                        </select>
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
ReactDOM.render(<RegisterservicesPage />, rootElement);

export default RegisterservicesPage
