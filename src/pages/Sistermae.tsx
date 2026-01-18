import React from 'react';
import { Box, Center, Flex, Image, Link, SlideFade, Tag, Text, VStack, useTheme } from '@chakra-ui/react';
import TopNav from '../components/Navs/topNavSistermae';
import ButttonLink from '../components/siteLinkBtn';
import HeroImage from '../assets/pages/sistermae/hero-img.png';
import InspoImg from '../assets/pages/sistermae/inspo.png';
import FigmaAssets from '../assets/pages/sistermae/Figma-assets.png';
import { keyframes } from '@emotion/react'

interface SisterMaeProps {
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

const SisterMae: React.FC<SisterMaeProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
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
            maxWidth='1000px'
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
                  <Text fontSize="4xl" style={heroHeadingStyle}>sister m.a.e. designs</Text>
                </Box>
                <Box position="absolute" bottom="0" right="0" p="6">
                  <ButttonLink 
                    siteLink="https://www.figma.com/design/gBcxkRCIVKVXkNknY9sDeW/Sister-M.A.E.-Designs?node-id=158-837&t=neoj9IDAqR1iD4HP-1" 
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
                    <Text fontSize="l" style={bodyStyle}>Wedding Stationary</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>role</Text>
                    <Text fontSize="l" style={bodyStyle}>Freelance Designer</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>timeline</Text>
                    <Text fontSize="l" style={bodyStyle}>2025</Text>
                  </Flex>
                  <Flex flexDirection="column">
                    <Text fontSize="xl" style={headingStyle}>tags</Text>
                    <Flex gap="2">
                      {['UI/UX Design', 'Shopify', 'React'].map(tag => (
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
                  gap={{ base: '16px', md: '24px' }}
                  padding={{ base: '16px', md: '24px' }}
                  borderRadius="lg"
                >
                  <Text fontSize="3xl" style={headingStyle}>project brief</Text>
                  <Text mb={4} style={bodyStyle}>
                    Sister M.A.E. Designs is a one-woman creative business specializing in custom wedding invitations, place cards, save the dates, menus, and other personalized paper goods. Each piece is handcrafted and tailored for individual clients, making personalization and visual storytelling essential to the brand.
                  </Text>
                  <Text mb={4} style={bodyStyle}>
                    Elma, the founder and designer, had an active Etsy storefront but was unhappy with Etsy’s auto-generated website experience. It didn’t reflect the heart of her work or give her the flexibility she needed to grow. She reached out to me to help design a standalone brand-forward website that would retain Etsy’s functionality but elevate her customer experience, visibility, and business credibility.                 
                  </Text>
                  <Text style={bodyStyle}>
                    The website is not currently live but you may visit the Figma designs{' '}
                    <Link
                      textDecor='underline' 
                      href={'https://www.figma.com/design/gBcxkRCIVKVXkNknY9sDeW/Sister-M.A.E.-Designs?node-id=158-837&t=neoj9IDAqR1iD4HP-1'}
                      isExternal
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      target='_blank'
                    >
                      here
                    </Link>
                    .
                  </Text>
                </Flex>
              </SlideFade>

              {/* research */}
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
                    gap='5'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>market & platform research</Text>
                    <Image
                      src={InspoImg}
                      alt="Mood board for Sister M.A.E. website design"
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
                      In early discovery calls with Elma, we reviewed:
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Inspiration: Wedding invitation sites she admired and what specific design elements she resonated with (e.g., minimal layouts, warm photography, modern typography).
                      </li>
                    </Text>
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Scale & Strategy: Her desire to keep the business boutique-sized, optimize for search-ability, and attract clients through a mix of Etsy, direct traffic, and referrals.
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Platform Fit: With budget in mind, we explored various options including:
                      </li>
                    </Text>
                    
                    <Text ml={12} style={bodyStyle}>
                      <li>
                        Shopify
                      </li>
                    </Text>
                    <Text ml={12} style={bodyStyle}>
                      <li>
                        Squarespace
                      </li>
                    </Text>
                    <Text ml={12} style={bodyStyle}>
                      <li>
                        Wix
                      </li>
                    </Text>
                    <Text ml={12} style={bodyStyle}>
                      <li>
                        Big Cartel
                      </li>
                    </Text>
                    <Text mb={4} ml={12} style={bodyStyle}>
                      <li>
                        Webflow
                      </li>
                    </Text>

                    <Text style={bodyStyle}>
                      Ultimately, Shopify was selected as the best platform for balance of e-commerce functionality, Etsy syncing, pricing, and room for customization.
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
                    gap='5'
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Text fontSize="3xl" style={headingStyle}>design process</Text>
                    <Image
                      src={FigmaAssets}
                      alt="Figma assets for Sister M.A.E. website"
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
                      Even though we were working within the constraints of a Shopify theme, I took steps to infuse the site with custom styling and tailored UX decisions to reflect the romantic, handmade quality of her work.
                    </Text>
                    <Text mb={4} style={bodyStyle}>
                      We began with a moodboard based on colors she had previously used for her packaging and branding — soft earth tones, textured paper accents, and script typography. This helped establish the emotional tone and design direction before jumping into layout.
                    </Text>
                     <Text style={bodyStyle}>
                      I created a high-fidelity prototype of the homepage and key navigation flows in Figma. This helped us:
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Validate layout decisions early (before investing time in Shopify theme configuration)
                      </li>
                    </Text>
                    <Text ml={6} style={bodyStyle}>
                      <li>
                        Establish structure and page hierarchy
                      </li>
                    </Text>                      
                    <Text mb={4} ml={6} style={bodyStyle}>
                      <li>
                        Stress test how her unique product photos and long-form stories would appear in common patterns
                      </li>
                    </Text>    
                    <Text style={bodyStyle}>
                      Once the vision was aligned, I worked within a Shopify theme while applying custom code and CSS styling to adjust layout, typography, spacing, and colors — making sure it felt like her brand, not just a default storefront.
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
                <Text mb={{ base: '16px', md: '24px' }} fontSize="3xl" style={headingStyle}>results & impact</Text>
                <Text style={bodyStyle}>
                  The new site acts as a hybrid marketing and sales tool. By connecting her Etsy shop directly to Shopify, we ensured inventory sync and simplified management — but with the major benefit of:
                </Text>
                <Text mb={4} ml={6} style={bodyStyle}>
                  <li>
                    Owning her personal branded domain
                  </li>
                  <li>
                    Creating a commission-light sales channel
                  </li>
                  <li>
                    Providing a visually rich experience to showcase her craftsmanship
                  </li>
                </Text>
                <Text style={bodyStyle}>
                  Now, Elma uses her website confidently at vendor shows, in email signatures, and across social media — giving clients a clear sense of her style and professionalism before they ever hit Etsy. The site is a step toward business sustainability, autonomy, and creative pride.
                </Text>
              </Flex>
            </VStack>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};

export default SisterMae;
