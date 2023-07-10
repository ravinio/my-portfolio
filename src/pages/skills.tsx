import React from "react";
import { Center, Flex, useTheme } from "@chakra-ui/react"
import LanguageTile from "../components/skillTiles/languageTile"
import TechnologyTile from "../components/skillTiles/technologieTile"
import ToolsAndSoftwaresTile from "../components/skillTiles/toolsAndSoftwaresTile"

interface SkillsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  return (
    <Center h="100vh">
      <Flex  
        h="auto"
        justifyContent="center"
        gap={{ base: '15px', md: '30px' }} 
        flexWrap="wrap"
      >
        <LanguageTile activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        <TechnologyTile activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        <ToolsAndSoftwaresTile activeTheme={activeTheme} onThemeSwitch={switchTheme} />
      </Flex>
    </Center>
  );
};

export default Skills;
