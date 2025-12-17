import React from "react";
import { Box, Heading, Text, Flex, Stack, Grid } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

export const Master_open = () => {
  return (
    <Box >
      {/* Trading Accounts Section */}
      <Box  p={6} py={4} boxShadow='md' rounded='md'>
        <Text color={'gray.500'} fontWeight={500}>Trading Accounts</Text>

        <Stack spacing="3" mt={3}>
          <Box bg="gray.20" p="3" borderRadius="md" boxShadow='xs'>
            <Text mb="3" fontWeight={600}>Master Account</Text>
          <Flex alignItems={'center'}>
          <Text bg={'gray.100'} borderRadius={'25px'} px={3} >CTrader</Text>
          <Text color={'gray.500'} fontSize={'16px'} ml={'7px'}>#273728</Text>
          </Flex>
         <Flex justifyContent={'space-between'} alignItems={'center'}>
         <Flex alignItems={'center'} gap={'10px'}>
            <Text fontSize="2xl" fontWeight="bold" opacity={.8}>0.00 </Text>
            <Text fontSize="l" color={'gray.700'} fontWeight={600}>USD</Text>
            </Flex>
            <FiArrowUpRight fontSize={'20px'} fontWeight={700}/>
         </Flex>
          </Box>

          <Box bg="gray.20" p="3" borderRadius="md" boxShadow='xs'>
            <Text fontSize="sm" mb="3" fontWeight={600}>Master Account</Text>
          <Flex alignItems={'center'}>
          <Text bg={'gray.100'} borderRadius={'25px'} px={3} >CTrader</Text>
          <Text color={'gray.500'} fontSize={'16px'} ml={'7px'}>#273728</Text>
          </Flex>
         <Flex justifyContent={'space-between'} alignItems={'center'}>
         <Flex alignItems={'center'} gap={'10px'}>
            <Text fontSize="2xl" fontWeight="bold" opacity={.8}>0.00 </Text>
            <Text color={'gray.700'} fontWeight={600}>USD</Text>
            </Flex>
            <FiArrowUpRight fontSize={'20px'} fontWeight={700}/>
         </Flex>
          </Box>
        </Stack>
      </Box>

      {/* Open Trades Section */}
      <Box p={4} boxShadow='md' rounded='md' mt={5}>
        <Text color={'gray.500'} fontWeight={500}>Open Trades</Text>

        <Stack spacing="3" mt={3}>
          <Box bg="gray.20" p="3" borderRadius="md" boxShadow='xs'>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
         <Flex alignItems={'center'} gap={'10px'}>
            <Text fontSize="sm"  fontWeight={500} color={'gray.500'}>GBPUSD</Text>
            <Text color={'gray.700'} fontWeight={500} bg={"#ECFDF3"} borderRadius={'25px'} px={3}>Long</Text>
            </Flex>
            <Text>0.12</Text>
         </Flex>
          <Flex alignItems={'center'} mt={3}>
          <Text mr={'2px'} color={'green'} fontSize={'16px'} fontWeight={600}>+56.00</Text>
          <Text color={'gray.500'} fontWeight={500}>USD</Text>
          </Flex>
          </Box>

          <Box bg="gray.20" p="3" borderRadius="md" boxShadow='xs' >
          <Flex justifyContent={'space-between'} alignItems={'center'}>
         <Flex alignItems={'center'} gap={'10px'}>
            <Text  fontWeight={500} color={'gray.500'}>GBPUSD</Text>
            <Text  color={'gray.700'} fontWeight={500} bg={"#ECFDF3"} borderRadius={'25px'} px={3}>Long</Text>
            </Flex>
            <Text>0.52</Text>
         </Flex>
          <Flex alignItems={'center'} mt={3}>
          <Text mr={'2px'} color={'red'} fontSize={'16px'} fontWeight={600}>-0.09</Text>
          <Text color={'gray.500'}  fontWeight={500}>USD</Text>
          </Flex>
          </Box>

          <Box bg="gray.20" p="3" borderRadius="md" boxShadow='xs'>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
         <Flex alignItems={'center'} gap={'10px'}>
            <Text fontSize="sm"  fontWeight={500} color={'gray.500'}>GBPUSD</Text>
            <Text color={'gray.700'} fontWeight={500} bg={"#FEE2E2"} borderRadius={'25px'} px={3}>Short</Text>
            </Flex>
            <Text>0.34</Text>
         </Flex>
          <Flex alignItems={'center'} mt={3}>
          <Text mr={'2px'} color={'red'} fontSize={'16px'} fontWeight={600}>-1.09</Text>
          <Text color={'gray.500'} fontWeight={500}>USD</Text>
          </Flex>
          </Box>


        </Stack>
      </Box>
    </Box>
  );
};


