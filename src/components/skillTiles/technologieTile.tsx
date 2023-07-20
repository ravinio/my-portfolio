import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Image, Spacer, Stack, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from '../../styles/global.module.css'
import Bootstrap from '../../assets/skillImgs/technologies/bootstrap.png'
import Chakraui from '../../assets/skillImgs/technologies/chakraui.png'
import Contentful from '../../assets/skillImgs/technologies/contentful.png'
import Materialui from '../../assets/skillImgs/technologies/materialui.png'
import Nextjs from '../../assets/skillImgs/technologies/nextjs.png'
import ReactIcon from '../../assets/skillImgs/technologies/react.png'

interface TechnologyTileProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const TechnologyTile: React.FC<TechnologyTileProps> = ({ activeTheme, onThemeSwitch }) => {
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
      <Box className={styles.about} style={bodyStyle}>
        <Flex 
          style={backgroundStyle}
          alignItems='left'
          flexDirection='column' 
          justifyContent='center' 
          gap={{ base: '15px', md: '30px' }}
          padding={{ base: '15px', md: '30px' }}
          borderRadius='10px'
        >
          <h3 style={subHeadingStyle}>technologies</h3>
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Bootstrap}
                alt='Dan Abramov'
              />
              <p>bootstrap</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Chakraui}
                alt='Dan Abramov'
              />
              <p>chakra-ui</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Contentful}
                alt='Dan Abramov'
              />
              <p>contentful</p>
            </Box>
          </Stack>
          <Spacer />
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Materialui}
                alt='Dan Abramov'
              />
              <p>material-ui</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Nextjs}
                alt='Dan Abramov'
              />
              <p>next.js</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={ReactIcon}
                alt='Dan Abramov'
              />
              <p>react</p>
            </Box>
          </Stack>        
        </Flex>
      </Box>
    </animated.div>
  );
};

export default TechnologyTile;