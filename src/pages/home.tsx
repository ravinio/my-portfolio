import React from 'react'
import { Box, Center, Flex, useTheme } from '@chakra-ui/react'
import styles from '../styles/global.module.css'

interface HomeProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Home: React.FC<HomeProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const headingStyle = {
    color: theme.styles[activeTheme].titleColor,
    fontFamily: theme.styles[activeTheme].heading,
  };

  return (
    <Center h='100vh' id='home'>
      <Flex alignItems='center' flexDirection='row' justifyContent='center' height='100vh' width='100vw'>
        <Box 
          className={styles.myImage}
          width={{ base: '90vw', sm: '100vw', md: '35vw' }}
          height='80vh'
        ></Box>
        <Box
          textAlign='left'
          my='40'
          p='2'
          position={{ base: 'absolute', sm: 'relative' }}
          top={{ base: '400px', sm: '150px' }}
          right={{ base: '10vw', sm: '20vw', md: '150px' }}
          style={headingStyle}
        >
          <h1 style={headingStyle}>ravin io</h1>
          <h2>ui/ux designer in a front-end developer’s body</h2>
        </Box>
      </Flex>
    </Center>
  );
};

export default Home;
