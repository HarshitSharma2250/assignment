import { Box, ChakraProvider, Text } from '@chakra-ui/react'
import React from 'react'

export const Logo = () => {
  return (
    <ChakraProvider>
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column" 
      mt={'20px'}
    >
      <Text
        fontSize={["xl","xl","2xl","3xl" ]}           // Font size
        fontWeight="bold"         // Bold text
        color="#D0FF4F"           // Text color to match the neon green
        fontFamily="'Times New Roman', Times, serif" // Font family to match the image
        letterSpacing="-0.05em"   // Adjust letter spacing
ml={'70px'}
      >
        Ditch
      </Text>
      <Text
        fontSize={["xl","xl","2xl","3xl" ]}           // Font size
        fontWeight="bold"         // Bold text
        color="#D0FF4F"           // Text color to match the neon green
        fontFamily="'Times New Roman', Times, serif" // Font family to match the image
        letterSpacing="-0.05em"   // Adjust letter spacing
        ml={'90px'}
        mt={['-20px']}
      >
        Dollar
        <Box as="span" fontSize="10px" verticalAlign="super" ml={'5px'}>®</Box> 
      </Text>
    </Box>
  </ChakraProvider>
  )
}
