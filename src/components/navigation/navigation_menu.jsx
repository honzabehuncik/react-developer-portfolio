import React, { useState, useEffect } from 'react';
import './navigation_styles.css';

function NavigationMenu() {
    // Přečtení aktuálního tématu z localStorage při načítání stránky
    const storedTheme = localStorage.getItem('theme');
    const [isDarkTheme, setIsDarkTheme] = useState(storedTheme === 'dark');

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        // Uložení tématu do localStorage pro použití při další návštěvě stránky
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Aplikace tématu při změně isDarkTheme
    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }, [isDarkTheme]);

    return (
        <nav className={`navbar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="logo">
                <span className="logo-text">Honza Běhunčík</span>
            </div>
            <div className="links">
                <a onClick={() => scrollToSection('about')}>O mně</a>
                <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
                <a onClick={() => scrollToSection('contact')}>Kontakt</a>
                <a className="link-theme" onClick={toggleTheme}>
                    Změnit theme
                </a>
            </div>
        </nav>
    );
}

export default NavigationMenu;
