import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/styles/styles.css';
import { projects } from '../../data';

function Portfolio() {
    return (
        <div id="portfolio">
            <Container>
                <section className="portfolio">
                    <h1 className="portfolio-title">Portfolio</h1>
                    <p className="portfolio-description">
                        Portfolio obsahuje plno zajímavých projektů, na kterých jsem se podílel. Zde je ukázka několika z nich:
                    </p>

                    <div className="row">
                        {projects.map((project, index) => (
                            <div key={index} className="col-md-4">
                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                                >
                                    <Card className="card">
                                        <Card.Img variant="top" src={project.image} />
                                        <Card.Body>
                                            <Card.Title className="card-title">{project.title}</Card.Title>
                                            <Card.Text className="card-text">{project.description}</Card.Text>
                                            <div>
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className={`badge ${getColorForTechnology(tech)}`}>
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <p className="card-footer-text">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="card-footer-text">
                            A další!
                        </a>
                    </p>
                </section>
            </Container>
        </div>
    );
}

// Function to determine badge color based on technology
const getColorForTechnology = (technology) => {
    const colorMap = {
        react: 'badge-red',
        node: 'badge-green',
        express: 'badge-blue',
        redux: 'badge-purple',
        angular: 'badge-orange',
        html: 'badge-blue',
        css: 'badge-cyan',
    };

    return colorMap[technology] || 'badge-default';
};

export default Portfolio;
