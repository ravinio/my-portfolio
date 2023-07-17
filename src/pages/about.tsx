import React from 'react'
import { Center, Flex, Link, useTheme } from '@chakra-ui/react'
import styles from '../styles/global.module.css'
import Resume from '../assets/resume/IoResume.pdf'

interface AboutProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const About: React.FC<AboutProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

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
    <Center h='100vh' className={styles.about} id='about'>
      <Flex 
        style={backgroundStyle}
        width={{ base: '100%', md: '768px' }}
        alignItems='left'
        flexDirection='column' 
        justifyContent='center' 
        gap={{ base: '15px', md: '30px' }}
        padding={{ base: '15px', md: '30px' }}
        borderRadius='10px'
      >
        <h3 style={subHeadingStyle}>about me</h3>
        <p style={bodyStyle}>
          Hello, welcome to my website! To start off, I like to describe myself as a UI/UX Designer in a Front-End developer’s body.
          <br />
          <br />
          I enjoy making things look beautiful and engaging while maintaining functionality. Along side this, I specialize in working in collaborative environments to accomplish an all-encompassing goal. I provide value to this dynamic by designing product and web applications with practical implementations and then bringing those designs to life through code.
          <br />
          <br />
          For more info, check out my resume{' '}
            <Link
              textDecor='underline' 
              href={Resume}
              isExternal
            >
                here
            </Link>
          .
        </p>
      </Flex>
    </Center>
  );
};

export default About;
