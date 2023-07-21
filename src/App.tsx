import React from 'react'
import {
  Box,
  useTheme
} from '@chakra-ui/react'
import Wrapper from './pages/wrapper'

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
    width: '100%',
    height:'auto',
    backgroundImage: `url(${theme.images[activeTheme]})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: theme.styles[activeTheme].backgroundPosition,
    fontFamily: theme.styles[activeTheme].body,
  };

  return (
    <Box 
      style={backgroundStyle} 
      p={{ base: '0px 15px 15px', md: '0px 30px 30px'}}
      scrollBehavior='smooth'
    >
      <Wrapper themes={themes} activeTheme={activeTheme} onThemeSwitch={switchTheme} />
     </Box>
  );
};

export default App;