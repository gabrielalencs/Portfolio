// Styles

import "@/styles/layout/contact.scss";
import { listContacts } from "../../data/contactsData";

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="contact__title" id="contact">Contato <span>.</span></h2>

            <div className="contact__container">
                <div>
                    <h3 className="contact__text-form">Se você procura alguém dedicado, com sede de aprendizado e vontade de crescer junto à sua empresa, adoraria fazer parte desse time. Entre em contato!</h3>

                    <div className="contact__icons-container">
                        {listContacts.map(contact => (
                            <div className="contact__container-icon" key={contact.id}>
                                <contact.icon className="contact__icon" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact__form-container">
                    <form className="contact__form">
                        <div className="contact__form-row">
                            <div className="input-group">
                                <input required type="text" name="text" autoComplete="off" className="input-contact" />
                                <label className="user-label">Seu nome</label>
                            </div>

                            <div className="input-group">
                                <input required type="text" name="text" autoComplete="off" className="input-contact" />
                                <label className="user-label">Seu E-mail</label>
                            </div>
                        </div>

                        <div className="input-group">
                            <input required type="text" name="text" autoComplete="off" className="input-contact" />
                            <label className="user-label">Assunto</label>
                        </div>

                        <div className="input-group">
                            <textarea required type="text" name="text" autoComplete="off" rows={5} className="input-contact input-message" />
                            <label className="user-label">Sua mensagem</label>
                        </div>

                        <button type="submit" className="contact-button">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact