import React from 'react';
import { Box, Center, Flex, Image, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/Navs/topNavEscapay';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/escapay/figma-thumbnail.png';
import FigmaDesigns from '../assets/pages/escapay/design-process.png';
import EscapayHome from '../assets/pages/escapay/escapay-home.png';
import EscapayGallery from '../assets/pages/escapay/escapay-gallery.png';
import { keyframes } from '@emotion/react'

interface EscapayProps {
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

const Escapay: React.FC<EscapayProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
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
            maxWidth='1500px'
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
                backgroundPosition='center'
                borderRadius='20px'
              >
                <Box position="absolute" bottom="0" left="0" p="6">
                  <Text fontSize="4xl" style={headingStyle}>escapay</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://www.figma.com/design/l4hnTSAnOldzyQbEd9AFDS/Escapay?node-id=0-1&t=xKOQr0qzsXXHgK1D-1" 
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
                    <Text fontSize="l" style={bodyStyle}>Travel Booking Service</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>Creator</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2022</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2">
                      {['Branding', 'Figma'].map(tag => (
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
                    Escapay is a fictional luxury travel agency I created to explore high-end branding, UI design, and responsive layout techniques in Figma. While the concept came before I watched White Lotus, it definitely evokes that same indulgent, aspirational energy. 
                    <br /><br />
                    Escapay is about vibrant luxury with a tranquil undertone — the kind of brand that promises both excitement and serenity. That feeling is woven throughout every design element, from typography choices to color palette and page flow.
                  </p>
                </Flex>
              </SlideFade>

              {/* branding */}
              <section>
                <Flex
                  id='branding'
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
                    <Text fontSize="3xl" style={headingStyle}>branding</Text>
                    <Image
                      src={FigmaDesigns}
                      alt="Example of Escapay design colors and fonts"
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
                      The aesthetic leans into “effortless luxury.” The five-page brand guide introduces Escapay’s identity and outlines how it should visually communicate its story. It includes logo usage guidelines, tone-setting typography with real examples, a sophisticated color palette, and image direction — specifying what types of visuals support or disrupt the brand’s message. Every component works together to cultivate a polished, elevated experience that feels both modern and transportive.
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* layouts */}
              <section>
                <Flex
                  id='layouts'
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
                    paddingRight="20px"
                  >
                    <Text fontSize="3xl" style={headingStyle}>layouts</Text>
                    <Flex
                      flexDirection="row"
                      gap='5'
                    >
                      <Image
                        src={EscapayHome}
                        alt="Escapay home page"
                        borderRadius="20px"
                        objectFit="cover"
                        maxW="50%"
                      />
                      <Image
                        src={EscapayGallery}
                        alt="Escapay gallery page"
                        borderRadius="20px"
                        objectFit="cover"
                        maxW="50%"
                      />
                    </Flex>
                  </Flex>

                  <Flex 
                    style={tileBackgroundStyle}
                    flexDirection="column"
                    padding={{ base: '15px', md: '30px' }}
                    borderRadius="20px"
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text style={bodyStyle}>
                      The brand guide comes to life through Escapay’s homepage design, featured in the next page of the Figma file. I designed five fully responsive breakpoints, each flowing smoothly between device sizes.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                       The landing view begins with a bold, full-bleed hero image that rotates through various dream destinations, paired with a clean search component that encourages personalized trip planning. Below, users can explore curated vacation packages, exclusive deals, blog content, and authentic testimonials. Each section is carefully laid out to feel aspirational, trustworthy, and easy to navigate.
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

export default Escapay;
