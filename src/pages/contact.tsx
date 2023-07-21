import React, { useEffect, useRef, useState } from 'react'
import { Center, Flex, Link, Spacer, Text, useTheme } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web'
import styles from '../styles/global.module.css'
import EmailBtn from '../components/contactBtns/emailBtn'
import LinkedInBtn from '../components/contactBtns/linkedInBtn'
import FigmaBtn from '../components/contactBtns/figmaBtn'
import GithubBtn from '../components/contactBtns/githubBtn'

interface ContactProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Contact: React.FC<ContactProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

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
      p={{ base: '0px 15px 15px', md: '0px 30px 30px'}}    
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
          gap={{ base: '15px', md: '30px' }}
          padding={{ base: '15px', md: '30px' }}
          borderRadius='10px'
        >
          <h3 style={subHeadingStyle}>get in touch</h3>
          <p style={bodyStyle}>
            If you have any inquiries, collaboration opportunities, or simply want to connect, I'd love to hear from you!
          </p>
          <Flex
            w='100%'
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '6px', md: '0px' }}
            flexWrap='wrap'
          >
            <EmailBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
            <Spacer />
            <LinkedInBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
            <Spacer />
            <FigmaBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
            <Spacer />
            <GithubBtn activeTheme={activeTheme} onThemeSwitch={switchTheme} />
          </Flex>
          <Text fontSize='xs' color='#fff'>
            Check out the figma file I used to design this website{' '}
                <Link
                textDecor='underline' 
                href='https://www.figma.com/file/ghXqRDpx0wdnb22gE7GkKW/stuff?type=design&node-id=106%3A654&mode=design&t=wKy0QbeVRTqP8Ixq-1'
                isExternal
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