import { useRef } from "react";
import './assets/styles/styles.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Homepage from "./components/pages/homepage";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./components/pages/about_me";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import Footer from "./components/footer/footer";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import "./assets/styles/styles.css";


function App() {
    useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="App">
                <AnimatedCursor
                    innerSize={10}
                    outerSize={22}
                    color={`var(--cursor-color)`}
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link',
                        {
                            target: '.custom',
                            options: {
                                innerSize: 10,
                                outerSize: 22,
                                color: `var(--cursor-color)`,
                                outerAlpha: 0.3,
                                innerScale: 0.7,
                                outerScale: 5
                            }
                        }
                    ]}
                />
            </div>
    <Container>
        <div className="custom-scrollbar"/>

                <div className="light light-1"/>
                <div className="light light-2"/>
                <div className="light light-3"/>
                <div className="light light-4"/>


                <NavigationMenu
    scrollToAbout={() => scrollToSection(aboutRef)}
    scrollToPortfolio={() => scrollToSection(portfolioRef)}
    scrollToContact={() => scrollToSection(contactRef)}
    />


                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: false}}
                >
                <Homepage/>
                </motion.div>

                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: false}}
                >
                <div ref={aboutRef}>
                    <AboutMe />
                </div>
                </motion.div>

                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: false}}
                >
                <div ref={portfolioRef}>
                    <Portfolio />
                </div>
                </motion.div>

                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: false}}
                >
                <div ref={contactRef}>
                    <Contact />
                </div>
                </motion.div>


                <Footer/>
            </Container>
        </div>
    );
}

export default App;
