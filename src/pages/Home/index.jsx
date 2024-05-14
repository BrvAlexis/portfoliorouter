import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import devWebSvg from '../../images/devweb2.svg';
import ProjetsConcrets from '../Works/Projetsconcrets';

function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <div className={`container theme-${theme}`}>
            <div className="form-check form-switch">
                <input
                className="form-check-input"
                type="checkbox"
                id="themeSwitch"
                onChange={toggleTheme}
                checked={theme === 'dark'}
                />
                <label className="form-check-label" htmlFor="themeSwitch">
                    
                </label>
            </div>
            <div className="container d-flex flex-column justify-content-start align-items-center" style={{ minHeight: '100vh', background: `url(${devWebSvg}) no-repeat center center` }}>
                <h1>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h1>
            </div>
        </div>
        <ProjetsConcrets showHeader={false} />
        </>
    );
}

export default Home;