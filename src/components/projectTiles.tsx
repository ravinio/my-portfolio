import React, { useEffect, useRef, useState } from 'react';
import { ReactElement } from 'react';
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react';
import { useSpring, animated, config } from '@react-spring/web';

interface ProjectCardProps {
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  icon: string;
  gif: string;
  title: string;
  description: ReactElement | string[];
  websiteUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  activeTheme,
  onMouseEnter,
  onMouseLeave,
  icon,
  gif,
  title,
  description,
  websiteUrl,
}) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

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
      threshold: 0.2
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
                <Image src={icon} />
              </Center>
              <Link 
                href={websiteUrl}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                target='_blank'
              >
                <h3 style={subHeadingStyle}>{title}</h3>
              </Link>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='14px'>
            {description}
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src={gif}
        />
      </Card>
    </animated.div>
  );
};

export default ProjectCard;
