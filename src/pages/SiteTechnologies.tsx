import React from 'react';
import { Box, Center, Flex, Image, Link, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/Navs/topNavEscapay';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/sitetechnologies/figma-thumbnail.png';
import MainChallenge from '../assets/pages/sitetechnologies/main-challenge.gif';
import UserResearch from '../assets/pages/sitetechnologies/user-research.png';
import DesignProcess from '../assets/pages/sitetechnologies/design-process.png';
import { keyframes } from '@emotion/react'

interface SiteTechnologiesProps {
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

const SiteTechnologies: React.FC<SiteTechnologiesProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
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

  const disclaimerStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].text,
    fontSize: "14px"
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
                backgroundPosition='center'
                borderRadius='lg'
              >
                <Box position="absolute" bottom="0" left="0" p="6">
                  <Text fontSize="4xl" style={heroHeadingStyle}>site technologies</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://sitetechnologies.io/" 
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
                    <Text fontSize="l" style={bodyStyle}>Poperty Management</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>UX Team Lead</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2024-2026</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                      {['UX Team Lead', 'UX Audit', 'Design System Architect', 'End-to-End Redesign'].map(tag => (
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
                    SITE Technologies is an AI/ML-enabled platform that empowers commercial, industrial, and retail property owners to prioritize projects accurately, remove subjectivity from analysis, and eliminate reactive spending. I joined the company as a key member of their first-ever UX team during a pivotal growth phase.                    
                    <br /><br />
                    In this role, I operated with a high degree of autonomy. While management provided high-level guidelines, I was largely driven by my own volition to determine daily priorities and strategic design direction.                   
                    <br /><br />
                    Being the lead designer of this team was about more than just hitting deadlines, it was about championing empathy and accessibility in everything we touched. I took pride in steering a culture where every designer had a voice. For me, creating an inclusive team dynamic was the foundation for building a truly powerful, user-centric platform.
                    <br /><br />
                    <i style={disclaimerStyle}>*Due to the proprietary nature of SITE Technologies’ AI/ML logic and a signed non-disclosure agreement, I am unable to publicly display high-fidelity final designs or internal data structures. However, I am happy to discuss my process, leadership approach, and problem-solving methodology in a private interview setting.*</i>
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
                      src={MainChallenge}
                      alt="gif showiga a line that reveals cracks on pavement"
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
                      We inherited a legacy platform that had been built quickly and clumsily to meet early market demands. This resulted in significant technical debt that hindered scalability and user experience, ultimately leading to the decision to rebuild from scratch. My challenge was a complex balancing act:                    
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Manage the maintenance of the old site (including building out new inventory, landscape, and facade management features) while simultaneously designing the new platform.                      
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Develop high-fidelity prototypes for the sales team to use in high-stakes pitches, helping them visualize the future of the product to potential clients.
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Simultaneously, we had to architect and design a completely new, modern, and scalable platform from the ground up to match the sophisticated AI/ML power under the hood.                      
                      </li>
                    </Text>
                    <Text style={bodyStyle}>
                      All of this meant moving at an extremely fast pace to meet a serious launch deadline for the new platform. This required constant, daily communication with project managers, stakeholders, and developers to answer questions, clear blockers, and ensure the vision remained intact under pressure.                    
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* user research */}
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
                    <Text fontSize="3xl" style={headingStyle}>user research</Text>
                    <Image
                      src={UserResearch}
                      alt="Property with zones highlighted"
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
                      Research at SITE was a collective effort focused on high-quality proof of concepts that are provided quickly in order to meet the demand from a high-growth tech company. While my fellow Lead, 
                      <Link
                        textDecor='underline' 
                        href={'https://www.linkedin.com/in/spottswood/'}
                        isExternal
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        target='_blank'
                      >
                        Jayne Spottswood
                      </Link>
                      , pioneered our AI-powered research methodology, I worked in lockstep with her to integrate these insights into the product's design core.                    
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      This dynamic allowed us to trade expertise: I led the design vision with Jayne’s support, while I supported Jayne in executing the research workflows she established. By deeply adopting this process, I was able to ensure three core research values:                    
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        <b>Speed & Confidentiality</b>: By using secure AI workflows, we were able to analyze massive amounts of competitive research while ensuring company data remained confidential.                      
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        <b>Strategic Justification</b>: We utilized advanced AI tools to synthesize industry data and competitive benchmarks at lightning speed.                      
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        <b>Efficiency</b>: This allowed us to not only find design solutions faster but also to provide developers and stakeholders with data-backed justifications for our decisions, ensuring that every design choice was rooted in objective evidence.                      
                      </li>
                    </Text>
                  </Flex>
                </Flex>
              </section>

              {/* design process */}
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
                    <Text fontSize="3xl" style={headingStyle}>design process</Text>
                    <Image
                      src={DesignProcess}
                      alt="Blurry figma image"
                      borderRadius="lg"
                      objectFit="cover"
                      maxW="100%"
                      maxH={{ base: "400px", md: "100%"}}
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
                      My journey at SITE began and ended with the creation and maintenance of their custom design system. It was built on the foundation of Radix components which catapulted into creating custom standardized table layouts, system messaging, and design tools that unified the product's interface to feel modern, professional, and visually engaging.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      My process transitioned from solitary design system building to preforming audits of my team  member’s designs, and this eventually evolved into a continuous cycle of quality governance. As the Lead Designer, I was the final point of approval for all designs, ensuring every screen met our rigorous standards.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      As the team became familiar with the system, I was able to transition into a more strategic role, providing targeted feedback via Figma comments that allowed the designers to work autonomously while keeping the entire platform's visual language cohesive.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      With that in mind, I also focused on establishing a robust back and forth with the engineering team. Developers relied on our continuous audits of the dev site to ensure the final product mirrored the Figma screens precisely. These conversations forced us to justify our technical and aesthetic decisions, resulting in a product the entire cross-functional team felt invested in.
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
                padding={{ base: '16px', md: '24px' }}
                borderRadius="lg"
                mb={{ base: '150', md: '200' }}
              >
                <Text fontSize="3xl" style={headingStyle}>results & impact</Text>
                <Text mb={4} style={bodyStyle}>
                  The journey at SITE reached a bittersweet conclusion; we successfully launched the platform to internal and beta users, but the team was impacted by a company-wide layoff shortly thereafter. Despite this, the impact of our work was immediate:
                </Text>
                <Text mb={4} ml={6} style={bodyStyle}>
                  <li>
                    During the Beta phase, the internal team reported a significant improvement in functionality and "ease of flow."
                  </li>
                </Text>
                <Text mb={4} ml={6} style={bodyStyle}>
                  <li>
                    Our operations team, who relied heavily on complex drawing tools for property analysis, reported a far more pleasant and powerful experience. A primary goal was to reduce the physical strain of the previous clumsy interface. By streamlining the drawing and mapping tools, we successfully improved the daily workflow for power users—literally aiming to save their hands from carpal tunnel.
                  </li>
                </Text>
                <Text mb={4} ml={6} style={bodyStyle}>
                  <li>
                    Stakeholders and beta users were blown away by the visual transformation, noting that the platform finally looked as advanced as the AI technology it provided.
                  </li>
                </Text>
              </Flex>
            </VStack>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};

export default SiteTechnologies;
