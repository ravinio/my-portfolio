import React from 'react'
import { Center, Grid, Link, useTheme } from '@chakra-ui/react'
import OsmIcon from '../assets/projects/icons/osm.svg'
import OsmGif from '../assets/projects/gifs/osm.gif'
import ToaIcon from '../assets/projects/icons/toa-purple-logo.png'
import ToaGif from '../assets/projects/gifs/toa.gif'
import ChasingRavensIcon from '../assets/projects/icons/chasingraven.svg'
import ChasingRavensGif from '../assets/projects/gifs/chasingravens.gif'
import EscapayIcon from '../assets/projects/icons/escapay.png'
import EscapayGif from '../assets/projects/gifs/escapay.gif'
import ProjectCard from '../components/projectTiles'

interface ProjectsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave  }) => {
  const theme = useTheme();

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
        <ProjectCard
          activeTheme={activeTheme}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={OsmIcon}
          gif={OsmGif}
          title='OneStaff Medical'
          description={(
            <>
              As the UI/UX Designer at OneStaff Medical, 
              I created a complete overhaul of their website, both internally and externally.
              By leveraging modern design principles and in depth user research, 
              I designed and built many user experience enhancing features such as a fully mobile friendly website 
              and a consistent design system, resulting in heightened user engagement and an enhanced overall experience.
              <br />
              Check out how OneStaff Medical used to look before they hired me in 2022 using the Wayback Machine Website{' '}
              <Link
                textDecor='underline' 
                href='https://web.archive.org/web/20201101004536/https://onestaffmedical.com/osmhome.aspx'
                isExternal
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                target='_blank'
              >
                here
              </Link>
              .
            </>
          )}
          websiteUrl='https://onestaffmedical.com/'
        />
        <ProjectCard
          activeTheme={activeTheme}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={ToaIcon}
          gif={ToaGif}
          title='Time Out Acres'
          description={(
            <>
              This website was built for a local client that boards 
              and trains dogs. As they embarked on their online journey, 
              they entrusted me with the task of not only establishing 
              their web presence but also revitalizing their entire 
              brand identity. This dynamic website seamlessly integrates 
              engaging YouTube videos, offering valuable insights into their services. 
              Additionally, a user-friendly contact form allows prospective clients 
              to effortlessly reach out and inquire about the services they provide.
            </>
          )}
          websiteUrl='https://www.timeoutacres.com/'
        />
        <ProjectCard
          activeTheme={activeTheme}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={ChasingRavensIcon}
          gif={ChasingRavensGif}
          title='Chasing Ravens'
          description={(
            <>
              This is a food blog built to showcase my love for both design and 
              gastronomy. Meticulously handcrafted using the combination of 
              Contentful API, React, and SCSS. The site contains an enticing home 
              page, an informative about page, and a captivating blog section, 
              all wrapped in a custom brand and vibe.
            </>
          )}
          websiteUrl='https://www.chasingravensblog.com/'
        />
        <ProjectCard
          activeTheme={activeTheme}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          icon={EscapayIcon}
          gif={EscapayGif}
          title='Escapay'
          description={(
            <>
              This Figma file features a brand guide and prototype for a fictitious 
              travel company named Escapay. It covers the company’s entire identity 
              including their logo, fonts, color pallet, and images.
              The prototype highlights the different locations that users can scroll 
              through and save to their favorites list. They can then view their 
              favorite list and explore and compare the locations they wish to visit.
            </>
          )}
          websiteUrl="https://www.figma.com/file/l4hnTSAnOldzyQbEd9AFDS/Escapay?type=design&node-id=0%3A1&mode=design&t=ZuBeaukh0HrHxhZo-1"
        />
      </Grid>
    </Center>
  );
};

export default Projects;
