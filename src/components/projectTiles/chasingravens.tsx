import React from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import Icon from '../../assets/projects/icons/chasingraven.svg'
import Gif from '../../assets/projects/gifs/chasingravens.gif'

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
      // maxW={{ base: 'sm', md: 'md' }}  
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
            <Link href='https://www.chasingravensblog.com/'>
              <h3 style={subHeadingStyle}>chasing ravens</h3>
            </Link>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='14px'>
          This website created as a gift for my partner, showcasing our passion for both design and gastronomy. Meticulously handcrafted using the powerful combination of Contentful API, React, and SCSS, it has been transformed into a captivating food blog. 
          The site boasts an inviting home, an informative about page, and a captivating blog section, all wrapped in a custom brand and vibe that permeates every corner.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={Gif}
      />
    </Card>
  );
};

export default ChasingRavens;