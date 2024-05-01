import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import Icon from '../../assets/projects/icons/escapay.png'
import Gif from '../../assets/projects/gifs/escapay.gif'

interface EscapayProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Escapay: React.FC<EscapayProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  }

  const subHeadingStyle = {
    fontFamily: theme.styles[activeTheme].heading,
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
      threshold: 0.2, // Adjust the threshold as needed (0.2 means 20% visible)
    };

    const boxObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBoxInView(true);
      }
    }, observerOptions);

    if (boxRef.current) {
      boxObserver.observe(boxRef.current);
    }

    // Clean up the observers when the component unmounts
    return () => {
      boxObserver.disconnect();
    };
  }, []);

  return (
    <animated.div ref={boxRef} style={boxAnimation}>
      <Card 
        // maxW={{ base: 'sm', md: 'md' }}  
        height='fit-content'
        overflow='hidden'
        borderRadius='20px'
        style={backgroundStyle}
      >
        <CardHeader>
          <Flex>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Center
                borderRadius='full'
                backgroundColor='rgba(255,255,255)'
                height='48px'
                width='48px'
                p='5px'
              >
                <Image src={Icon} />
              </Center>  
              <Link href='https://www.figma.com/file/l4hnTSAnOldzyQbEd9AFDS/Escapay?type=design&node-id=0%3A1&mode=design&t=ZuBeaukh0HrHxhZo-1'>
                <h3 style={subHeadingStyle}>escapay</h3>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='14px'>
            This Figma file features a brand guide and prototype for a fictitious travel company named Escapay. It covers the company’s entire identity including their logo, fonts, color pallet, and images.
            The prototype highlights the different locations that users can scroll through and save to their favorites list. They can then visit their favorite list and explore and compare the locations they wish to visit.
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src={Gif}
        />
      </Card>
    </animated.div>
  );
};

export default Escapay;