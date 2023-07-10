import { useState } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import ThemeSwitcherButton from "./components/themeSwitcher";
import Wrapper from "./pages/wrapper"
import Picture1 from "./assets/bg/salazar.png";
import Picture2 from "./assets/bg/wallace.png";
import Picture3 from "./assets/bg/ichabod.png";
import Picture4 from "./assets/bg/pemberly.png";
import Picture5 from "./assets/bg/gengar.png";

const MyApp = () => {
  const themes = ['salazar', 'wallace', 'ichabod', 'pemberly', 'gengar'];
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  const switchTheme = (theme: string) => {
    setActiveTheme(theme);
  };

  const customTheme = extendTheme({
    styles: {
      salazar: {
        background: 'rgba(16, 24, 25, 0.80)',
        heading: 'Playfair Display, serif',
        body: 'Plus Jakarta Sans, sans-serif',
        fill: '#cad2c5',
        color: '#cad2c5'
      },
      wallace: {
        background: 'rgba(79, 105, 122, 0.80)',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.4)',
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
        fill: '#f6e706',
        color: '#f6e706'
      },
      ichabod: {
        background: 'rgba(31, 30, 30, 0.80)',
        heading: 'Beth Ellen, cursive',
        body: 'Newsreader, serif',
        color: '#ff7518',
      },
      pemberly: {
        background: 'rgba(60, 131, 109, 0.80)',
        boxShadow: '0px 4px 10px 0px rgba(54, 54, 54, 0.24)',
        heading: 'Petit Formal Script, cursive',
        body: 'Aref Ruqaa Ink, serif',
        color: '#eda19f',
      },
      gengar: {
        background: 'rgba(197, 197, 208, 0.50)',
        heading: 'Sulphur Point, sans-serif',
        body: 'Sulphur Point, sans-serif',
        color: '#e3e3eb',
      },
    },
    images: {
      salazar: Picture1,
      wallace: Picture2,
      ichabod: Picture3,
      pemberly: Picture4,
      gengar: Picture5,
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode="light" />
      <ThemeSwitcherButton themes={themes} onThemeSwitch={switchTheme} activeTheme={activeTheme} />
      <Wrapper activeTheme={activeTheme} onThemeSwitch={switchTheme} />
    </ChakraProvider>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
