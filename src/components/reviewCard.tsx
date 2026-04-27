import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react';
import { useSpring, animated, config } from '@react-spring/web';

interface ReviewCardProps {
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  avatar: string;
  name: string[];
  title: string[];
  relation: string[];
  linkedin: string[];
  quote: string[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  activeTheme,
  onMouseEnter,
  onMouseLeave,
  avatar,
  name,
  title,
  relation,
  linkedin,
  quote
}) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].color,
    color: theme.styles[activeTheme].wrapperBackground,
    fontFamily: theme.styles[activeTheme].body,
  };
  const textStyle = { color: theme.styles[activeTheme].wrapperBackground, fontFamily: theme.styles[activeTheme].body };
  const linkStyle = { color: theme.styles[activeTheme].gradient3, fontFamily: theme.styles[activeTheme].body };
  const headingStyle = { color: theme.styles[activeTheme].wrapperBackground, fontFamily: theme.styles[activeTheme].heading };

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
        borderRadius="lg"
        style={backgroundStyle}
        boxShadow="lg"
        padding={{ base: '16px', md: '24px' }}
        width={{ base: '100%', md: '768px' }}
    >
       <Box gap="32px">
            {/* Who?? Desktop View */}
            <Flex direction={'row'} gap="3" display={{ base: 'none', md: 'flex' }}>
                {/* Avatar */}
                <Box flexShrink={0}>
                    <Image
                    src={avatar}
                    borderRadius="full"
                    boxSize="80px"
                    objectFit="cover"
                    />
                </Box>
                {/* Info */}
                <Flex direction={'column'} gap="1">
                    <Flex align="center" gap={3} flexWrap="wrap">
                    <Text fontSize="xl" fontWeight="bold" style={headingStyle}>{name}</Text>
                    <Text fontSize="xl" style={headingStyle}>| {title}</Text>
                    </Flex>
                    
                    <Text fontSize="sm" fontStyle="italic" style={textStyle}>
                        {relation}
                    </Text>

                    <Link href={linkedin[0]} isExternal onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Text fontSize="sm" style={linkStyle}>
                            {linkedin}
                        </Text>
                    </Link>
                </Flex>
            </Flex>

            {/* Who?? Mobile View */}
            <Flex direction={'row'} alignItems={'center'} gap="2" display={{ base: 'flex', md: 'none' }}>
                {/* Avatar */}
                <Box flexShrink={0}>
                    <Image
                    src={avatar}
                    borderRadius="full"
                    boxSize="70px"
                    objectFit="cover"
                    />
                </Box>
                {/* Info */}
                <Flex direction={'column'} flexWrap="wrap">
                    <Text fontSize="xl" fontWeight="bold" style={headingStyle}>{name}</Text>
                    <Text fontSize="xl" style={headingStyle}>{title}</Text>
                </Flex>
            </Flex>
            <Flex direction={'column'} display={{ base: 'flex', md: 'none' }}>                
                <Text fontSize="sm" fontStyle="italic" style={textStyle}>
                    {relation}
                </Text>
                <Link href={linkedin[0]} isExternal onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Text fontSize="sm" style={linkStyle}>
                        {linkedin}
                    </Text>
                </Link>
            </Flex>
            
            {/* QUOTE PARAGRAPHS */}
            <Box>
                <Flex flexDirection={'column'} gap={3} mt={3}>
                {quote.map((p, i) => (
                    <Text key={i} fontSize="md" lineHeight="tall" style={textStyle}>
                    "{p}"
                    </Text>
                ))}
                </Flex>
            </Box>

        </Box>

    </Card>
  </animated.div>
  );
};

export default ReviewCard;
