import React, { useEffect, useRef, useState } from 'react';
import { ReactElement } from 'react';
import { Card, CardBody, Flex, Image, Link, Tag, Text, useTheme } from '@chakra-ui/react';
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
  websiteUrl,
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

  const tagFont = theme.styles[activeTheme].wrapperBackground;
  const tagBg = theme.styles[activeTheme].color;

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
      height="fit-content"
      overflow="hidden"
      borderRadius="20px"
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
          {tags.map((tag) => (
            <Tag
              key={tag}
              size="sm"
              borderRadius="full"
              variant="solid"
              backgroundColor={tagBg}
              color={tagFont}
            >
              {tag}
            </Tag>
          ))}
        </Flex>

        <Link
          href={websiteUrl}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: 'underline' }}
        >
          <Text fontSize="xl" fontWeight="bold" style={subHeadingStyle}>
            {title}
          </Text>
        </Link>

        <Text fontSize="sm" mt="2">
          {description}
        </Text>
      </CardBody>
    </Card>
  </animated.div>
  );
};

export default ProjectCard;
