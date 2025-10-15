import React from 'react'
import { Center, Flex, useTheme } from '@chakra-ui/react'
import OsmIcon from '../assets/projectCards/icons/osm.svg'
import OsmGif from '../assets/projectCards/gifs/osm.gif'
import ToaIcon from '../assets/projectCards/icons/toa-purple-logo.png'
import ToaGif from '../assets/projectCards/gifs/toa.gif'
import ChasingRavensIcon from '../assets/projectCards/icons/chasingraven.svg'
import ChasingRavensGif from '../assets/projectCards/gifs/chasingravens.gif'
import EscapayIcon from '../assets/projectCards/icons/escapay.png'
import EscapayGif from '../assets/projectCards/gifs/escapay.gif'
import SistermaeGif from '../assets/projectCards/gifs/sistermae.gif'
import ProjectCard from '../components/projectCard'

interface ProjectsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const projects = [
  {
    icon: OsmIcon,
    gif: OsmGif,
    title: 'OneStaff Medical',
    tags: ['UI/UX Design', 'React', 'Figma', 'Branding', 'Contentful'],
    description: ['Medical staffing website rebrand and redesign'],
    page: '/pages/onestaff-medical',
  },
  {
    icon: ToaIcon,
    gif: ToaGif,
    title: 'Omaha Obedience',
    tags: ['User Research', 'Branding', 'HTML/CSS'],
    description: ['Local boarding and dog training'],
    page: '/pages/omaha-obedience',
  },
  {
    icon: ChasingRavensIcon,
    gif: ChasingRavensGif,
    title: 'Chasing Ravens',
    tags: ['UI/UX Design', 'React', 'Contentful'],
    description: ['Personal food blog I hope no one ever reads'],
    page: '/pages/chasing-ravens',
  },
  {
    icon: EscapayIcon,
    gif: EscapayGif,
    title: 'Escapay',
    tags: ['Figma', 'Design', 'Branding'],
    description: ['Figma custom component library and design system'],
    page: '/pages/escapay',
  },
  {
    icon: EscapayIcon, //this needs to change
    gif: SistermaeGif, 
    title: 'Sister M.A.E. Designs',
    tags: ['Figma', 'Design', 'Shopify'],
    description: ['A scalable e-commerce website powered by Shopify for personalized wedding stationary.'],
    page: '/pages/sistermae',
  },
]

const Projects: React.FC<ProjectsProps> = ({
  activeTheme,
  onThemeSwitch,
  onMouseEnter,
  onMouseLeave
}) => {
  const theme = useTheme();

  const sectionHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  return (
    <Center 
      id='projects' 
      h='auto' 
      p={{ base: '50px 15px', md: '100px 30px' }}    
      flexDirection='column' 
      gap={{ base: '15px', md: '30px' }}
    >
      <h1 style={sectionHeadingStyle}>my projects</h1>

      {projects.map((project, idx) => (
        <Flex
          key={project.title}
          direction={{ base: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }}
          gap="30px"
          mb="60px"
          w="100%"
          maxW="1329px"
        >
          <ProjectCard
            activeTheme={activeTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            icon={project.icon}
            gif={project.gif}
            title={project.title}
            tags={project.tags}
            description={project.description}
            page={project.page}
          />
        </Flex>
      ))}
    </Center>
  );
};

export default Projects;
