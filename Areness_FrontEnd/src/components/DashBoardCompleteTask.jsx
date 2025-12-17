import React from 'react'
import { Box, Image, Text, VStack, HStack, Badge, Spacer, Flex } from "@chakra-ui/react";
export const DashBoardCompleteTask = () => {
  return (
    <VStack spacing={4} align="center" mt={'2px'}>
    {/* First Task Card */}
    <Box
      w="338px"
      h="150px"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      px="4"
      display={"flex"}
      alignItems={'center'}
    >
      <HStack align="start" spacing={4}>
        {/* Status Indicator */}
        <Box w={"12px"} h={"12px"} border=" 2px solid green" borderRadius="full" mt={1} />

        {/* Task Info */}
        <VStack align="start" spacing={1} flex="1">
          <Text fontWeight="bold" fontSize="lg">
            Conduct meeting
          </Text>
          <Flex>
          <Text fontSize="sm" color="gray.600">
            Meet with the client and finalize requirements.
          </Text>
        </Flex>
          <Spacer />
          <Box>
            <Badge >status :<span style={{color:"green" , marginLeft:"5px"}}>Completed</span></Badge>
            <Text fontSize="xs" color="gray.500" mt={'5px'}>
              Completed 2 days ago
            </Text>
          </Box>
        </VStack>
      </HStack>
          {/* Task Image */}
    <Image
          src="https://s3-alpha-sig.figma.com/img/2cd5/3796/20daca755cdba8b912187903a2e9bf42?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eRyro~fENMPxsNC~EIgCSqvPJeKR-tdrJffjtvdvmkpYygoiMVVQ5s6KNL33Dkps8Ymy4-zRjnMFp7oDl6nbYJDYFY07q-uVuHKlgwamWRdzC-g8K1YbphoCIkHOdN8vEtcyOQ-mbXklrp4i0T6QRhrUcOvsi1N3yZ03qNlBDFJmuJ8JNg3l-vvQhzm-PFrrMePEDqAfPVz~DFP87qp0IJs~9~9-zAaOyjW1vGL6lGmcRc-JwAT064qGwNX5jlz5i3crGaTlUIPogXIJWvuWl2aJDi9iadshPUAq-xRWIAiR0J0G0xRSGfWU3vW2y5whj5SLYILOc0Vhrz--cYrOqw__"
          alt="Conduct meeting"
          w={"88px"}
          h={"88px"}
          borderRadius={"14px"}
        />
    </Box>

    {/* Second Task Card */}
    <Box
      w="338px"
      h="150px"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      px="4"
      display={"flex"}
      alignItems={'center'}
    >
      <HStack align="start" spacing={4}>
        {/* Status Indicator */}
        <Box w={"12px"} h={"12px"} border=" 2px solid green" borderRadius="full" mt={1} />

        {/* Task Info */}
        <VStack align="start" spacing={1} flex="1">
          <Text fontWeight="bold" fontSize="lg">
            Conduct meeting
          </Text>
          <Flex>
          <Text fontSize="sm" color="gray.600">
            Meet with the client and finalize requirements.
          </Text>
        </Flex>
          <Spacer />
          <Box>
            <Badge >status :<span style={{color:"green" , marginLeft:"5px"}}>Completed</span></Badge>
            <Text fontSize="xs" color="gray.500" mt={'5px'}>
              Completed 2 days ago
            </Text>
          </Box>
        </VStack>
      </HStack>
          {/* Task Image */}
    <Image
          src="https://s3-alpha-sig.figma.com/img/58e2/2598/91c3b1fe42b51aae4ae18a2deac43e5a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZfKBkuCTb6RVeX8Fhe5wH3z2dgrT9Cx0G5Qp5cFXlEuXBaOKSayZzU50jXxeExN-k9MKKMc~9j7zZ5~zBK0aZKK45f~cJc4wCpNA-nuFbQibMhcknqY38i6aI67CKybxPPwBuCEsdXR519XM6ZA2FGEmZxu74tIcEqGsGoXSaXi4itnkTWYomVz2S1keo5zAxWCarB6M6Ud8KgMTtxG3OBrQMbi-JbMJJzrL-AiS02debjzKwKxN72JU1Y-kyC54phIwpUMC~LkhboAiEZFpfTHVmo7amiXlsItwMuOE6ujYBosDkxkzNfgcZNBswrEOQIsOOqnksq7WEpIxHGr-Q__"
          alt="Conduct meeting"
          w={"88px"}
          h={"88px"}
          borderRadius={"14px"}
        />
    </Box>
  </VStack>
  )
}
