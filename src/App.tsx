import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Wrapper from './sections/wrapper'
import OneStaffMedical from './pages/OSM';
import OmahaObedience from './pages/OmahaObedience';
import ChasingRavens from './pages/ChasingRavens';
import Escapay from './pages/Escapay';
import SisterMae from './pages/Sistermae';

interface AppProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const App: React.FC<AppProps> = ({ themes, onThemeSwitch, activeTheme, onMouseEnter, onMouseLeave }) => {
  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        }
      />

      <Route
        path="/pages/onestaff-medical"
        element={    
          <OneStaffMedical
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        }
      />
      <Route
        path="/pages/omaha-obedience"
        element={
          <OmahaObedience 
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        }
      />
      <Route
        path="/pages/chasing-ravens"
        element={
          <ChasingRavens
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        }
      />
      <Route
        path="/pages/escapay"
        element={
          <Escapay 
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
          />
        }
      />
      <Route
        path="/pages/sistermae"
        element={
          <SisterMae 
            themes={themes}
            activeTheme={activeTheme}
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
          />
        }
      />
    </Routes>
  );
};

export default App;