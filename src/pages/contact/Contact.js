import React from 'react';
import styles from './Contact.module.css'
import contactpic from "../../assets/contactpic.jpg";
import Tile from "../../components/tile/tile";
import Button from "../../components/button/button";

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
             <span className={styles.contact}>
                 <span className={styles.great}>
                    <div className={styles.picture}>
                        <h1>Contact</h1>
                        <h2>Neemt u gerust contact met ons op.</h2>
                        <p>Wij reageren op werkdagen binnen 24 uur. </p>
                        <Tile img={contactpic} imgDescription="Contact" />
                    </div>

                  <div className={styles.picture}>
                    <Tile>
                    <form onSubmit={onSubmit}>
                        <div>
                            <h4><h4>Opmerking: dit werkt nog niet.</h4></h4>
                            <label>
                                Naam
                            </label>
                            <input className="inputs" placeholder="Uw naam" type="text" id="name" required />
                        </div>
                        <p> </p>
                        <div>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input className="inputs" placeholder="Uw email" type="email" id="email" required />
                        </div>
                        <p> </p>
                        <div>
                            <label htmlFor="phone">
                                Telefoonnr
                            </label>
                            <input className="inputs" placeholder="Uw telefoonnr" type="phone" id="phone" required />
                        </div>
                        <p> </p>
                        <div>
                            <label htmlFor="message">
                                Uw bericht:
                            </label>
                            <textarea className="inputs" placeholder="Uw bericht" id="message" required />
                        </div>
                        <p> </p>
                        <div>
                            <Button className={styles.submit} type="submit">
                                {formStatus}
                            </Button>
                        </div>
                    </form>
                    </Tile>
                </div>
                </span>
            </span>
        </>
    )
}
export default ContactForm