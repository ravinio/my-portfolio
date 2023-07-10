import React from "react";
import { Box, Center, Flex, useTheme } from "@chakra-ui/react"
import styles from "../styles/global.module.css"

interface AboutProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const About: React.FC<AboutProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const headingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  return (
    <Center h="100vh">
      <Flex alignItems="center" flexDirection="row" justifyContent="center" height="100vh" width="100vw">
        
      </Flex>
    </Center>
  );
};

export default About;
