// React

import { useState } from "react";

// Styles

import "@/styles/layout/contact.scss";

// Data

import { listContacts } from "../../data/contactsData";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const isFilled = (value) => value.trim() !== "";

    return (
        <section className="contact">
            <h2 className="contact__title" id="contact">Contato <span>.</span></h2>

            <div className="contact__container">
                <div>
                    <h3 className="contact__text-form">Se você procura alguém dedicado, com sede de aprendizado e vontade de crescer junto à sua empresa, adoraria fazer parte desse time. Entre em contato!</h3>

                    <div className="contact__icons-container">
                        {listContacts.map(contact => (
                            <a 
                                className="contact__container-icon"
                                href={contact.link} 
                                key={contact.id}
                            >
                                <contact.icon className="contact__icon" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="contact__form-container">
                    <h2 className="contact__form-title">Mande uma Mensagem!</h2>

                    <form action="https://formsubmit.co/gabrieldealencar.dev@gmail.com" method="POST" className="contact__form">
                        <div className="contact__form-row">
                            <div className="input-group">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    autoComplete="off"
                                    className={`input-contact ${isFilled(name) ? "filled" : ""}`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label className="user-label">Seu nome</label>
                            </div>

                            <div className="input-group">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    className={`input-contact ${isFilled(email) ? "filled" : ""}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="user-label">Seu E-mail</label>
                            </div>
                        </div>
               
                        <div className="input-group">
                            <input
                                required
                                type="text"
                                name="subject"
                                autoComplete="off"
                                className={`input-contact ${isFilled(subject) ? "filled" : ""}`}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <label className="user-label">Assunto</label>
                        </div>

                        <div className="input-group">
                            <textarea
                                required
                                name="text"
                                autoComplete="off"
                                rows={5}
                                className={`input-contact input-message ${isFilled(message) ? "filled" : ""}`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <label className="user-label">Sua mensagem</label>
                        </div>

                        <button type="submit" className="contact-button">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact