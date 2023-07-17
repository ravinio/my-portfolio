import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Center, Flex, Image, Link, Text, useTheme } from '@chakra-ui/react'
import { useSpring, a } from '@react-spring/web'
import styles from '../../styles/global.module.css'
import Icon from '../../assets/projects/icons/toa-purple-logo.png'
import Gif from '../../assets/projects/gifs/toa.gif'

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

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <Card 
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
            <Link href='https://www.timeoutacres.com/'>
              <h3 style={subHeadingStyle}>time out acres</h3>
            </Link>
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
        src={Gif}
      />
    </Card>
  );
};

export default TimeOutAcres;