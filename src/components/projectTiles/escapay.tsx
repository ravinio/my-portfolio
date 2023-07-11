import React from 'react'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Image, Text, useTheme } from '@chakra-ui/react'
import MichaelIcon from '../../assets/projects/icons/michael.gif'
import LebowskiImg from '../../assets/projects/imgs/lebowski.gif'

interface EscapayProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Escapay: React.FC<EscapayProps> = ({ activeTheme, onThemeSwitch }) => {
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
              <h3 style={subHeadingStyle}>escapay</h3>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='14px'>
          This Figma file features a brand guide and prototype for a fictitious travel company named Escapay. It covers the company’s entire identity including their logo, fonts, color pallet, and images.
          The prototype highlights the different locations that users can scroll through and save to their favorites list. They can then visit their favorite list and explore and compare the locations they wish to visit.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={LebowskiImg}
      />
    </Card>
  );
};

export default Escapay;