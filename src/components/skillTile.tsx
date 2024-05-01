import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, Image, useTheme } from '@chakra-ui/react';
import { useSpring, animated, config } from '@react-spring/web'

interface SkillTileProps {
  activeTheme: string;
  tileTitle: string;
  items: { src: string; label: string }[];
}

const SkillTile: React.FC<SkillTileProps> = ({ activeTheme, tileTitle, items }) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    backdropFilter: 'blur(20px)',
  };

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
      <Box style={bodyStyle}>
        <Flex
          style={backgroundStyle}
          alignItems="left"
          flexDirection="column"
          justifyContent="center"
          gap={{ base: '15px', md: '30px' }}
          padding={{ base: '15px', md: '30px' }}
          borderRadius="20px"
        >
          <h3 style={subHeadingStyle}>{tileTitle}</h3>
          <Grid
            gap='15px'
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }}>
            {items.map((item, index) => (
              <Box key={index} width='50%'>
                <Image
                  boxSize={{ base: '55px', md: '75px' }}
                  objectFit="contain"
                  src={item.src}
                  alt={item.label}
                />
                <p>{item.label}</p>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Box>
    </animated.div>
  );
};

export default SkillTile;
