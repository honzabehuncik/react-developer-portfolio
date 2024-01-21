// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('default');
    const themes = {
        default: {
            body: {
                backgroundColor: '#282a36',
                color: '#000000',
            },
            button: {
                backgroundColor: '#e0e0e0',
                color: '#000000',
            },
            // Add other styles as needed for the default theme
        },
        dracula: {
            body: {
                backgroundColor: '#282a36',
                color: '#f8f8f2',
            },
            button: {
                backgroundColor: '#bd93f9',
                color: '#44475a',
            },
            // Add other styles as needed for the Dracula theme
        },
        github: {
            body: {
                backgroundColor: '#f6f8fa',
                color: '#24292e',
            },
            button: {
                backgroundColor: '#28a745',
                color: '#ffffff',
            },
            // Add other styles as needed for the GitHub theme
        },
        // Add other themes as needed
    };

    const toggleTheme = (theme) => {
        setCurrentTheme(theme);
        // Additional logic to apply the theme styles to the document or store the selected theme
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, themes, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
