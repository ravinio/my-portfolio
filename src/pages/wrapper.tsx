import React from "react"
import {
  Box,
  useTheme
} from "@chakra-ui/react"
import TopNav from "../components/topNav"
import Home from "./home"
import About from "./about"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contact"

interface WrapperProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Wrapper: React.FC<WrapperProps> = ({ onThemeSwitch, activeTheme }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const backgroundStyle = {
    width: '100vw',
    backgroundImage: `url(${theme.images[activeTheme]})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: theme.styles[activeTheme].backgroundPosition,
    fontFamily: theme.styles[activeTheme].body
  };

  return (
    <Box 
      style={backgroundStyle} 
      minH="100vh"
      p={{ base: '0px 15px 15px', md: '0px 30px 30px'}}
    >
      <TopNav activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Home activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <About activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Skills activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Projects activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      <Contact activeTheme={activeTheme} onThemeSwitch={switchTheme} />
     </Box>
  );
};

export default Wrapper;