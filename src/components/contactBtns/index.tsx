import React from 'react';
import { Flex } from '@chakra-ui/react'
import { FiFigma } from 'react-icons/fi';
import { EmailIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import SocialBtn from './socialBtns';

interface SocialBtnProps {
  onThemeSwitch: (theme: string) => void;
  activeTheme: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ContactButtons: React.FC<SocialBtnProps>= ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  return (
    <Flex
        w='100%'
        flexDirection='row'
        gap={{ base: '10px', md: '20px' }}
        flexWrap='wrap'
    >
      <SocialBtn
        activeTheme={activeTheme}
        onThemeSwitch={onThemeSwitch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        icon={<FiFigma />}
        label="Figma Link"
        link="https://figma.com/@ravinoel"
      />
      <SocialBtn
        activeTheme={activeTheme}
        onThemeSwitch={onThemeSwitch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        icon={<EmailIcon />}
        label="Email Button"
        link={`mailto:ravin.noel.io@gmail.com?subject=${encodeURIComponent(
          'Job Opportunity Inquiry / Collaboration Inquiry / Project Inquiry'
        )}&body=${encodeURIComponent('Sick website bro! I am reaching out to discuss...')}`}
      />
      <SocialBtn
        activeTheme={activeTheme}
        onThemeSwitch={onThemeSwitch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        icon={<AiFillGithub />}
        label="Github Link"
        link="https://github.com/ravinio"
      />
      <SocialBtn
        activeTheme={activeTheme}
        onThemeSwitch={onThemeSwitch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        icon={<FaLinkedinIn />}
        label="LinkedIn Link"
        link="http://www.linkedin.com/in/raviniodesigns"
      />
    </Flex>
  );
};

export default ContactButtons;
