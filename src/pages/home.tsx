import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { Box, Center, Flex, Link, useTheme } from '@chakra-ui/react'
import styles from '../styles/global.module.css'
import Resume from '../assets/resume/IoResume.pdf'
import ContactButtons from '../components/contactBtns'

interface HomeProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Home: React.FC<HomeProps> = ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const headingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
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
      p={{ base: '0px 15px 15px', md: '0px 30px 30px'}}    
      id='home'
    >
      <Flex 
        alignItems='center' 
        flexDirection={{ base: 'column', sm: 'row'}} 
        justifyContent='center' 
        height='100vh'
        maxWidth='992px'
      >
        <animated.div style={boxAnimation}>
        <Box 
          className={styles.myImage}
          mt={{ base: '20', sm: '0' }}
          width={{ base: '90vw', sm: '35vw', lg: '400px' }}
          height={{ base: '40vh', sm: '60vh', md: '80vh' }}
        ></Box>
        </animated.div>
        <Flex
          height={{ base: '60vh', md: '80vh'}}
          alignItems={{ base: 'flex-start', sm: 'flex-end'}}
          pl='2'
          style={headingStyle}
        >
          <animated.div style={textAnimation}>
          <Box pb='24px'>
            <h1>ravin io</h1>
            <h2>ui/ux designer in a front-end developer’s body</h2>
          </Box>
          <Box pb='24px'>
            <p style={bodyStyle}>
              I enjoy making things look beautiful and engaging while maintaining functionality. 
              Along side this, I specialize in working in collaborative environments to accomplish an all-encompassing goal. 
              I contribute to this dynamic by designing wire frames and prototypes with practical implementations in mind, meticulously considering user needs and project objectives. 
              I then bring these concepts to life by translating them into elegant and efficient code, ensuring that the final product not only meets but exceeds expectations.
              <br />
              For more info, check out my resume{' '}
                <Link
                  textDecor='underline' 
                  href={Resume}
                  isExternal
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  here
                </Link>
              .
            </p>
          </Box>
          
          <ContactButtons 
            activeTheme={activeTheme} 
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
          />
          </animated.div>
        </Flex>
        
      </Flex>
    </Center>
  );
};

export default Home;
