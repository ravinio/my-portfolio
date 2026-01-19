import React from 'react';
import { Box, Center, Flex, Image, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/topNav';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/omahaobedience/puppy-training.png';
import NotebookLM from '../assets/pages/omahaobedience/notebook-lm.png';
import HomePage from '../assets/pages/omahaobedience/oo-home-page.png';
import { keyframes } from '@emotion/react'

interface OmahaObedienceProps {
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

const OmahaObedience: React.FC<OmahaObedienceProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
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

  const heroHeadingStyle = {
    color: "#ffffff",
    fontFamily: theme.styles[activeTheme].heading,
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
        id='main-scroll-container'
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
            m={{ base: '107px 16px 16px 16px', md: '107px 24px 24px 24px' }}
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
                borderRadius='lg'
              >
                <Box position="absolute" bottom="0" left="0" p="6">
                  <Text fontSize="4xl" style={heroHeadingStyle}>omaha obedience</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://www.omahaobedience.com/" 
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
                    <Text fontSize="xl" style={headingStyle}>industry</Text>
                    <Text fontSize="l" style={bodyStyle}>Dog Boarding/Traing</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>Freelance Designer</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2022</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                      {['UI/UX Design', 'HTML/CSS', 'React', 'Branding'].map(tag => (
                        <Tag key={tag} bg={styles.color} color={styles.wrapperBackground} borderRadius="full">
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
                  gap={{ base: '16px', md: '24px' }}
                  padding={{ base: '16px', md: '24px' }}
                  borderRadius="lg"
                >
                  <Text fontSize="3xl" style={headingStyle}>project brief</Text>
                  <p style={bodyStyle}>
                    Omaha Obedience is a locally owned dog training business that specializes in behavior modification, basic manners, and everyday obedience skills. Formerly known as Time Out Acres, the business underwent a rebrand to create a more friendly, trustworthy, and locally resonant identity.
                    <br /><br />
                    Chase, the owner, wanted to pivot to a modern and inviting brand that reflected his growing client base in the Omaha area and his own values. With minimal design direction but complete creative trust, I led the rebranding process — from designing the new logo to building a custom website from scratch.             
                  </p>
                </Flex>
              </SlideFade>

              {/* market & platform research */}
              <section>
                <Flex
                  id='research'
                  direction={{ base: 'column', md: 'row' }}
                  width={{ base: '100%', lg: '1024px' }}
                  align="flex-start"
                  gap={{ base: 4, md: 8, lg: 12 }}
                >
                  <Flex
                    flexDirection="column"
                    gap='4'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>market & platform research</Text>
                    <Image
                      src={NotebookLM}
                      alt="Legacy Onestaff platform"
                      borderRadius="lg"
                      objectFit="cover"
                      maxW="100%"
                    />
                  </Flex>

                  <Flex 
                    style={tileBackgroundStyle}
                    flexDirection="column"
                    padding={{ base: '16px', md: '24px' }}
                    borderRadius="lg"
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text mb={4} style={bodyStyle}>
                      To understand the local market and set Omaha Obedience apart, I built a research notebook in Google NotebookLM to collect and analyze competitor data by providing it URL’s & website screenshots. I would ask questions such as:                    
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Pricing structures (per session, packages, board & train programs)
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Service offerings & differentiators (e.g., off-leash training, group classes, in-home visits)                      
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        SEO signals (e.g., keyword usage, blog content, Google reviews, backlink strategy)
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Branding & messaging patterns (e.g., tone of voice, logo treatment, hero copy)
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Navigation & booking flows (how easy it is to contact or schedule a session)
                      </li>
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      This audit helped guide early decisions on content hierarchy, pricing strategy, and positioning, and allowed me to provide the client with market-backed insights for his services and branding direction.
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* design process */}
              <Flex
                id='design process'
                style={tileBackgroundStyle}
                width={{ base: '100%', md: '708px' }}
                alignItems="left"
                flexDirection="column"
                gap={{ base: '16px', md: '24px' }}
                padding={{ base: '16px', md: '24px' }}
                borderRadius="lg"
              >
                <Text fontSize="3xl" style={headingStyle}>design process</Text>
                <Text style={bodyStyle}>
                  The process began offline with sketches in a notebook exploring logo concepts and simple layout ideas for the website.
                </Text>
                <Text style={bodyStyle}>
                  The branding journey was highly collaborative. Through multiple feedback rounds and exploratory styles, we clarified a visual direction that gave me the perfect platform to build a website with very few iterations.  
                </Text>                    
                <Text mb={4} style={bodyStyle}>
                  I was able to build off a template I found on Webflow and customized it according to the owners preferences. From there I was also able to add a link to Getform for potential client’s to share their information with Chase straight to his email with no oversight from me.
                </Text>
              </Flex>

              {/* results & impact */}
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
                    gap='4'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>results & impact</Text>
                    <Image
                      src={HomePage}
                      alt="Omaha Obedience puppy train website"
                      borderRadius="lg"
                      objectFit="cover"
                      maxW="100%"
                    />
                  </Flex>

                  <Flex 
                    style={tileBackgroundStyle}
                    flexDirection="column"
                    padding={{ base: '16px', md: '24px' }}
                    borderRadius="lg"
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text style={bodyStyle}>
                      Since launch, the website has driven steady organic traffic via Google Search — helping potential clients find Omaha Obedience without paid advertising. Past clients now have a clean, professional link to share with their friends and neighbors, resulting in strong word-of-mouth referrals.                  </Text>
                    <Text mb={4} style={bodyStyle}>
                      The rebrand has also helped the business owner establish a stronger local presence and build trust with new clients.                  
                    </Text>                  
                    <Text mb={4} style={bodyStyle}>
                      With a logo and website that reflect the quality of service, Omaha Obedience is better positioned to grow its client base in a competitive local market.                  
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

export default OmahaObedience;
