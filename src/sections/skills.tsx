import React from 'react'
import { Center, Flex, useTheme } from '@chakra-ui/react'
import SkillTile from '../components/skillTile';
import CSS from '../assets/skillImgs/languages/css.png';
import HTML from '../assets/skillImgs/languages/html.png';
import Javascript from '../assets/skillImgs/languages/javascript.png';
import Typescript from '../assets/skillImgs/languages/typescript.png';
import Bootstrap from '../assets/skillImgs/technologies/bootstrap.png';
import Chakraui from '../assets/skillImgs/technologies/chakraui.png';
import Contentful from '../assets/skillImgs/technologies/contentful.png';
import Materialui from '../assets/skillImgs/technologies/materialui.png';
import Nextjs from '../assets/skillImgs/technologies/nextjs.png';
import ReactIcon from '../assets/skillImgs/technologies/react.png';
import Bitbucket from '../assets/skillImgs/tools-and-softwares/bitbucket.png';
import Figma from '../assets/skillImgs/tools-and-softwares/figma.png';
import Jira from '../assets/skillImgs/tools-and-softwares/jira.png';
import Photoshop from '../assets/skillImgs/tools-and-softwares/photoshop.png';

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

  const languageItems = [
    { src: CSS, label: 'css' },
    { src: HTML, label: 'html' },
    { src: Javascript, label: 'javascript' },
    { src: Typescript, label: 'typescript' },
  ];

  const technologyItems = [
    { src: Bootstrap, label: 'bootstrap' },
    { src: Chakraui, label: 'chakra-ui' },
    { src: Contentful, label: 'contentful' },
    { src: Materialui, label: 'material-ui' },
    { src: Nextjs, label: 'next.js' },
    { src: ReactIcon, label: 'react' },
  ];

  const toolsAndSoftwaresItems = [
    { src: Bitbucket, label: 'bitbucket' },
    { src: Figma, label: 'figma' },
    { src: Jira, label: 'jira' },
    { src: Photoshop, label: 'photoshop' },
  ];

  return (
    <Center 
      id='skills' 
      h='auto' 
      flexDirection='column' 
      gap={{ base: '15px', md: '30px' }}
      p={{ base: '100px 15px', md: '100px 30px'}} 
    >
      <h1 style={sectionHeadingStyle}>my skills</h1>
      <Flex  
        h='auto'
        justifyContent='center'
        gap={{ base: '15px', md: '30px' }} 
        flexWrap='wrap'
      >
        <SkillTile activeTheme={activeTheme} tileTitle="languages" items={languageItems} />
        <SkillTile activeTheme={activeTheme} tileTitle="technologies" items={technologyItems} />
        <SkillTile activeTheme={activeTheme} tileTitle="tools & softwares" items={toolsAndSoftwaresItems} />
      </Flex>
    </Center>
  );
};

export default Skills;
