import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/styles.css';
import { projects } from '../../data';

function Portfolio() {
    const notify = () => toast.warn('Detaily jednotlivých projektů budou brzy přidány.', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


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
                    <p className="card-footer-button">
                        {/* Přidáme onClick událost, která spustí zobrazení toast zprávy */}
                        <span className="card-footer-text" onClick={notify}>
                            Zobrazit více
                        </span>
                    </p>
                </section>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </Container>
        </div>
    );
}

const getColorForTechnology = (technology) => {
    const colorMap = {
        react: 'badge-red',
        node: 'badge-green',
        express: 'badge-blue',
        redux: 'badge-purple',
        angular: 'badge-orange',
        html: 'badge-orange',
        css: 'badge-blue',
        figma: 'badge-purple',
        php: 'badge-cyan',
        mysql: 'badge-yellow',
        photoshop: 'badge-green'
    };

    return colorMap[technology] || 'badge-default';
};

export default Portfolio;
