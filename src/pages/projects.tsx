import React from 'react'
import { Center, Flex, useTheme } from '@chakra-ui/react'
import OsmIcon from '../assets/projects/icons/osm.svg'
import OsmGif from '../assets/projects/gifs/osm.gif'
import ToaIcon from '../assets/projects/icons/toa-purple-logo.png'
import ToaGif from '../assets/projects/gifs/toa.gif'
import ChasingRavensIcon from '../assets/projects/icons/chasingraven.svg'
import ChasingRavensGif from '../assets/projects/gifs/chasingravens.gif'
import EscapayIcon from '../assets/projects/icons/escapay.png'
import EscapayGif from '../assets/projects/gifs/escapay.gif'
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
    websiteUrl: 'https://onestaffmedical.com/',
  },
  {
    icon: ToaIcon,
    gif: ToaGif,
    title: 'Omaha Obedience',
    tags: ['User Research', 'Branding', 'HTML/CSS'],
    description: ['Local boarding and dog training'],
    websiteUrl: 'https://www.timeoutacres.com/',
  },
  {
    icon: ChasingRavensIcon,
    gif: ChasingRavensGif,
    title: 'Chasing Ravens',
    tags: ['UI/UX Design', 'React', 'Contentful'],
    description: ['Personal food blog I hope no one ever reads'],
    websiteUrl: 'https://www.chasingravensblog.com/',
  },
  {
    icon: EscapayIcon,
    gif: EscapayGif,
    title: 'Escapay',
    tags: ['Figma', 'Design', 'Branding'],
    description: ['Figma custom component library and design system'],
    websiteUrl: 'https://www.figma.com/file/l4hnTSAnOldzyQbEd9AFDS/Escapay',
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
            websiteUrl={project.websiteUrl}
          />
        </Flex>
      ))}
    </Center>
  );
};

export default Projects;
