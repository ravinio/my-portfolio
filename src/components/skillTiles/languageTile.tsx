import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Image, Spacer, Stack, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from '../../styles/global.module.css'
import CSS from '../../assets/skillImgs/languages/css.png'
import HTML from '../../assets/skillImgs/languages/html.png'
import Javascript from '../../assets/skillImgs/languages/javascript.png'
import Typescript from '../../assets/skillImgs/languages/typescript.png'

interface LanguageTileProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const LanguageTile: React.FC<LanguageTileProps> = ({ activeTheme, onThemeSwitch }) => {
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

  const [boxInView, setBoxInView] = useState(false);
  const boxRef = useRef(null);

  const boxAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: boxInView ? 1 : 0, transform: boxInView ? 'scale(1)' : 'scale(0.5)' },
    config: config.molasses,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const boxObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBoxInView(true);
      }
    }, observerOptions);

    if (boxRef.current) {
      boxObserver.observe(boxRef.current);
    }

    return () => {
      boxObserver.disconnect();
    };
  }, []);

  return (
    <animated.div ref={boxRef} style={boxAnimation}>
      <Box className={styles.about}  style={bodyStyle}> 
        <Flex 
          style={backgroundStyle}
          alignItems='left'
          flexDirection='column' 
          justifyContent='center' 
          gap={{ base: '15px', md: '30px' }}
          padding={{ base: '15px', md: '30px' }}
          borderRadius='10px'
        >
          <h3 style={subHeadingStyle}>languages</h3>
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={CSS}
                alt='Dan Abramov'
              />
              <p>css</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={HTML}
                alt='Dan Abramov'
              />
              <p>html</p>
            </Box>
          </Stack>
          <Spacer />
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Javascript}
                alt='Dan Abramov'
              />
              <p>javascript</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Typescript}
                alt='Dan Abramov'
              />
              <p>typescript</p>
            </Box>
          </Stack>        
        </Flex>
      </Box>
    </animated.div>
  );
};

export default LanguageTile;