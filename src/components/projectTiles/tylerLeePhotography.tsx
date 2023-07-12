import React from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import Icon from '../../assets/projects/icons/cameralogo.png'
import LebowskiImg from '../../assets/projects/imgs/lebowski.gif'

interface TylerLeePhotographyProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const TylerLeePhotography: React.FC<TylerLeePhotographyProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].background,
    boxShadow: theme.styles[activeTheme].boxShadow,
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  }

  const subHeadingStyle = {
    fontFamily: theme.styles[activeTheme].heading,
  };

  return (
    <Card 
      maxW={{ base: 'sm', md: 'md' }}  
      height='fit-content'
      overflow='hidden'
      borderRadius='10px'
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
              <Image src={Icon} />
            </Center>

            <Link href='https://tyler-lee-photography-ancu492mk-ravinio.vercel.app/'>
              <h3 style={subHeadingStyle}>TL photography</h3>
            </Link>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='14px'>
          I created this website for a very talented friend of mine so he could showcase his work. Using React.js, I developed an immersive browsing experience that seamlessly loads and displays the captivating imagery. With Tailwind, I easily customized the website's appearance, ensuring it perfectly aligns with the artistic vision behind the photography.
          Adding a touch of uniqueness, I implemented a custom cursor feature that dynamically changes colors to their inverse. This subtle yet captivating detail enhances the overall user experience, providing an extra layer of visual interest as visitors explore the captivating photographs.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={LebowskiImg}
      />
    </Card>
  );
};

export default TylerLeePhotography;