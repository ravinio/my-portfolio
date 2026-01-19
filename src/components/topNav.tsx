import React, { useState, useEffect, useRef } from 'react';
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
  Portal,
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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    
    const updateScroll = () => {
      if (!scrollContainer) return;
      
      const currentScrollY = scrollContainer.scrollTop;

      setIsScrolled(currentScrollY > 50);

      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
      
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const middleNavStyle = {
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out, background 0.3s ease',
    transform: isVisible ? 'translateY(0)' : 'translateY(-120%)',
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' : 'none',    
    padding: '4px 12px',
    borderRadius: '100px',
    background: isScrolled ? theme.styles[activeTheme]?.cardBackground : 'transparent',
    backdropFilter: isScrolled ? 'blur(15px)' : 'none'
  };

  const navFont = theme.styles[activeTheme].body
  const color = theme.styles[activeTheme]?.color
  const drawerColor = theme.styles[activeTheme]?.color
  
  const navDrawerBackground = { 
    background: theme.styles[activeTheme]?.cardBackground,
    backdropFilter: 'blur(8px)'
  }

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
        position='fixed' 
        top='0' 
        left='0' 
        width='100vw' 
        p={{ base: '16px', md: '16px 24px' }}
        alignItems='center'
        zIndex='1000'
        pointerEvents='none'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Box pointerEvents='auto' cursor='pointer'>
          <a href='/'>
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
        </Box>

        <Spacer />

        {/* desktop view */}
        <Center 
          display={{ base: 'none', md: 'flex' }}
          height='fit-content'
          gap='20px'
          sx={middleNavStyle}
          pointerEvents='auto'
        >
          <Button 
            variant='ghost' 
            borderRadius='full' 
            style={buttonStyle} 
            transition='background 1s ease, transform 1s ease'
            _hover={{
              ...buttonHoverStyle,
              transform: 'translateY(-3px)',
              boxShadow: 'sm'
            }} 
            onClick={() => window.location.href='/'}
          >
            Home
          </Button>

          <Menu isLazy>
            <MenuButton 
              as={Button} 
              variant='ghost' 
              borderRadius='full'
              sx={buttonStyle}
              rightIcon={<ChevronDownIcon />} 
              transition='background 1s ease, transform 1s ease'
              _hover={{
                ...buttonHoverStyle,
                transform: 'translateY(-3px)',
                boxShadow: 'sm'
              }} 
              _active={buttonHoverStyle}
            >
              Projects
            </MenuButton>
            <Portal>
              <MenuList style={navDrawerBackground} border='none' boxShadow='xl'>
                {projectLinks.map((proj) => (
                  <MenuItem 
                    key={proj.path} 
                    bg='transparent' 
                    style={buttonStyle}
                    _hover={dropdownHoverStyle}
                    onClick={() => window.location.href = proj.path}
                  >
                    {proj.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Portal>
          </Menu>

          <Button 
            variant='ghost' 
            borderRadius='full' 
            style={buttonStyle} 
            transition='background 1s ease, transform 1s ease'
            _hover={{
              ...buttonHoverStyle,
              transform: 'translateY(-3px)',
              boxShadow: 'sm'
            }} 
            onClick={() => handleHomeScroll('contact')}
          >
            Contact
          </Button>
        </Center>

        <Spacer />

        <Box         
          display={{ base: 'none', md: 'flex' }}
          pointerEvents='auto'
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
          pointerEvents='auto' 
          cursor='pointer'
        >
          <Button
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='ghost'
            background='none'
            borderRadius="full"
            style={buttonStyle}
            transition='background 1s ease, transform 1s ease'
            _hover={{
              ...buttonHoverStyle,
              transform: 'translateY(-3px)',
              boxShadow: 'sm'
            }} 
            onClick={onOpen}
            aria-label='Toggle Navigation'
          />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay backdropFilter='blur(12px)' />
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
                borderRadius='full'
                transition='background 1s ease, transform 1s ease'
                _hover={{
                  ...buttonHoverStyle,
                  transform: 'translateY(-3px)',
                  boxShadow: 'sm'
                }} 
                p='20px'
                mt='6px'
              />
                <Center
                  h='100%'
                  flexDirection='column'
                  gap='20px'
                  fontFamily={navFont}
                >
                  <Button 
                    variant='ghost' 
                    style={buttonStyle} 
                    borderRadius='full'
                    transition='background 1s ease, transform 1s ease'
                    _hover={{
                      ...buttonHoverStyle,
                      transform: 'translateY(-3px)',
                      boxShadow: 'sm'
                    }} 
                    onClick={() => window.location.href='/'}
                  >
                    Home
                  </Button>
                  <Button 
                    variant='ghost' 
                    style={buttonStyle} 
                    borderRadius='full'
                    transition='background 1s ease, transform 1s ease'
                    _hover={{
                      ...buttonHoverStyle,
                      transform: 'translateY(-3px)',
                      boxShadow: 'sm'
                    }} 
                    onClick={() => handleHomeScroll('Contact')}
                  >
                    Contact
                  </Button>
                  <Text style={projectSubtitle}>Projects</Text>
                  {projectLinks.map(proj => (
                    <Button 
                      key={proj.path} 
                      variant='ghost' 
                      style={buttonStyle} 
                      borderRadius='full'
                      transition='background 1s ease, transform 1s ease'
                      _hover={{
                        ...buttonHoverStyle,
                        transform: 'translateY(-3px)',
                        boxShadow: 'sm'
                      }} 
                      onClick={() => window.location.href = proj.path}
                    >
                      {proj.name}
                    </Button>
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
