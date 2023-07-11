import React from 'react'
import { Flex, Spacer, useTheme } from '@chakra-ui/react'

interface TopNavProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const TopNav: React.FC<TopNavProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();
  const fillColor = theme.styles[activeTheme]?.color || '#EDEDED'

  return (
    <Flex position='absolute' top='0' left='0' width='100%' padding='30px'>
      <svg
        width='57px'
        height='57px'
        viewBox='0 0 400 400'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M216 154.5C216 188.466 188.466 216 154.5 216C120.534 216 93 188.466 93 154.5C93 120.534 120.534 93 154.5 93C188.466 93 216 120.534 216 154.5Z'
          fill={fillColor}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 151.757 17.0812 107.503 45.5257 72.9568C28.857 95.4721 19 123.335 19 153.5C19 228.335 79.6654 289 154.5 289C229.335 289 290 228.335 290 153.5C290 78.6654 229.335 18 154.5 18C125.39 18 98.4241 27.1795 76.3389 42.8017C110.37 15.9942 153.317 0 200 0C310.457 0 400 89.5431 400 200ZM301 316C320.33 316 336 305.703 336 293C336 280.297 320.33 270 301 270C281.67 270 266 280.297 266 293C266 305.703 281.67 316 301 316Z'
          fill={fillColor}
        />
      </svg>
      <Spacer />
    </Flex>
  );
};

export default TopNav;
