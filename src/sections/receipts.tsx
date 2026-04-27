import React, { useEffect, useRef, useState } from 'react'
import { Flex, useTheme, VStack } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web'
import ReviewCard from '../components/reviewCard'
import JayneAvatar from '../assets/receipts/Jayne-avatar.png'
import MarcAvatar from '../assets/receipts/Marc-avatar.png'
import MarkAvatar from '../assets/receipts/Mark-avatar.png'
import TomAvatar from '../assets/receipts/Tom-avatar.png'
import VeraAvatar from '../assets/receipts/Vera-avatar.png'

interface ReceiptsProps {
  activeTheme: string;
  onThemeSwitch: (theme: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const reviews = [ 
    {
        avatar: JayneAvatar,
        name: ['Jayne Spottswood'],
        title: ['UX Research & Design Ops Leader'],
        relation: ['Partner in design leadership and team strategy at SITE'],
        linkedin: ['https://www.linkedin.com/in/spottswood/'],
        quote: [
            `Ravin is one of the most endlessly creative and delightful people I have ever worked with. At SITE Technologies, I watched her take on her first Lead Designer role. She executed it with a top level of poise and maturity. She is a natural supervisor who leads not just by authority, but by competence and kindness.`, 
            `She quickly became the visionary behind our new platform's style, architecting a fast and modern Figma Design System from the ground up using Radix and React principles. She bridges the gap between design and front-end engineering seamlessly; development became faster and more consistent under her guidance. She runs with a high quality design vision and executes with precision. If you are looking for a Lead Designer who combines technical rigor with the ability to lift up the room, Ravin is the one.`
        ]
    },
    {
        avatar: MarcAvatar,
        name: ['Marc Schnepper'],
        title: ['Senior UX/UI Designer'],
        relation: ['Direct report on product design team at SITE'],
        linkedin: ['https://www.linkedin.com/in/marcschnepper/'],
        quote: ['I had the pleasure of working with Ravin at Site Technologies. Ravin is an exceptional UX Designer. She has a real talent for creating robust design systems that bring consistency and scalability to any product. She excels at designing intuitive user flows that make complex interactions feel simple and seamless. Her attention to detail, strategic thinking, and collaborative approach consistently elevate both the team and the product. Any team would be lucky to have her expertise and creativity on board.']
    },
    {
        avatar: MarkAvatar,
        name: ['Mark Smith'],
        title: ['Program Manager'],
        relation: ['Product partner during my tenure at OneStaff'],
        linkedin: ['https://www.linkedin.com/in/mcs1/'],
        quote: [
            `I had the amazing pleasure of working closely with Ravin at OneStaff Medical.  She was easily my favorite coworker. We worked together on Project Reboot, a major initiative to completely overhaul legacy software on both the front end and back end. The goal was to move away from an experience that felt stuck in the early 2000s and rebuild it into something modern, intuitive, and visually polished. Which Ravin was central to making that happen.`,  
            `Her Figma designs were exceptional. She created multiple selectable color layouts, clean UI patterns, and a cohesive design system that gave the product a fresh, modern feel. What really set Ravin apart was her ability to both design and build. She could translate her designs directly into working code, which made collaboration incredibly smooth and efficient.`,
            `Ravin is thoughtful, easy to work with, and genuinely invested in building great user experiences. She brought clarity to complex problems and consistently raised the quality of the product. Any team looking for a strong UI/UX designer or front-end developer would be lucky to have her.`
        ]
    },
    {
        avatar: TomAvatar,
        name: ['Tom Zehner'],
        title: ['Senior UX Director'],
        relation: ['My direct manager and leadership mentor at SITE'],
        linkedin: ['https://www.linkedin.com/in/tomzehner/'],
        quote: [
            `I had the pleasure of working with Ravin Io on the UX team, where she served as our Lead UI/UX Designer. Ravin is an incredibly kind, super creative designer who consistently brought positive energy into every meeting and collaboration.`,
            `She led feature design across our product with clarity and confidence, pairing strong creative vision with thoughtful user-centered decision-making. A true Figma master, Ravin was also excellent at presenting her work in a professional, engaging way that moved projects forward.`,  
            `Her promotion to a lead design role was well deserved, and a reflection of both her talent and leadership. I would absolutely love to work with Ravin again and highly recommend her to any team looking for a creative, collaborative design leader.`
        ]
    },
    {
        avatar: VeraAvatar,
        name: ['Vera Huang'],
        title: ['UI/UX & Product Designer'],
        relation: ['Direct report on product design team at SITE'],
        linkedin: ['https://www.linkedin.com/in/verahuangdesign/'],
        quote: [
            'I had the pleasure of working with Ravin as a UX Designer, and she is a fantastic teammate and designer. Ravin played a key role in creating a thorough and well-structured design system that ensured strong consistency and scalability across the product. She consistently brought thoughtful, creative ideas to the table and had a great ability to solve complex design problems with clarity and intention.',
            'Ravin is incredibly hardworking and highly skilled, especially in Figma, where her expertise truly shines. She also communicates design decisions clearly and confidently, making collaboration with developers and stakeholders smooth and productive. Beyond her technical strengths, Ravin is genuinely sweet, easy to work with, and a joy to have on the team. Any design team would be lucky to work with her.'
        ]
    }
]

const Receipts: React.FC<ReceiptsProps> = ({ activeTheme, onThemeSwitch, onMouseEnter, onMouseLeave }) => {
  const theme = useTheme();

  const backgroundStyle = {
    background: theme.styles[activeTheme].cardBackground,
    boxShadow: theme.styles[activeTheme].boxShadow
  }

  const subHeadingStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].heading,
  };

  const bodyStyle = {
    color: theme.styles[activeTheme].color,
    fontFamily: theme.styles[activeTheme].body,
  };

  const [boxInView, setBoxInView] = useState(false);
  const boxRef = useRef(null);

  const boxAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: boxInView ? 1 : 0, transform: boxInView ? 'scale(1)' : 'scale(0.5)' },
    config: {
      mass: 3,
      friction: 50,
      tension: 50,
    },
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const boxObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBoxInView(true);
      }
    }, observerOptions);

    if (boxRef.current) {
      boxObserver.observe(boxRef.current);
    }

    return () => {
      boxObserver.disconnect();
    };
  }, []);

  return (
    <VStack 
      spacing="80px" 
      py="100px" 
      px={{ base: '16px', md: '24px' }} 
      align="center"
      id='receipts'
      minH="100vh"
    >
        {/* A header */}
        <animated.div ref={boxRef} style={boxAnimation}>
            <Flex 
                style={backgroundStyle}
                width={{ base: '100%', md: '768px' }}
                alignItems='left'
                flexDirection='column' 
                gap={{ base: '16px', md: '24px' }}
                padding={{ base: '16px', md: '24px' }}
                borderRadius='lg'
            >
                <h3 style={subHeadingStyle}>receipts</h3>
                <p style={bodyStyle}>
                    I’ve always believed that the best products are a byproduct of healthy, high-performing teams. These are the receipts of my professional journey—the testimonials from peers and stakeholders who have seen my process firsthand. 
                </p>
                <p style={bodyStyle}>
                    From architecting design systems, navigating complex research, and empowering fellow designers to do their best work. These voices confirm the standard of quality and the human-centric approach I bring to every project.
                </p>
            </Flex>
        </animated.div>

        {/* The actual receipts */}
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            activeTheme={activeTheme}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            avatar={review.avatar}
            name={review.name}
            title={review.title}
            relation={review.relation}
            linkedin={review.linkedin}
            quote={review.quote}
          />
      ))}
    </VStack>
  );
};

export default Receipts;