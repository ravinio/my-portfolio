import React from 'react';
import { Box, Center, Flex, Image, Link, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/Navs/topNavOSM';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/osm/hero.png';
import MainChallengeNurse from '../assets/pages/osm/smiling-nurse.png';
import RealNurse from '../assets/pages/osm/actual-nurse.png';
import OsmBlog from '../assets/pages/osm/blog.png';
import ArizonaHome from '../assets/pages/osm/arizona.png';
import { keyframes } from '@emotion/react'

interface OSMProps {
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

const OSM: React.FC<OSMProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
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
                  <Text fontSize="4xl" style={heroHeadingStyle}>onestaff medical</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://www.onestaffmedical.com/" 
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
                    <Text fontSize="l" style={bodyStyle}>Medical Staffing</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>UX Designer and Front-End Developer</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2022–2024</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                      {['UI/UX Design', 'Branding', 'React', 'Contentful'].map(tag => (
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
                      duration: 2.0, // Animation duration of 1 second (slower)
                      delay: 1     // Delay entrance by 0.5 seconds
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
                    OneStaff Medical is a staffing agency with a vibrant brand and strong reputation in the travel nursing space. Despite their bold voice and personality, their digital tools were antiquated — with a dated website, limited mobile access, and poor usability.
                    <br /><br />
                    The core goal was to inspire prospective travel nurses to explore the U.S. with OneStaff, while also establishing user trust, improving accessibility, and building a scalable, modern digital platform that would serve both marketing and internal needs.              
                  </p>
                </Flex>
              </SlideFade>

              {/* main challenge */}
              <section>
                <Flex
                  id='main challenge'
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
                    <Text fontSize="3xl" style={headingStyle}>main challenge</Text>
                    <Image
                      src={MainChallengeNurse}
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
                      The existing platform at the time was not mobile responsive, difficult to navigate, and lacked even basic accessibility (A11y) support. It had grown organically over the years, leading to outdated UI patterns and a bouquet of full legacy decisions.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      Take a look for yourself at the previous version using the wayback machine{' '}
                      <Link
                        textDecor='underline' 
                        href={'https://web.archive.org/web/20180304001811/https://onestaffmedical.com/osmhome.aspx'}
                        isExternal
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        target='_blank'
                      >
                        here
                      </Link>
                      .
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      Rather than retrofitting, the team chose to rebuild the marketing website and internal dashboards from the ground up — modernizing architecture, content structure, and design language.
                    </Text>
                    <Text style={bodyStyle}>
                      We audited the legacy platform to determine what still worked well, which helped us preserve functional best practices while confidently sunsetting ineffective patterns.
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* user research */}
              <section>
                <Flex
                  id='user research'
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
                    <Text fontSize="3xl" style={headingStyle}>user research</Text>
                    <Image
                      src={RealNurse}
                      alt="One of OSM's travel nurse testimonials"
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
                      I developed personas based on interviews and market research from recruiters and current travel nurses in the OneStaff network. These individuals were highly trained, experienced professionals who craved both purpose and adventure. Many were motivated by the flexibility and pay of travel roles, but also sought a recruiter or agency they could trust.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      Based on these insights, our design strategy focused on: 
                    </Text>                    
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Adventure + Professionalism: Balancing fun, inviting visuals with structured layouts and clear pathways.
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                      Trust Through Transparency: Clear recruiter bios, testimonial-driven messaging, and accessible content.
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                      Action-Driven Navigation: Quick ways to browse jobs, connect with recruiters, and learn about travel perks.
                      </li>
                    </Text>
                  </Flex>
                </Flex>
              </section>

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
                    gap='4'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>design process</Text>
                    <Image
                      src={OsmBlog}
                      alt="OneStaff's new Blog Page"
                      borderRadius="lg"
                      objectFit="cover"
                      maxW="100%"
                    />
                    <Image
                      src={ArizonaHome}
                      alt="OneStaff's new Home Page"
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
                      My role in this project was deeply hands-on and comprehensive — from visual strategy to interface execution.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      Before diving into UI, I worked closely with the marketing team to explore and define the future visual direction of OneStaff’s brand. Through a series of mood boards and collaborative reviews, we aligned on a look that blended professionalism, approachability, and a spirit of adventure, resonating with travel nurses while still conveying trust.
                    </Text> 
                    <Text mb={4} style={bodyStyle}>
                      To optimize speed and consistency for both designers and developers, I made the strategic decision to build our design system using Material Design (MUI) as a base. This gave us an accessible, scalable, and well-documented component library that could be adapted quickly across pages.
                    </Text> 
                    <Text style={bodyStyle}>
                      From there I single-handedly designed over 100 responsive screens across the marketing website and internal dashboards in Figma. This included:
                    </Text>                    
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Dynamic theme modes (light/dark + seasonal variations)
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Custom workflows for different user types (nurses, recruiters, admins)                      
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Form design with improved usability and accessibility                      
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Modular page templates for ongoing scalability
                      </li>
                    </Text>
                    <Text style={bodyStyle}>
                      I approached these with not just visual polish in mind, but strategic UX flows, clarity of information architecture, and internal functionality needs.
                    </Text>  
                  </Flex>
                </Flex>
              </section>

              {/* results and impact */}
              <Flex
                id='results'
                style={tileBackgroundStyle}
                width={{ base: '100%', md: '708px' }}
                alignItems="left"
                flexDirection="column"
                gap={{ base: '16px', md: '24px' }}
                padding={{ base: '16px', md: '24px' }}
                borderRadius="lg"
                mb={{ base: '150', md: '200' }}
              >
                <Text fontSize="3xl" style={headingStyle}>results & impact</Text>
                <p style={bodyStyle}>
                  The redesigned platform launched successfully and was well-received internally and by new users. While external economic downturns affected overall market activity, OneStaff maintained a steady stream of nurse inquiries and remained competitive, even as peers downsized or closed.
                  <br /><br />
                  Key impacts:
                  Improved usability and mobile responsiveness
                  Faster workflows for internal recruiter dashboards
                  Stronger visual identity and alignment across marketing and operations
                  Created a future-proof foundation for scale and content flexibility using Contentful
                </p>
              </Flex>
            </VStack>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};

export default OSM;
