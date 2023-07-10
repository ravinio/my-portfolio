import React from "react";
import { Button, useTheme } from "@chakra-ui/react"
import { FaLinkedinIn } from 'react-icons/fa';

interface LinkedInBtnProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const LinkedInBtn: React.FC<LinkedInBtnProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  const handleClick = () => {
    window.location.href = "http://www.linkedin.com/in/raviniodesigns";
  };

  return (
    <Button 
      style={bodyStyle} 
      variant='outline'
      borderRadius='30px'
      leftIcon={<FaLinkedinIn />}
      onClick={handleClick}
    >
      /raviniodesigns
    </Button>
  );
};

export default LinkedInBtn;