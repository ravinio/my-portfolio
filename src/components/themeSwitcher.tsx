import React from 'react';
import { Button, useTheme } from '@chakra-ui/react';

interface ThemeSwitcherButtonProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
}

const ThemeSwitcherButton: React.FC<ThemeSwitcherButtonProps> = ({ themes, onThemeSwitch, activeTheme }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const buttonLabel = `${activeTheme.charAt(0).toLowerCase() + activeTheme.slice(1)}`;

  const buttonStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  const buttonHoverStyle = {
    background: theme.styles[activeTheme].background,
    boxShadow: theme.styles[activeTheme].boxShadow
  };

  return (

      <Button 
        onClick={switchTheme} 
        style={buttonStyle} 
        variant='ghost'
        position='absolute'
        right='0'
        margin='30px'
        fontWeight='400'
        zIndex='100'
        _hover={buttonHoverStyle}
      >
        {buttonLabel}
      </Button>

  );
};

export default ThemeSwitcherButton;
