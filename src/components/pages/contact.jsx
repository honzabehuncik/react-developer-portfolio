import React, {useEffect, useRef} from 'react';
import '../../assets/styles/styles.css';
import {Container} from 'react-bootstrap';
import {socials} from '../../data';

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
                    <Container>
                        <h1 className="contact-title">Kontakt</h1>
                        <p className="contact-description">Chcete vytvořit něco úžasného?<br/>Kontaktujte mě a společně převedeme vaše myšlenky v realitu!</p>
                        {socials.map((social, index) => (
                            <p key={index} className="contact-sites">
                                {social.site}:{' '}
                                <span className="highlighted highlighted_red">
              <a
                  href={social.site === 'Email' ? `mailto:${social.link}` : social.link}
                  target="_blank"
                  rel="noreferrer"
              >
                {social.link}
              </a>
            </span>
                            </p>
                        ))}
                    </Container>
                </section>
            </Container>
        </div>
    );
}

export default Contact;
