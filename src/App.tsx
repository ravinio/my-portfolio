import React from 'react'
import Wrapper from './pages/wrapper'

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
      <Wrapper 
        themes={themes}
        activeTheme={activeTheme}
        onThemeSwitch={switchTheme}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} 
      />
  );
};

export default App;