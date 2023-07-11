import React from "react";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, IconButton, Image, Text, useTheme } from "@chakra-ui/react"
import { BiLike, BiChat, BiShare } from "react-icons/bi"
import styles from "../../styles/global.module.css"
import MichaelIcon from "../../assets/projects/icons/michael.gif"
import LebowskiImg from "../../assets/projects/imgs/lebowski.gif"

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
            <Avatar name='Segun Adebayo' src={MichaelIcon} />
    
            <Box>
              <h3 style={subHeadingStyle}>TL Photography</h3>
            </Box>
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