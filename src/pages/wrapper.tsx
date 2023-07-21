import React from 'react'
import {
  Box,
  useTheme
} from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from '../styles/global.module.css'
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
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const backgroundStyle = {
    // width: '100%',
    height:'100vh',
    backgroundImage: `url(${theme.images[activeTheme]})`,
    backgroundSize: 'cover',
    //backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    //backgroundPosition: theme.styles[activeTheme].backgroundPosition,
    fontFamily: theme.styles[activeTheme].body,
  };

  return (
      <Box
        style={backgroundStyle}
        scrollBehavior='smooth'
      >
        <TopNav themes={themes} activeTheme={activeTheme} onThemeSwitch={switchTheme} />

        <Parallax 
          pages={7} 
          style={{ top: '0', left: '0', height: '100vh', width: '100%' }}
        > 
          <ParallaxLayer offset={0} >
            <Home activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </ParallaxLayer>
          
          <ParallaxLayer offset={1} speed={.5}>
            <About activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2} speed={1.3}>
            <Skills activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </ParallaxLayer>
          
          <ParallaxLayer offset={3} speed={.5}>
            <Projects activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </ParallaxLayer>
          
          <ParallaxLayer offset={6} speed={.5}>
            <Contact activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </ParallaxLayer>
        </Parallax>
      </Box>
  );
};

export default App;