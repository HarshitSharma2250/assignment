import { Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Text,
    VStack, 
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { BellIcon, CalendarIcon } from "@chakra-ui/icons";
import HemburgurMenu from './HemburgurMenu';




export const NavBar1 = () => {
  return (
    <>
    <Box bg={'gray.100'} pb={'5px'} position={"fixed"} w={'100%'} zIndex={'1001'}>
<Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={[0,0,0,2]} px={["20px",'2px','10px','20px']} >
<Link to='/home' style={{fontWeight:"700",fontSize:"20px"}}><span style={{color:"red"}}>Dash</span>Board</Link>

{/* for big screen */}
<Box display={{base:"none",md:"flex",lg: 'flex', xl: 'flex' }}>
<SearchBar/>
</Box>

<Flex alignItems={'center'} display={{ base:"none",md:"none",lg: 'flex', xl: 'flex' }}>
<Link to='/login'><Button colorScheme="pink" cursor="pointer" >Login </Button> </Link>
         
<Link to='/'>  <Button ml={'5px'} colorScheme="pink" cursor="pointer"  >SignUp</Button></Link>

<HStack spacing={2} ml={'5px'} >
      <HStack spacing={2}>
        <IconButton
          icon={<BellIcon />}
          aria-label="Notifications"
          colorScheme="pink"
          borderRadius="full"
        />
        <IconButton
          icon={<CalendarIcon />}
          aria-label="Calendar"
          colorScheme="pink"
          borderRadius="full"
        />
      </HStack>

      <VStack align="start" spacing={0} ml={'10px'}>
        <Text fontWeight="bold">Tuesday</Text>
        <Text color="blue.400">20/06/2023</Text>
      </VStack>
    </HStack>
   </Flex>
    <Box  display={{ base: 'flex',md:"flex",lg:"none", xl: 'none' }}>
   <HemburgurMenu />
    </Box>
</Box>

 {/* for mobile */}
<Box display={["flex" , "none","none","none"]}  mt={"-5px"} >
<SearchBar/>  
</Box>

</Box>
</>
  )
}
