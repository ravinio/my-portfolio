import React from "react"
import { Box, Button, Center, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Spacer, useDisclosure, useTheme } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeSwitcherButton from '../components/themeSwitcher'

interface TopNavProps {
  themes: string[];
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
}

const TopNav: React.FC<TopNavProps> = ({ themes, activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  // const switchTheme = () => {
  //   const themeIndex = themes.indexOf(activeTheme);
  //   const nextThemeIndex = (themeIndex + 1) % themes.length;
  //   const nextTheme = themes[nextThemeIndex];
  //   onThemeSwitch(nextTheme);
  // };

  const navColor = theme.styles[activeTheme]?.navColor
  const drawerColor = theme.styles[activeTheme]?.color
  const navDrawerBackground = theme.styles[activeTheme]?.background

  const buttonHoverStyle = {
    background: theme.styles[activeTheme].background,
    boxShadow: theme.styles[activeTheme].boxShadow
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact']
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderNavLink = (content: string) => {

    const scrollId = `${content.toLocaleLowerCase()}`
    
    const handleClickNav = () => {
      onClose(); 
      setTimeout(() => {
        const targetElement = document.getElementById(scrollId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    };

    return (
      <ul key={content}>
        <Button 
          onClick={handleClickNav}
          color={{ base: drawerColor, sm: navColor }}
          variant='ghost'
          fontWeight='400'
          _hover={buttonHoverStyle}
        >
          {content}
        </Button>
      </ul>
    )
  }

  // const [navbar, setNavbar] = useState(false)
    
  // Change Color of Navbar    
  // const changeBackground = () => {
  //     if(window.scrollY >= 100) {
  //         setNavbar(true)
  //     }
  //     else {
  //         setNavbar(false)
  //     }
  // }

  // window.addEventListener("scroll", changeBackground)

  //const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* desktop view */}
      <Flex 
        position='sticky' 
        top='0' 
        left='0' 
        width='100vw' 
        p={{ base: '15px', md: '15px 30px' }}
        mx={{ base: '-15px', md: '-30px' }}
        alignItems='center'
        zIndex='100'
        // className={navbar ? styles.navbarActive : styles.navbar}
      >
        <svg
          width='57px'
          height='57px'
          viewBox='0 0 400 400'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M216 154.5C216 188.466 188.466 216 154.5 216C120.534 216 93 188.466 93 154.5C93 120.534 120.534 93 154.5 93C188.466 93 216 120.534 216 154.5Z'
            fill={navColor}
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M400 200C400 310.457 310.457 400 200 400C89.5431 400 0 310.457 0 200C0 151.757 17.0812 107.503 45.5257 72.9568C28.857 95.4721 19 123.335 19 153.5C19 228.335 79.6654 289 154.5 289C229.335 289 290 228.335 290 153.5C290 78.6654 229.335 18 154.5 18C125.39 18 98.4241 27.1795 76.3389 42.8017C110.37 15.9942 153.317 0 200 0C310.457 0 400 89.5431 400 200ZM301 316C320.33 316 336 305.703 336 293C336 280.297 320.33 270 301 270C281.67 270 266 280.297 266 293C266 305.703 281.67 316 301 316Z'
            fill={navColor}
          />
        </svg>

        <Spacer />

        <Center 
          display={{ base: 'none', md: 'flex' }}
          height='fit-content'
          color={navColor}
          gap='20px'
        >
          {navLinks.map(nav => renderNavLink(nav))}
        </Center>

        <Spacer />

        <Box         
          display={{ base: 'none', md: 'flex' }}
        >
          <ThemeSwitcherButton
            themes={themes}
            onThemeSwitch={onThemeSwitch}
            activeTheme={activeTheme}
          />
        </Box>
        
        {/* phone view */}
        <Flex
          display={{ base: 'flex', md: 'none' }}
        >
          <Button
            as={IconButton}
            icon={<HamburgerIcon />}
            background='none'
            color={navColor}
            variant='ghost'
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay backdropFilter='blur(5px)' />
            <DrawerContent
              background={navDrawerBackground}
            >
              <DrawerHeader>          
                <ThemeSwitcherButton
                  themes={themes}
                  onThemeSwitch={onThemeSwitch}
                  activeTheme={activeTheme}
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
                >
                  {navLinks.map(nav => renderNavLink(nav))}
                </Center>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>      
    </>
  );
};

export default TopNav;
