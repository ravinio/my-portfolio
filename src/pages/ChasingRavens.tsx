import React from 'react';
import { Box, Center, Flex, Image, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/Navs/topNavChasingRavens';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/chasingravens/hero-img.png';
import AllBlogs from '../assets/pages/chasingravens/all-blogs.png';
import StarreInne from '../assets/pages/chasingravens/starre-inn.png';
import { keyframes } from '@emotion/react'

interface ChasingRavensProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ChasingRavens: React.FC<ChasingRavensProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();
  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };
  const styles = theme.styles[activeTheme];

    const gradientAnimation = {
    width: '1000px',
    height: '1000px',
    
    filter: 'blur(50px)',
    backgroundImage: `linear-gradient(
      ${theme.styles[activeTheme].gradient1}, 
      ${theme.styles[activeTheme].gradient2}, 
      ${theme.styles[activeTheme].gradient3})`,
    animation: `${rotateAnimation} 10s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite`,
    borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
  };

  const backgroundStyle = {
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.styles[activeTheme].wrapperBackground,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: theme.styles[activeTheme].backgroundPosition,
    fontFamily: theme.styles[activeTheme].body,
  };

  const tileBackgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    backdropFilter: 'blur(20px)',
  };

  const headingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].text,
  };

  return (
    <Box 
      style={backgroundStyle}
      scrollBehavior='smooth'
    >
      <TopNav 
        themes={themes}
        activeTheme={activeTheme}
        onThemeSwitch={switchTheme}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Box css={gradientAnimation}></Box>

      {/* Container */}
      <Box           
        position='absolute' 
        width='100%' 
        height='100vh'
        overflow='hidden scroll'
        top='0px'
        left='0px'
      > 
        <Center width="100%">
          <Center
            flexDirection='column'
            maxWidth='1000px'
            m={{ base: '107px 15px 15px 15px', md: '107px 30px 30px 30px' }}
          >
            {/* HERO SECTION */}
            <SlideFade 
              id='project brief'
              in={true}
              offsetX='-50px'
              transition={{ 
                  enter: { 
                    duration: 2.0, 
                    delay: 0.5
                  } 
              }}
              style={{width: "100%"}}
            > 
              <Center 
                h='40vh'
                w='100%'
                position='relative'
                margin='0 auto'
                backgroundImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 34.01%, rgba(0, 0, 0, 0.60) 91.56%), url(${HeroImage})`}
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
                backgroundPosition='0% 70%'
                borderRadius='20px'
              >
                <Box position="absolute" bottom="0" left="0" p="6">
                  <Text fontSize="4xl" style={headingStyle}>chasing ravens</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://www.chasingravensblog.com/" 
                    activeTheme={activeTheme} 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </Box>
              </Center>

              {/* Hero Details */}
              <Center 
                width="100%" 
                justifyContent="space-between" 
                gap={3}
                flexWrap="wrap"
              >
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>purpose</Text>
                    <Text fontSize="l" style={bodyStyle}>Personal Food Blog</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>Creator</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2023</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2">
                      {['UI/UX Design', 'React', 'Contentful'].map(tag => (
                        <Tag key={tag} bg={styles.color} color={styles.wrapperBackground}>
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  </Flex>
              </Center>
            </SlideFade>

            <VStack 
              spacing={{ base: 150, md: 200}} 
              py={16}
            >
              {/* project brief */}
              <SlideFade 
                in={true}
                offsetY='50px'
                transition={{ 
                    enter: { 
                      duration: 2.0, 
                      delay: 1
                    } 
                }}
                style={{width: "100%"}}
              > 
                <Flex 
                  style={tileBackgroundStyle}
                  width={{ base: '100%', md: '708px' }}
                  margin="auto"
                  alignItems="left"
                  flexDirection="column"
                  gap={{ base: '15px', md: '30px' }}
                  padding={{ base: '15px', md: '30px' }}
                  borderRadius="20px"
                >
                  <Text fontSize="3xl" style={headingStyle}>project brief</Text>
                  <p style={bodyStyle}>
                    Chasing Ravens is a personal passion project, a custom food blog built as a gift to my partner. Born from our shared love of trying new restaurants, the site became a digital journal of all our dates and lazy nights of not wanting to cook.
                    <br /><br />
                    The goal was never mass appeal or SEO growth. It was about capturing memories, sharing small stories, and creating a space just for us. It’s not perfect, and that’s the point. This project allowed me to design purely for joy, and in doing so, reconnect with the heart of why I became a designer in the first place.              
                  </p>
                </Flex>
              </SlideFade>

              {/* design process */}
              <section>
                <Flex
                  id='design process'
                  direction={{ base: 'column', md: 'row' }}
                  width={{ base: '100%', lg: '1024px' }}
                  align="flex-start"
                  gap={{ base: 4, md: 8, lg: 12 }}
                >
                  <Flex
                    flexDirection="column"
                    gap='5'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>design process</Text>
                    <Image
                      src={AllBlogs}
                      alt="Chasing Ravens Blog Page"
                      borderRadius="20px"
                      objectFit="cover"
                      maxW="100%"
                    />
                  </Flex>

                  <Flex 
                    style={tileBackgroundStyle}
                    flexDirection="column"
                    padding={{ base: '15px', md: '30px' }}
                    borderRadius="20px"
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text mb={4} style={bodyStyle}>
                      Because this project had no stakeholders, no KPIs, and no deadlines, I embraced full creative freedom and it was incredibly refreshing.
                    </Text>
                    <Text style={bodyStyle}>
                      Every design choice was based on what delighted me personally:
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        I chose a dark theme to evoke a moody, romantic feel, like reading a vintage travel journal at night.
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        The typography is inspired by typewritten articles, giving the site an old-world charm while staying crisp and readable.
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        A bold hot pink was used for CTA’s and accent elements. This is a color I rarely get to use in client work, but one that brought energy and surprise to the palette.
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        The layout is simple and responsive, optimized for reading short blurbs and viewing food photography — not for conversions or metrics.
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Dark images of sand and leaves are used to add texture at the header and footer of the site.
                      </li>
                    </Text>
                    <Text style={bodyStyle}>
                      The blog posts include short write ups alongside photos I took during our times at these different locations around the globe. I’ll admit — the occasional typo isn’t intentional, just a reflection of my less-than-perfect spelling. But in a way, it adds to the personal, unfiltered feel of the site. Or maybe I am just bad at QA...
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* results */}
              <section>
                <Flex
                  id='results'
                  direction={{ base: 'column', md: 'row' }}
                  width={{ base: '100%', lg: '1024px' }}
                  align="flex-start"
                  gap={{ base: 4, md: 8, lg: 12 }}
                  mb={{ base: '150', md: '200' }}
                >
                  <Flex
                    flexDirection="column"
                    gap='5'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>results</Text>
                    <Image
                      src={StarreInne}
                      alt="Photo of Ye Olde Starre Inne food with a breif description and a link to the blogs page"
                      borderRadius="20px"
                      objectFit="cover"
                      maxW="100%"
                    />
                  </Flex>

                  <Flex 
                    style={tileBackgroundStyle}
                    flexDirection="column"
                    padding={{ base: '15px', md: '30px' }}
                    borderRadius="20px"
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text style={bodyStyle}>
                      When I revealed the site to my partner, their reaction was everything I’d hoped for, they were deeply touched. It was a reminder that design can be a love language, too.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      Even if no one else ever reads the words or browses the images, the time and care put into this site made it one of the most rewarding projects I’ve ever done. It’s a living archive of our relationship, and one I’m proud to have crafted.
                    </Text>                  
                  </Flex>
                </Flex>
              </section>
            </VStack>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};

export default ChasingRavens;
