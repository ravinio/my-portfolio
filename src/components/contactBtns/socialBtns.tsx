import React from 'react';
import { IconButton, useTheme } from '@chakra-ui/react';

interface SocialButtonProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  icon: React.ReactElement;
  label: string;
  link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  activeTheme,
  onMouseEnter, 
  onMouseLeave,
  icon,
  label,
  link,
}) => {
  const theme = useTheme();

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
    borderColor: theme.styles[activeTheme].color
  };

  const buttonHoverStyle = {
    background: theme.styles[activeTheme].cardBackground,
    cursor: 'none'
  };

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <IconButton
      style={bodyStyle}
      aria-label={label}
      variant="outline"
      borderRadius="50%"
      icon={icon}
      onClick={handleClick}
      transition="background 1s ease"
      _hover={buttonHoverStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default SocialButton;
