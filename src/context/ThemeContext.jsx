import React, { createContext, useState, useContext, useEffect } from 'react';
import './theme.css';

// Créer le contexte du thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => useContext(ThemeContext);

// Provider du thème qui gère l'état du thème
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    // Appliquer la classe de thème à l'élément body
    document.body.className = `theme-${theme}`;
  }, [theme]);
 
  // Fonction pour basculer entre les thèmes jour et nuit
  const toggleTheme = () => {
    console.log('Changement de thème');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Les valeurs passées à tous les composants enfants via le provider
  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
