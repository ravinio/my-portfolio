import React, { useEffect, useRef, useState } from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import Icon from '../../assets/projects/icons/osm.svg'
import Gif from '../../assets/projects/gifs/osm.gif'

interface OneStaffMedicalProps {
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const OneStaffMedical: React.FC<OneStaffMedicalProps> = ({ activeTheme, onMouseEnter, onMouseLeave }) => {
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
                href='https://onestaffmedical.com/'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h3 style={subHeadingStyle}>onestaff medical</h3>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='14px'>
            As the UI/UX Designer at OneStaff Medical, 
            I created a complete overhaul of their website, both internally and externally. 
            By leveraging modern design principles and target user research, 
            I designed and built many user experience enhancing features such as a fully mobile friendly website 
            and a consistent design system, resulting in heightened user engagement and an enhanced overall experience.
            <br />
              Check out what OneStaff looked like right before they hired me with the way back machine{' '}
            <Link
              textDecor='underline' 
              href='https://web.archive.org/web/20201101004536/https://onestaffmedical.com/osmhome.aspx'
              isExternal
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              here
            </Link>
            .
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

export default OneStaffMedical;