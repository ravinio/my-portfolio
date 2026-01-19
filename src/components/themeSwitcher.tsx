import React from 'react';
import { Button, useTheme } from '@chakra-ui/react';
import { MdPalette } from "react-icons/md";

interface ThemeSwitcherButtonProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ThemeSwitcherButton: React.FC<ThemeSwitcherButtonProps> = ({ themes, onThemeSwitch, activeTheme, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = themes.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const color = theme.styles[activeTheme]?.color;
  const drawerColor = theme.styles[activeTheme]?.color;
  const bodyFont = theme.styles[activeTheme]?.body;

  const buttonHoverStyle = {
    background: theme.styles[activeTheme].cardBackground,
    //transition: 'background 2s ease',
    cursor: 'none'
  };

  return (
    <Button
      onClick={switchTheme}
      color={{ base: drawerColor, md: color }}
      rightIcon={<MdPalette />}
      fontFamily={bodyFont}
      variant="ghost"
      borderRadius='full'
      fontWeight="400"
      zIndex="100"
      transition='background 1s ease, transform 1s ease'
      _hover={{
        ...buttonHoverStyle,
        transform: 'translateY(-3px)',
        boxShadow: 'sm'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeTheme}
    </Button>
  );
};

export default ThemeSwitcherButton;
