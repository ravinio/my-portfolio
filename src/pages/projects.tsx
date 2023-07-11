import React from "react";
import { Center, Flex, useTheme } from "@chakra-ui/react"
import TimeOutAcres from "../components/projectTiles/timeOutAcres"
import ChasingRavens from "../components/projectTiles/chasingravens"
import TylerLeePhotography from "../components/projectTiles/tylerLeePhotography"
import Escapay from "../components/projectTiles/escapay"

interface ProjectsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  return (
    <Center>
      <Flex  
        h="auto"
        py="30px"
        justifyContent="center"
        gap={{ base: '15px', md: '30px' }} 
        flexWrap="wrap"
      >       
        <TimeOutAcres activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        <ChasingRavens activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        <TylerLeePhotography activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        <Escapay activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      </Flex>
    </Center>
  );
};

export default Projects;
