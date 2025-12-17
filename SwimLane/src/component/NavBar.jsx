import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { FormData } from './FormData'

export const NavBar = () => {
  return (
 <>
 <Box>
<Heading mt={"20px"} textAlign={'center'} mb={"3rem"}>
    SWIMLANE
</Heading>

<Flex justifyContent={"flex-end"} alignItems={'center'}
mr={"1rem"}
my={"1rem"}
>
    <FormData/>
</Flex>


 </Box>
 
 
 
 </>
  )
}
