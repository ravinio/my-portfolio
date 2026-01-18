import React, { useEffect, useRef, useState } from 'react'
import { Center, Flex, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web'
import styles from '../styles/global.module.css'
import ContactButtons from '../components/contactBtns'

interface ContactProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Contact: React.FC<ContactProps> = ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
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
    config: {
      mass: 3,
      friction: 50,
      tension: 50,
    },
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
      p={{ base: '0px 16px 16px', md: '0px 24px 24px'}}    
      className={styles.about}
      id='contact'
    >
      <animated.div ref={boxRef} style={boxAnimation}>
        <Flex 
          style={backgroundStyle}
          width={{ base: '100%', md: '768px' }}
          alignItems='left'
          flexDirection='column' 
          justifyContent='center' 
          gap={{ base: '16px', md: '24px' }}
          padding={{ base: '16px', md: '24px' }}
          borderRadius='lg'
        >
          <h3 style={subHeadingStyle}>get in touch</h3>
          <p style={bodyStyle}>
            If you have any inquiries, collaboration opportunities, or simply want to connect, I'd love to hear from you!
          </p>
          <ContactButtons 
            activeTheme={activeTheme} 
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
          />
          <Text fontSize='xs' style={bodyStyle}>
            Check out the figma file I used to design this website{' '}
                <Link
                textDecor='underline' 
                href='https://www.figma.com/file/ghXqRDpx0wdnb22gE7GkKW/stuff?type=design&node-id=106%3A654&mode=design&t=wKy0QbeVRTqP8Ixq-1'
                isExternal
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                target='_blank'
                >
                  here
                </Link>
            .
          </Text>
        </Flex>
      </animated.div>
    </Center>
  );
};

export default Contact;