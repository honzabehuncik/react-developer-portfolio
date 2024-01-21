import React, { useEffect, useRef } from 'react';
import './../../styles.css';
import { Container } from 'react-bootstrap';
import { socials } from '../../data';

function Contact() {
    const progressBarRefs = useRef([]);

    useEffect(() => {
        progressBarRefs.current.forEach((progressBar) => {
            const percent = progressBar.dataset.percent;
            progressBar.style.width = `${percent}%`;
        });
    }, []);
    return (
        <div id="contact">
            <Container>
                <section className="contact">
                    <h1 className="contact-title">Kontakt</h1>
                    <p className="contact-description">Chcete vytvořit něco úžasného?<br/>Kontaktujte mě a společně převedeme vaše myšlenky v realitu!</p>
                    <p className="contact-sites">Email: <span className="highlighted highlighted_red"><a href={`mailto:${socials.email}`}>{socials.email}</a></span> </p>
                    <p className="contact-sites">GitHub: <span className="highlighted highlighted_red"><a href={`${socials.github}`} target="_blank" rel="noreferrer">{socials.github}</a></span> </p>
                    <p className="contact-sites">Instagram: <span className="highlighted highlighted_red"><a href={`${socials.instagram}`} target="_blank" rel="noreferrer">{socials.instagram}</a></span> </p>
                </section>

            </Container>
        </div>
    );
}

export default Contact;
