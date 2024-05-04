import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import Icon from '../../assets/projects/icons/toa-purple-logo.png'
import Gif from '../../assets/projects/gifs/toa.gif'

interface TimeOutAcresProps {
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TimeOutAcres: React.FC<TimeOutAcresProps> = ({ activeTheme, onMouseEnter, onMouseLeave   }) => {
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
              <Link 
                href='https://www.timeoutacres.com/'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h3 style={subHeadingStyle}>time out acres</h3>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='14px'>
            This website was built for a local client that boards and trains dogs. As they embarked on their online journey, they entrusted me with the task of not only establishing their web presence but also revitalizing their entire brand identity.
            This dynamic website seamlessly integrates engaging YouTube videos, offering valuable insights into their services. Additionally, a user-friendly contact form empowers prospective clients to effortlessly reach out and inquire about the exceptional offerings available.
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

export default TimeOutAcres;