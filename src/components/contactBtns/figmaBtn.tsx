import React from 'react'
import { Button, useTheme } from '@chakra-ui/react'
import { FiFigma } from 'react-icons/fi'

interface FigmaBtnProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const FigmaBtn: React.FC<FigmaBtnProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  const handleClick = () => {
    window.location.href = 'https://figma.com/@enjidev'
  };

  return (
    <Button 
      style={bodyStyle} 
      variant='outline'
      borderRadius='30px'
      fontSize='sm'
      leftIcon={<FiFigma />}
      onClick={handleClick}
    >
      /@ravin2
    </Button>
  );
};

export default FigmaBtn;