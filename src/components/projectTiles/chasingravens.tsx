import React from "react";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, IconButton, Image, Text, useTheme } from "@chakra-ui/react"
import { BiLike, BiChat, BiShare } from "react-icons/bi"
import styles from "../../styles/global.module.css"
import MichaelIcon from "../../assets/projects/icons/michael.gif"
import LebowskiImg from "../../assets/projects/imgs/lebowski.gif"

interface ChasingRavensProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const ChasingRavens: React.FC<ChasingRavensProps> = ({ activeTheme, onThemeSwitch }) => {
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
              <h3 style={subHeadingStyle}>chasing ravens</h3>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='14px'>
          This website is a special gift I crafted for my current partner, showcasing my passion for both design and gastronomy. Meticulously handcrafted using the powerful combination of Contentful API, React, and SCSS, it has been transformed into a captivating food blog. 
          The site boasts an inviting home, an informative about page, and a captivating blog section, all wrapped in a custom brand and vibe that permeates every corner.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={LebowskiImg}
      />
    </Card>
  );
};

export default ChasingRavens;