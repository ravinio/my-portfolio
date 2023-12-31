import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Image, Spacer, Stack, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from '../../styles/global.module.css'
import AWS from '../../assets/skillImgs/tools-and-softwares/aws.png'
import Bitbucket from '../../assets/skillImgs/tools-and-softwares/bitbucket.png'
import Figma from '../../assets/skillImgs/tools-and-softwares/figma.png'
import Jira from '../../assets/skillImgs/tools-and-softwares/jira.png'
import Photoshop from '../../assets/skillImgs/tools-and-softwares/photoshop.png'
import Vscode from '../../assets/skillImgs/tools-and-softwares/vscode.png'

interface ToolsAndSoftwaresProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const ToolsAndSoftwaresTile: React.FC<ToolsAndSoftwaresProps> = ({ activeTheme, onThemeSwitch }) => {
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
          <h3 style={subHeadingStyle}>tools & softwares</h3>
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={AWS}
                alt='Dan Abramov'
              />
              <p>aws</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Bitbucket}
                alt='Dan Abramov'
              />
              <p>bitbucket</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Figma}
                alt='Dan Abramov'
              />
              <p>figma</p>
            </Box>
          </Stack>
          <Spacer />
          <Stack direction='row'>
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Jira}
                alt='Dan Abramov'
              />
              <p>jira</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Photoshop}
                alt='Dan Abramov'
              />
              <p>photoshop</p>
            </Box>
            <Spacer />
            <Box>
              <Image
                boxSize={{base: '55px', md: '75px'}}
                objectFit='contain'
                src={Vscode}
                alt='Dan Abramov'
              />
              <p>vs code</p>
            </Box>
          </Stack>        
        </Flex>
      </Box>
    </animated.div>
  );
};

export default ToolsAndSoftwaresTile;