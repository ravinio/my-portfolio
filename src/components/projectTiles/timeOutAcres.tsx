import React from 'react'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Image, Text, useTheme } from '@chakra-ui/react'
import MichaelIcon from '../../assets/projects/icons/michael.gif'
import LebowskiImg from '../../assets/projects/imgs/lebowski.gif'

interface TimeOutAcresProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const TimeOutAcres: React.FC<TimeOutAcresProps> = ({ activeTheme, onThemeSwitch }) => {
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
              <h3 style={subHeadingStyle}>time out acres</h3>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize='14px'>
          This website was built for a local client that boards and trains dogs. As they embarked on their online journey, they entrusted me with the task of not only establishing their web presence but also revitalizing their entire brand identity.
          This dynamic website seamlessly integrates engaging YouTube videos, offering valuable insights into their services. Additionally, a user-friendly contact form empowers prospective clients to effortlessly reach out and inquire about the exceptional offerings available.
        </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={LebowskiImg}
      />
    </Card>
  );
};

export default TimeOutAcres;