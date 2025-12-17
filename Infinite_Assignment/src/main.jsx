import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
const customTheme = extendTheme({
  styles: {
    global: {
      // Global styles for body
      body: {
        fontSize: '14px', // Set the global font size
        // You can add other global styles here
        lineHeight: 'base',
        fontFamily: 'body',
      },
    },
  },
});




createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={customTheme}>
    <App />
</ChakraProvider>

)
