import React from 'react'
import { Center, Flex, useTheme } from '@chakra-ui/react'
import SkillTile from '../components/skillTile';

interface SkillsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const sectionHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const designAndLeadership = ['Design Systems Architecture', 'UX Auditing & Strategy', 'Handoff & Developer Empathy', 'Team Leadership & Mentorship', 'Inofrmation Architecture', 'Accessibility (WCAG)', 'Cross-Functional Collaboration'];

  const aiResearch = ['AI-Native UX & Interaction Design', 'Generative Workflows & Tooling', 'Competitive & Qualitative Research', 'User Personas & Journey Mapping', 'Data-Driven Decision Making'];

  const industryTools = ['Figma (Advanced Variables & Prototyping)', 'React & Front-End Architecture', 'TypeScript & Tailwind CSS', 'Adobe Creative Suite (Photoshop, Illustrator)', 'Asana, Jira, & Linear'];

  return (
    <Center 
      id='skills' 
      h='auto' 
      flexDirection='column' 
      gap={{ base: '16px', md: '24px' }}
      p={{ base: '100px 16px', md: '100px 24px'}} 
    >
      <h1 style={sectionHeadingStyle}>my skills</h1>
      <Flex  
        h='auto'
        justifyContent='center'
        flexDirection={{ base: 'column', md: 'row' }} 
        gap={{ base: '24px', md: '24px' }} 
        flexWrap={{ base: 'wrap', md: 'nowrap' }} 
        alignItems='start'
        maxW='1212px'
      >
        <SkillTile activeTheme={activeTheme} tileTitle="strategic design & leadership" tags={designAndLeadership} />
        <SkillTile activeTheme={activeTheme} tileTitle="ai & product innovation" tags={aiResearch} />
        <SkillTile activeTheme={activeTheme} tileTitle="engineering & industry tools" tags={industryTools} />
      </Flex>
    </Center>
  );
};

export default Skills;
