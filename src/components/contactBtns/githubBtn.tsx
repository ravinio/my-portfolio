import React from 'react'
import { Button, useTheme } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'

interface GithubBtnProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const GithubBtn: React.FC<GithubBtnProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  const handleClick = () => {
    window.location.href = 'https://github.com/ravinio'
  };

  return (
    <Button 
      style={bodyStyle} 
      variant='outline'
      borderRadius='30px'
      fontSize='sm'
      leftIcon={<AiFillGithub />}
      onClick={handleClick}
    >
      /ravinio
    </Button>
  );
};

export default GithubBtn;