import React, { useEffect, useRef, useState } from 'react'
import { Flex, Text, useTheme } from '@chakra-ui/react';
import { useSpring, animated, config } from '@react-spring/web'

interface SkillTileProps {
  activeTheme: string;
  tileTitle: string;
  tags: string[];
}

const SkillTile: React.FC<SkillTileProps> = ({ activeTheme, tileTitle, tags }) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    backdropFilter: 'blur(20px)',
  };

  const subHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const chipStyle = {
    width: "fit-content",
    background: theme.styles[activeTheme].color,
    color: theme.styles[activeTheme].wrapperBackground,
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
    <animated.div 
      ref={boxRef} 
      style={{
        ...boxAnimation, 
        flex: 1, 
        display: 'flex'
      }}
    >
        <Flex
          style={backgroundStyle}
          flexDirection="column"
          gap={{ base: '16px', md: '24px' }}
          padding={{ base: '16px', md: '24px' }}
          borderRadius="lg"
        >
          <h3 style={subHeadingStyle}>{tileTitle}</h3>
          <Flex
            gap='12px'
            flexWrap='wrap'>
            {tags && tags.map((tag, idx) => (
              <Text
                key={idx}
                fontSize="xs"
                px="2"
                py="1"
                borderRadius="full"
                style={chipStyle}
              >
                {tag}
              </Text>
            ))}
          </Flex>
        </Flex>
    </animated.div>
  );
};

export default SkillTile;
