import React from 'react'
import { useSpring, animated } from '@react-spring/web';
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

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 500,
    config: {
      mass: 5,
      friction: 150,
      tension: 150,
    },
  });

  const boxAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1000,
    config: {
      mass: 5,
      friction: 150,
      tension: 150,
    },
  });

  return (
    <Center 
      h='100vh'
      position='relative'
      // top='-87px'
      id='home'
    >
      <Flex 
        alignItems='center' 
        flexDirection='row' 
        justifyContent='center' 
        height='100vh' 
        width='100vw'
      >
        <animated.div style={boxAnimation}>
        <Box 
          className={styles.myImage}
          width={{ base: '70vw', sm: '35vw' }}
          height={{ base: '60vh', md: '80vh'}}
        ></Box>
        </animated.div>

        <Box
          textAlign='left'
          my='40'
          p='2'
          position={{ base: 'absolute', sm: 'relative' }}
          top={{ base: '250px', sm: '150px' }}
          right={{ base: '10vw', sm: '20vw', md: '150px' }}
          style={headingStyle}
        >
          <animated.div style={textAnimation}>
          <h1 style={headingStyle}>ravin io</h1>
          <h2>ui/ux designer in a front-end developer’s body</h2>
          </animated.div>
        </Box>
        
      </Flex>
    </Center>
  );
};

export default Home;
