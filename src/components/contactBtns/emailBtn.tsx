import React from 'react'
import { Button, useTheme } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

interface EmailBtnProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
}

const EmailBtn: React.FC<EmailBtnProps> = ({ activeTheme, onThemeSwitch }) => {
  const theme = useTheme();

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };
  
  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const email = 'ravin.noel.io@gmail.com'
  const subject = 'Job Opportunity Inquiry / Collaboration Inquiry / Project Inquiry'
  const body = 'Sick website bro! I am reaching out to discuss...'

  return (
    <Button 
        style={bodyStyle} 
        variant='outline'
        borderRadius='30px'
        fontSize='sm'
        leftIcon={<EmailIcon />}
        onClick={handleClick}
    >
        /ravin.noel.io@gmail.com
    </Button>
  );
};

export default EmailBtn;