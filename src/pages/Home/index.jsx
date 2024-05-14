import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`container theme-${theme}`}>
         <button onClick={toggleTheme}>Changer de thème</button>
        <div className="row">
          <div className="col">
          <h1>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;