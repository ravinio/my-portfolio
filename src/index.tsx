import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App'
import Picture1 from './assets/bg/salazar.webp'
import Picture2 from './assets/bg/halliwell.webp'
import Picture3 from './assets/bg/wallace.webp'
import Picture4 from './assets/bg/ichabod.webp'
import Picture5 from './assets/bg/watney.webp'
import Picture6 from './assets/bg/gengar.webp'

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
          backgroundImage: Picture1,
          backgroundRepeat: 'no-reapeat',
          backgroundAttachment: 'fixed'
        },
      },
      salazar: {
        background: 'rgba(16, 24, 25, 0.80)',
        heading: 'Playfair Display, serif',
        body: 'Plus Jakarta Sans, sans-serif',
        fill: '#cad2c5',
        color: '#cad2c5',
        navColor: '#cad2c5',
        titleColor: '#cad2c5',
      },
      halliwell: {
        background: 'rgba(117, 139, 253, 0.60)',
        backgroundPosition: 'top',
        heading: 'Philosopher, sans-serif',
        body: 'Bellefair, serif',
        fill: '#758bfd',
        color: '#223343',
        navColor: '#758bfd',
        titleColor: '#758bfd'
      },
      wallace: {
        background: 'rgba(79, 105, 122, 0.80)',
        backgroundPosition: 'center',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.4)',
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
        fill: '#f6e706',
        color: '#f6e706',
        navColor: '#f6e706',
        titleColor: '#f6e706'
      },
      ichabod: {
        background: 'rgba(31, 30, 30, 0.80)',
        heading: 'Beth Ellen, cursive',
        body: 'Gideon Roman, cursive',
        color: '#ff7518',
        navColor: '#1f1e1e',
        titleColor: '#ff7518'
      },
      watney: {
        background: 'rgba(125, 121, 105, 0.60)',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.24)',
        heading: 'Expletus Sans, cursive',
        body: 'Armata, sans-serif',
        color: '#56e39f',
        navColor: '#56e39f',
        titleColor: '#56e39f'
      },
      gengar: {
        background: 'rgba(197, 197, 208, 0.50)',
        heading: 'Sulphur Point, sans-serif',
        body: 'Sulphur Point, sans-serif',
        color: '#524386',
        navColor: '#e3e3eb',
        titleColor: '#e3e3eb'
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
  
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode='dark' />
      <App themes={themes} activeTheme={activeTheme} onThemeSwitch={switchTheme} />
    </ChakraProvider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
