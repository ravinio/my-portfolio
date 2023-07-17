import * as React from 'react'
import {
  Box, 
  ChakraProvider, 
  theme 
} from '@chakra-ui/react'
import Navbar from './components/topNav'
import Wrapper from './pages/wrapper'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH='100vh'>
      {/* <Navbar /> */}
    </Box>
  </ChakraProvider>
)
