import React, { useEffect, useRef, useState } from 'react';
import { ReactElement } from 'react';
import { Card, CardBody, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useSpring, animated, config } from '@react-spring/web';

interface ProjectCardProps {
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  icon: string;
  gif: string;
  title: string;
  description: ReactElement | string[];
  page: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  activeTheme,
  onMouseEnter,
  onMouseLeave,
  icon,
  gif,
  title,
  description,
  page,
  tags,
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

  const chipStyle = {
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
    <Link
      as={RouterLink}
      to={page}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="group" 
      _hover={{ textDecoration: 'none' }}
    >
      <Card
        height="fit-content"
        overflow="hidden"
        borderRadius="lg"
        style={backgroundStyle}
        boxShadow="lg"
        w={{ md: '757px', sm: 'auto' }}
      >
        <Image
          src={gif}
          alt={`${title} screenshot`}
          objectFit="cover"
          width="100%"
          maxHeight="500px"
        />

        <CardBody>
          <Flex gap="2" flexWrap="wrap" mb="4">
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
          <Text fontSize="xl" fontWeight="bold" style={subHeadingStyle} _groupHover={{ textDecoration: 'underline' }}>
            {title}
          </Text>

          <Text fontSize="sm" mt="2">
            {description}
          </Text>
        </CardBody>
      </Card>
    </Link>
  </animated.div>
  );
};

export default ProjectCard;
