import React from 'react';
import contactpic from "../assets/contactpic.jpg";
import Tile from "../components/tile";

const ContactForm = () => {

    const [formStatus, setFormStatus] = React.useState('Versturen')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Wordt verstuurd ...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <>

            <main>
                <section>
                    <h3>Neemt u gerust contact met ons op.</h3>
                    <p>Wij reageren op werkdagen binnen 24 uur. </p>
                    <Tile img={contactpic} imgDescription="Contact" />
                </section>
                <Tile>
                    <form onSubmit={onSubmit}>
                        <section>
                            <label>
                                Naam
                            </label>
                            <input className="inputs" type="text" id="name" required />
                        </section>
                        <section>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input className="inputs" type="email" id="email" required />
                        </section>
                        <section>
                            <label htmlFor="phone">
                                Telefoonnr (optioneel)
                            </label>
                            <input className="inputs" type="phone" id="phone" required />
                        </section>
                        <section>
                            <label htmlFor="message">
                                Uw bericht:
                            </label>
                            <textarea className="inputs" id="message" required />
                        </section>
                        <section>

                            <button type="submit">
                                {formStatus}
                            </button>
                        </section>
                    </form>
                </Tile>


            </main>
        </>
    )
}
export default ContactForm