import React from "react";
import { 
  Box, 
  Button, 
  Center, 
  Drawer, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Flex, 
  IconButton, 
  Menu,
  MenuButton, 
  MenuList, 
  MenuItem,
  Spacer, 
  Text,
  useDisclosure, 
  useTheme 
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import ThemeSwitcherButton from '../components/themeSwitcher'

interface TopNavProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ themes, activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navFont = theme.styles[activeTheme].body
  const color = theme.styles[activeTheme]?.color
  const drawerColor = theme.styles[activeTheme]?.color
  const navDrawerBackground = theme.styles[activeTheme]?.cardBackground

  const buttonStyle = {
    color: theme.styles[activeTheme].color,
    fontWeight:'400',
    cursor: 'none'
  };

  const buttonHoverStyle = {
    background: theme.styles[activeTheme].cardBackground,
    cursor: 'none'
  };

    const dropdownHoverStyle = {
    background: theme.styles[activeTheme].wrapperBackground,
    cursor: 'none'
  };

  const projectSubtitle = {
    color: 'rgba(255,255,255,.5)',
    fontWeight:'400'
  };

  const projectLinks = [
    { name: 'SITE Technologies', path: '/pages/site-technologies' },
    { name: 'OneStaff Medical', path: '/pages/onestaff-medical' },
    { name: 'Sister M.A.E Designs', path: '/pages/sistermae' },
    { name: 'Omaha Obedience', path: '/pages/omaha-obedience' },
    { name: 'Chasing Ravens', path: '/pages/chasing-ravens' },
  ];

  const handleHomeScroll = (targetId: string) => {
    onClose();
    if (window.location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

 

  return (
    <>
      {/* desktop view */}
      <Flex 
        position='sticky' 
        top='0' 
        left='0' 
        width='100vw' 
        p={{ base: '16px', md: '16px 24px' }}
        mx={{ base: '-16px', md: '-24px' }}
        alignItems='center'
        zIndex='100'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <a href="/">
          <svg
            width='57px'
            height='57px'
            viewBox='0 0 400 400'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M216 154.5C216 188.466 188.466 216 154.5 216C120.534 216 93 188.466 93 154.5C93 120.534 120.534 93 154.5 93C188.466 93 216 120.534 216 154.5Z'
              fill={color}
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 151.757 17.0812 107.503 45.5257 72.9568C28.857 95.4721 19 123.335 19 153.5C19 228.335 79.6654 289 154.5 289C229.335 289 290 228.335 290 153.5C290 78.6654 229.335 18 154.5 18C125.39 18 98.4241 27.1795 76.3389 42.8017C110.37 15.9942 153.317 0 200 0C310.457 0 400 89.5431 400 200ZM301 316C320.33 316 336 305.703 336 293C336 280.297 320.33 270 301 270C281.67 270 266 280.297 266 293C266 305.703 281.67 316 301 316Z'
              fill={color}
            />
          </svg>
        </a>

        <Spacer />

        {/* desktop view */}
        <Center 
          display={{ base: 'none', md: 'flex' }}
          height='fit-content'
          gap='20px'
        >
          <Button variant='ghost' style={buttonStyle} _hover={buttonHoverStyle} onClick={() => window.location.href='/'}>
            Home
          </Button>

          <Menu isLazy>
            <MenuButton 
              as={Button} 
              variant='ghost' 
              style={buttonStyle}
              rightIcon={<ChevronDownIcon />} 
              _hover={buttonHoverStyle}
              _active={buttonHoverStyle}
            >
              Projects
            </MenuButton>
            <MenuList bg={navDrawerBackground} border="none" boxShadow="xl">
              {projectLinks.map((proj) => (
                <MenuItem 
                  key={proj.path} 
                  bg="transparent" 
                  style={buttonStyle}
                  _hover={dropdownHoverStyle}
                  onClick={() => window.location.href = proj.path}
                >
                  {proj.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Button variant='ghost' style={buttonStyle} _hover={buttonHoverStyle} onClick={() => handleHomeScroll('contact')}>
            Contact
          </Button>
        </Center>

        <Spacer />

        <Box         
          display={{ base: 'none', md: 'flex' }}
        >
          <ThemeSwitcherButton
            themes={themes}
            onThemeSwitch={onThemeSwitch}
            activeTheme={activeTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </Box>
        
        {/* phone view */}
        <Flex
          display={{ base: 'flex', md: 'none' }}
        >
          <Button
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='ghost'
            style={buttonStyle}
            _hover={buttonHoverStyle}
            onClick={onOpen}
            aria-label="Toggle Navigation"
          />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay backdropFilter='blur(8px)' />
            <DrawerContent
              background={navDrawerBackground}
            >
              <DrawerHeader>          
                <ThemeSwitcherButton
                  themes={themes}
                  onThemeSwitch={onThemeSwitch}
                  activeTheme={activeTheme}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
              </DrawerHeader>
              <DrawerCloseButton 
                color={drawerColor} 
                p='29px'
              />
                <Center
                  h='100%'
                  flexDirection='column'
                  gap='20px'
                  fontFamily={navFont}
                >
                  <Button variant='ghost' style={buttonStyle} _hover={buttonHoverStyle} onClick={() => window.location.href='/'}>Home</Button>
                  <Button variant='ghost' style={buttonStyle} _hover={buttonHoverStyle} onClick={() => handleHomeScroll('Contact')}>Contact</Button>
                  <Text style={projectSubtitle}>Projects</Text>
                  {projectLinks.map(proj => (
                    <Button key={proj.path} variant='ghost' style={buttonStyle} _hover={buttonHoverStyle} onClick={() => window.location.href = proj.path}>{proj.name}</Button>
                  ))}
                </Center>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>      
    </>
  );
};

export default TopNav;
