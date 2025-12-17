import React from 'react';
import { Box, CircularProgress, CircularProgressLabel, Flex, Text, Icon } from '@chakra-ui/react';
import { FaFileAlt } from 'react-icons/fa';

export const DashBoardTaskStatus = () => {
  return (
    <Box 
   border="1px"
      borderColor="gray.200"
    borderRadius="md" 
    p={4}
    w="450px" // Adjust width as needed
    bg="white" 
  >
    {/* Header Section */}
    <Flex alignItems="center" mb={4}>
      <Icon as={FaFileAlt} boxSize="20px" color="gray.500" />
      <Text ml={2} color="red.500" fontWeight="bold" fontSize="md">
        Task Status
      </Text>
    </Flex>

    {/* Progress Circles */}
    <Flex justifyContent="space-around" alignItems="center">
      {/* Completed Task */}
      <Box textAlign="center">
        <CircularProgress value={84} size="100px" color="green.400">
          <CircularProgressLabel>84%</CircularProgressLabel>
        </CircularProgress>
        <Text color="green.500" mt={2}>Completed</Text>
      </Box>

      {/* In Progress Task */}
      <Box textAlign="center">
        <CircularProgress value={46} size="100px" color="blue.400">
          <CircularProgressLabel>46%</CircularProgressLabel>
        </CircularProgress>
        <Text color="blue.500" mt={2}>In Progress</Text>
      </Box>

      {/* Not Started Task */}
      <Box textAlign="center">
        <CircularProgress value={13} size="100px" color="red.400">
          <CircularProgressLabel>13%</CircularProgressLabel>
        </CircularProgress>
        <Text color="red.500" mt={2}>Not Started</Text>
      </Box>
    </Flex>
  </Box>
  )
}
