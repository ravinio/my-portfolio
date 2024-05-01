import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import Icon from '../../assets/projects/icons/chasingraven.svg'
import Gif from '../../assets/projects/gifs/chasingravens.gif'

interface ChasingRavensProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const ChasingRavens: React.FC<ChasingRavensProps> = ({ activeTheme, onThemeSwitch }) => {
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
              <Link href='https://www.chasingravensblog.com/'>
                <h3 style={subHeadingStyle}>chasing ravens</h3>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='14px'>
            This is a food blog built to showcase my love for both design and gastronomy. Meticulously handcrafted using the combination of Contentful API, React, and SCSS. 
            The site contains an inticing home page, an informative about page, and a captivating blog section, all wrapped in a custom brand and vibe.
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

export default ChasingRavens;