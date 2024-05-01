import React from 'react'
import {
  Box,
  useTheme
} from '@chakra-ui/react'
import TopNav from '../components/topNav'
import Home from '../pages/home'
import Skills from '../pages/skills'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import { keyframes } from '@emotion/react'

interface AppProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}


const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const App: React.FC<AppProps> = ({ themes, onThemeSwitch, activeTheme, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };
  
  const gradientAnimation = {
    width: '1000px',
    height: '1000px',
    
    filter: 'blur(50px)',
    backgroundImage: `linear-gradient(
      ${theme.styles[activeTheme].gradient1}, 
      ${theme.styles[activeTheme].gradient2}, 
      ${theme.styles[activeTheme].gradient3})`,
    animation: `${rotateAnimation} 10s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite`,
    borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
  };

  const backgroundStyle = {
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.styles[activeTheme].wrapperBackground,
    //backgroundImage: `url(${theme.images[activeTheme]})`,
    backgroundSize: 'cover',
    //backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: theme.styles[activeTheme].backgroundPosition,
    fontFamily: theme.styles[activeTheme].body,
  };

  return (
      <Box
        style={backgroundStyle}
        scrollBehavior='smooth'
      >
        <TopNav 
          themes={themes}
          activeTheme={activeTheme}
          onThemeSwitch={switchTheme}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <Box css={gradientAnimation}></Box>
        <Box 
          position='absolute' 
          width='100%' 
          height='100vh'
          overflow='hidden scroll'
          top='0px'
          left='0px'
        > 

            <Home 
              activeTheme={activeTheme} 
              onThemeSwitch={switchTheme} 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} 
            />
                  
            <Skills activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          
            <Projects activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          
            <Contact 
              activeTheme={activeTheme} 
              onThemeSwitch={switchTheme} 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave} 
            />
        </Box>
      </Box>
  );
};

export default App;