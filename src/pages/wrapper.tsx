import React from 'react'
import TopNav from '../components/topNav'
import Home from '../pages/home'
import About from '../pages/about'
import Skills from '../pages/skills'
import Projects from '../pages/projects'
import Contact from '../pages/contact'

interface AppProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
}

const App: React.FC<AppProps> = ({ themes, onThemeSwitch, activeTheme }) => {

  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  return (
    <>
      <TopNav themes={themes} activeTheme={activeTheme} onThemeSwitch={switchTheme} />      
      <Home activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <About activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Skills activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Projects activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Contact activeTheme={activeTheme} onThemeSwitch={switchTheme} />
     </>
  );
};

export default App;