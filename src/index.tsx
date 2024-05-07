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
        cardBackground: 'rgba(16, 24, 25, 0.25)',
        gradient1: '#2f3e46',
        gradient2: '#52796f',
        gradient3: '#84a98c',
        color: '#cad2c5',
        heading: 'Playfair Display, serif',
        body: 'Plus Jakarta Sans, sans-serif'
      },
      halliwell: {
        wrapperBackground: '#223343',
        cardBackground: 'rgba(117, 139, 253, 0.25)',
        gradient1: '#ca5b3d',
        gradient2: '#783843',
        gradient3: '#151F29',
        color: '#758bfd',
        heading: 'Philosopher, sans-serif',
        body: 'Bellefair, serif'
      },
      wallace: {
        wrapperBackground: '#202B31',
        cardBackground: 'rgba(79, 105, 122, 0.25)',
        gradient1: '#C1CED7',
        gradient2: '#4f697a',
        gradient3: '#384A57',
        color: '#f6e706',
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif'
      },
      ichabod: {
        wrapperBackground: '#1f1e1e',
        cardBackground: 'rgba(31, 30, 30, 0.80)',
        gradient1: '#2A1A1F',
        gradient2: '#764134',
        gradient3: '#792301',
        color: '#ff7518',
        heading: 'Beth Ellen, cursive',
        body: 'Gideon Roman, cursive',
      },
      watney: {
        wrapperBackground: '#201C18',
        cardBackground: 'rgba(86, 227, 159, 0.15)',
        gradient1: '#452225',
        gradient2: '#4F3523',
        gradient3: '#51483F',
        color: '#56e39f',
        heading: 'Expletus Sans, cursive',
        body: 'Armata, sans-serif'
      },
      gengar: {
        wrapperBackground: '#524386',
        cardBackground: 'rgba(197, 197, 208, 0.25)',
        gradient1: '#9D99BA',
        gradient2: '#7A6EA1',
        gradient3: '#2F2162',
        color: '#e3e3eb',
        heading: 'Sulphur Point, sans-serif',
        body: 'Sulphur Point, sans-serif'
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
