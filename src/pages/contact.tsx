import React from "react";
import { Center, Flex, Spacer, useTheme } from "@chakra-ui/react"
import styles from "../styles/global.module.css"
import EmailBtn from "../components/contactBtns/emailBtn"
import LinkedInBtn from "../components/contactBtns/linkedInBtn"
import FigmaBtn from "../components/contactBtns/figmaBtn"
import GithubBtn from "../components/contactBtns/githubBtn"

interface ContactProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Contact: React.FC<ContactProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const backgroundStyle = {
    background: theme.styles[activeTheme].background,
    boxShadow: theme.styles[activeTheme].boxShadow
  }

  const subHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  return (
    <Center h="100vh" className={styles.about}>
      <Flex 
        style={backgroundStyle}
        width={{ base: '100%', md: '768px' }}
        alignItems="left"
        flexDirection="column" 
        justifyContent="center" 
        gap={{ base: '15px', md: '30px' }}
        padding={{ base: '15px', md: '30px' }}
        borderRadius="10px"
      >
        <h3 style={subHeadingStyle}>get in touch</h3>
        <p style={bodyStyle}>
          If you have any inquiries, collaboration opportunities, or simply want to connect, I'd love to hear from you!
        </p>
        <Flex
          w="100%"
          flexDirection={{ base: 'column', sm: 'row' }}
          gap={{ base: '6px', md: '0px' }}
          flexWrap='wrap'
        >
          <EmailBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          <Spacer />
          <LinkedInBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          <Spacer />
          <FigmaBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          <Spacer />
          <GithubBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        </Flex>
      </Flex>
    </Center>
  );
};

export default Contact;