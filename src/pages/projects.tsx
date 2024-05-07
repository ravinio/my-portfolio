import React from 'react'
import { Center, Grid, GridItem, useTheme } from '@chakra-ui/react'
import TimeOutAcres from '../components/projectTiles/timeOutAcres'
import ChasingRavens from '../components/projectTiles/chasingravens'
// import TylerLeePhotography from '../components/projectTiles/tylerLeePhotography'
import Escapay from '../components/projectTiles/escapay'
import OSM from '../components/projectTiles/onestaffmedical'

interface ProjectsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave  }) => {
  const theme = useTheme();

  const switchTheme = () => {
    const themeIndex = theme.indexOf(activeTheme);
    const nextThemeIndex = (themeIndex + 1) % theme.length;
    const nextTheme = theme[nextThemeIndex];
    onThemeSwitch(nextTheme);
  };

  const sectionHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  return (
    <Center 
      id='projects' 
      h='auto' 
      p={{ base: '50px 15px', md: '100px 30px'}}    
      flexDirection='column' 
      gap={{ base: '15px', md: '30px' }}
    >
      <h1 style={sectionHeadingStyle}>my projects</h1>
      <Grid  
        h='auto'
        maxWidth='1329.34px'
        py='30px'
        justifyContent='center'
        flexWrap='wrap'
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      > 
        {/* 
          future Ravin note:
          to make another gif for a new project, 
          visit https://imgflip.com/gif-maker 
          */}
        <GridItem w='100%'>
          <OSM 
            activeTheme={activeTheme} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} 
          />
        </GridItem>     
        <GridItem w='100%'>       
          <TimeOutAcres 
            activeTheme={activeTheme} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </GridItem>  
        <GridItem w='100%'>
          <ChasingRavens 
            activeTheme={activeTheme} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </GridItem>          
        <GridItem w='100%'>
          <Escapay 
            activeTheme={activeTheme} 
            onThemeSwitch={switchTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </GridItem>  
        {/* <GridItem w='100%'>
          <TylerLeePhotography activeTheme={activeTheme} onThemeSwitch={switchTheme} />
        </GridItem>   */}
      </Grid>
    </Center>
  );
};

export default Projects;
