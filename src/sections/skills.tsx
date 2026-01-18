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

  const designAndLeadership = ['Design Systems', 'UX Auditing', 'Handoff Documentation', 'Team Leadership & Mentorship', 'Inofrmation Architecture', 'Accessibility (WCAG)', 'Rapid Prototyping', 'Cross-Functional Collaboration'];

  const aiResearch = ['Google NotebookLM (for synthesizing research)', 'Competitive Analysis', 'User Personas', 'Data-Driven Decision Making'];

  const industryTools = ['Figma (Advanced Prototyping/Variables)', 'Adobe Creative Suite (Photoshop, Illustrator)', 'Jira/Confluence'];

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
        <SkillTile activeTheme={activeTheme} tileTitle="ai & research" tags={aiResearch} />
        <SkillTile activeTheme={activeTheme} tileTitle="industry standard tools" tags={industryTools} />
      </Flex>
    </Center>
  );
};

export default Skills;
