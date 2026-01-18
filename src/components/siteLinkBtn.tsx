import React from 'react';
import { Button, Box, Flex, Icon, Link, Text, useDisclosure, useTheme } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ButtonLinkProps {
    activeTheme: string;
    siteLink: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const ButtonLinK: React.FC<ButtonLinkProps> = ({ activeTheme, siteLink, onMouseEnter, onMouseLeave }) => {
    const theme = useTheme();
    const { onOpen, onClose, isOpen } = useDisclosure();

    const widthTransition = 'width 0.3s ease-in-out';
    const textOpacityTransition = 'opacity 0.2s ease-in-out 0.1s';

    const buttonStyle = {
        background: "#ffffff",
        color: theme.styles[activeTheme].gradient3,
        cursor: 'none'
    };

    return (
        <Box
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            width={isOpen ? '120px' : '44px'}
            height="44px"
            borderRadius="10px"
            overflow="hidden"
            transition={widthTransition}
            cursor="pointer"
            {...ButtonLinK} 
        >
            <Link
                textDecor='none' 
                href={siteLink}
                isExternal
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                target='_blank'
            >
                <Button
                    width="100%"
                    height="100%"
                    style={buttonStyle}
                    borderRadius="10px"
                    p={0}
                >
                    <Flex 
                        align="center" 
                        justify="flex-start"
                        width="100%"
                        px={3}
                    >
                        <Icon as={ExternalLinkIcon} w={6} h={6} mr={isOpen ? 3 : 1} />
                        <Text
                            display={isOpen ? 'block' : 'none'} 
                            opacity={isOpen ? 1 : 0} 
                            whiteSpace="nowrap"
                            fontWeight="bold"
                            transition={textOpacityTransition}
                            pointerEvents="none" 
                            flexShrink={0}
                        >
                            visit site
                        </Text>
                    </Flex>
                </Button>
            </Link>
        </Box>
    );
};

export default ButtonLinK;