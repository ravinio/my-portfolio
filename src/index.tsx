import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import styles from './styles/global.module.css'

const MyApp = () => {
  const themes = ['Salazar', 'HAL', 'Gengar', 'Moira'];
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
      Salazar: {
        wrapperBackground: '#101819',
        cardBackground: 'rgba(16, 24, 25, 0.25)',
        gradient1: '#2f3e46',
        gradient2: '#52796f',
        gradient3: '#84a98c',
        color: '#cad2c5',
        heading: 'Playfair Display, serif',
        body: 'Plus Jakarta Sans, sans-serif'
      },
      HAL: {
        wrapperBackground: '#F4FDF8',
        cardBackground: 'rgba(179, 174, 153, 0.25)',
        gradient1: '#FFBE95',
        gradient2: '#FF8251',
        gradient3: '#83736B',
        color: '#1B2623',
        heading: 'Space Grotesk, serif',
        body: '"Helvetica Neue", Helvetica, Arial, sans-serif'
      },
      Gengar: {
        wrapperBackground: '#524386',
        cardBackground: 'rgba(197, 197, 208, 0.25)',
        gradient1: '#9D99BA',
        gradient2: '#7A6EA1',
        gradient3: '#2F2162',
        color: '#e3e3eb',
        heading: 'Sulphur Point, sans-serif',
        body: 'Sulphur Point, sans-serif'
      },
      Moira: {
        wrapperBackground: '#121818',
        cardBackground: 'rgba(70, 78, 65, 0.25)',
        gradient1: '#791D22',
        gradient2: '#474F3E',
        gradient3: '#27313A',
        color: '#FFBE6D',
        heading: 'Old Standard TT, serif',
        body: 'Jost, sans-serif'
      },
    }
  });

  
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const themeColor = customTheme.styles[activeTheme].color;

  document.documentElement.style.setProperty('--cursor-color', themeColor);
  
  localStorage.setItem('activeTheme', activeTheme);
}, [activeTheme, customTheme]);

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
      cursor.style.display = 'none';
    }
  }, []);
  
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <div ref={cursorRef} className={styles.customCursor} />
        <ColorModeScript initialColorMode='dark' />
        <App 
          themes={themes} 
          activeTheme={activeTheme} 
          onThemeSwitch={switchTheme} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </BrowserRouter>
    </ChakraProvider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
