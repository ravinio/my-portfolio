import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App'
import Picture1 from './assets/bg/salazar.webp'
import Picture2 from './assets/bg/halliwell.webp'
import Picture3 from './assets/bg/wallace.webp'
import Picture4 from './assets/bg/ichabod.webp'
import Picture5 from './assets/bg/watney.webp'
import Picture6 from './assets/bg/gengar.webp'
import styles from './styles/global.module.css'

const MyApp = () => {
  const themes = ['salazar', 'halliwell', 'wallace', 'ichabod', 'watney', 'gengar'];
  const [activeTheme, setActiveTheme] = useState(() => {
    const savedTheme = localStorage.getItem('activeTheme');
    return savedTheme && themes.includes(savedTheme) ? savedTheme : themes[0];
  });

  const switchTheme = (theme: string) => {
    setActiveTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem('activeTheme', activeTheme);
  }, [activeTheme]);

  const customTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#000'
        }
      },
      salazar: {
        wrapperBackground: '#101819',
        gradient1: '#2f3e46',
        gradient2: '#52796f',
        gradient3: '#84a98c',
        cardBackground: 'rgba(16, 24, 25, 0.25)',
        heading: 'Playfair Display, serif',
        body: 'Plus Jakarta Sans, sans-serif',
        fill: '#cad2c5',
        color: '#cad2c5'
      },
      halliwell: {
        wrapperBackground: '#223343',
        gradient1: '#ca5b3d',
        gradient2: '#783843',
        gradient3: '#151F29',
        cardBackground: 'rgba(117, 139, 253, 0.25)',
        cardBackgroundPosition: 'top',
        heading: 'Philosopher, sans-serif',
        body: 'Bellefair, serif',
        color: '#758bfd'
      },
      wallace: {
        wrapperBackground: '#202B31',
        gradient1: '#C1CED7',
        gradient2: '#4f697a',
        gradient3: '#384A57',
        cardBackground: 'rgba(79, 105, 122, 0.25)',
        cardBackgroundPosition: 'center',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.4)',
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
        color: '#f6e706'
      },
      ichabod: {
        wrapperBackground: '#1f1e1e',
        gradient1: '#2A1A1F',
        gradient2: '#764134',
        gradient3: '#792301',
        cardBackground: 'rgba(31, 30, 30, 0.80)',
        heading: 'Beth Ellen, cursive',
        body: 'Gideon Roman, cursive',
        color: '#ff7518'
      },
      watney: {
        wrapperBackground: '#55262A',
        gradient1: '#a42b36',
        gradient2: '#AE8E6D',
        gradient3: '#AE8E6D',
        cardBackground: 'rgba(125, 121, 105, 0.25)',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.24)',
        heading: 'Expletus Sans, cursive',
        body: 'Armata, sans-serif',
        color: '#56e39f'
      },
      gengar: {
        wrapperBackground: '#524386',
        gradient1: '#9D99BA',
        gradient2: '#7A6EA1',
        gradient3: '#1A1423',
        cardBackground: 'rgba(197, 197, 208, 0.25)',
        heading: 'Sulphur Point, sans-serif',
        body: 'Sulphur Point, sans-serif',
        color: '#e3e3eb'
      },
    },
    images: {
      salazar: Picture1,
      halliwell: Picture2,
      wallace: Picture3,
      ichabod: Picture4,
      watney: Picture5,
      gengar: Picture6,
    },
  });

  
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.classList.add(styles.hoverCursor);
    }
  };

  const handleMouseLeave = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.classList.remove(styles.hoverCursor);
    }
  };

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor && isMobileDevice()) {
      cursor.classList.add(styles.hideCursor);
    }
  }, []);
  
  return (
    <ChakraProvider theme={customTheme}>
      <div ref={cursorRef} className={styles.customCursor} />
      <ColorModeScript initialColorMode='dark' />
      <App 
        themes={themes} 
        activeTheme={activeTheme} 
        onThemeSwitch={switchTheme} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </ChakraProvider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
