import React, { useEffect, useRef, useState } from 'react'
import { Center, Flex, Link, useTheme } from '@chakra-ui/react'
import { useSpring, animated, config } from '@react-spring/web'
import Resume from '../assets/resume/IoResume.pdf'

interface AboutProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const About: React.FC<AboutProps> = ({ activeTheme, onThemeSwitch }) => {
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
    <Center 
      h='100vh' 
      p={{ base: '0px 15px 15px', md: '0px 30px 30px'}}    
      id='about'
    >
      <animated.div ref={boxRef} style={boxAnimation}>
        <Flex 
          style={backgroundStyle}
          width={{ base: '100%', md: '768px' }}
          alignItems='left'
          flexDirection='column' 
          justifyContent='center' 
          gap={{ base: '15px', md: '30px' }}
          padding={{ base: '15px', md: '30px' }}
          borderRadius='10px'
        >
          <h3 style={subHeadingStyle}>about me</h3>
          <p style={bodyStyle}>
            Hello, welcome to my website! To start off, I like to describe myself as a UI/UX Designer in a Front-End developer’s body.
            <br />
            <br />
            I enjoy making things look beautiful and engaging while maintaining functionality. Alongside this, I specialize in working in collaborative environments to accomplish an all-encompassing goal. I provide value to this dynamic by designing product and web applications with practical implementations and then bringing those designs to life through code.
            <br />
            <br />
            For more info, check out my resume{' '}
              <Link
                textDecor='underline' 
                href={Resume}
                isExternal
              >
                here
              </Link>
            .
          </p>
        </Flex>
      </animated.div>
    </Center>
  );
};

export default About;
