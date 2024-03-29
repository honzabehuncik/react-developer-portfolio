import React, { useEffect, useRef, useState } from 'react';
import '../../assets/styles/styles.css';
import { Container } from 'react-bootstrap';
import { skills } from '../../data';

function AboutMe() {
    const [isDarkTheme] = useState(true);
    const progressBarRefs = useRef([]);

    useEffect(() => {
        progressBarRefs.current.forEach((progressBar) => {
            const percent = progressBar.dataset.percent;
            progressBar.style.width = `${percent}%`;
        });
    }, []);
    return (

        <div id="about" className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Container>
                <section className="aboutme">
                    <h1 className="aboutme-title">O mně</h1>
                    <p className="aboutme-description">
                        Jsem student s vášní pro kódování a vývoj softwaru. Můj svět zahrnuje nejen webový vývoj s důrazem na frontend a backend, ale také grafický design.
                    </p>
                    <p className="aboutme-description">
                        Mimo to jsem vášnivý kytarista. Kombinace vášně pro technologie a hudbu vytváří harmonii, kterou se snažím odrážet i ve svých projektech.
                    </p>
                    <p className="aboutme-description highlited_description">
                        S láskou vytvářím digitální prostředí, které je nejen funkční, ale také vizuálně poutavé.
                    </p>
                </section>
            <section className="skills">
                <h1 className="skills-title">Mé dovednosti</h1>
                <div className="skill-bar">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <span className="skill-name">{skill.name}:</span>
                            <span className="skill-percent">{skill.value}</span>
                            <div className="skill-progress">
                                <div className="progress" style={{ '--skill-width': skill.value }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/*<section className="feedback">
                <Container>
                    <h1 className="feedback-title">Reference</h1>
                    {feedbacks.map((feedback, index) => (
                        <div className="first-feedback feedback-item" key={index}>
                            <div className="feedback-img" style={{ backgroundImage: `url(${feedback.image})` }} />
                            <div className="feedback-description">
                                <h3>{feedback.author}</h3>
                                <p>{feedback.description}</p>
                            </div>
                        </div>
                    ))}
                </Container>
            </section>*/}
            </Container>
        </div>
    );
}

export default AboutMe;
