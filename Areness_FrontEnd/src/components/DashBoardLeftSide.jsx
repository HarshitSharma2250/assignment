import {
    Box,
    Avatar,
    Text,
    VStack,
    HStack,
    Button,
    Icon,
    Spacer,
  } from "@chakra-ui/react";
  import {
    FiGrid,
    FiCheckSquare,
    FiSettings,
    FiHelpCircle,
    FiLogOut,
  } from "react-icons/fi";
  import { BsListTask } from "react-icons/bs";
  import { MdOutlineTaskAlt } from "react-icons/md";
  
  export const DashBoardLeftSide = () => {
    return (
      <Box w="350px" h="100%" bg="#FF6B6B" color="white" p="6" mt={'2.7rem'} borderRadius="lg" display={["none","flex","flex","flex"]} flexDirection={'column'} justifyContent={"space-around"} >
<Box>
            {/* Profile Section */}
            <VStack spacing={3} mb="10">
          <Avatar size="xl" mt={'-9rem'} name="Sundar Gurung" src="https://s3-alpha-sig.figma.com/img/d8c1/46d0/87da273e19342b1355ecb77fd68e6dc1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yf~moNq7xdfecrk0lrKJk~xkz3CIYN5RSDZWlusN9EZqdoHtx9OgxTbTSaq1NoBiSI~hhtV0Wb2SruHu~hxG0~Y69XB8qsGwR0XY6uBUOrz3zFyXCjWSXcvMVHapnxgcQCPBNZQL5pO3493rsdkhWxbFqrDGT8aMHL2smeECtL4WfCmaTotqkt2ZBoyHgLOtZMzwS8aUp8REOSEfWUJfVe9QBC-qvBdm5z41nGV6QNBzI4qRDMkSsaS7GbDyeJTj2OjqcvWnBb2zUncbSpJvn4yR98tefuK4XV5rF05YEASA-j~o5PgEt8bZh3ZxUI~4kWUWsRLwUcTopHT6PgKEYw__" />
          <Text fontWeight="bold" fontSize="lg">
            Sundar Gurung
          </Text>
          <Text fontSize="sm" color="whiteAlpha.800">
            sundargurung360@gmail.com
          </Text>
        </VStack>
  
        {/* Dashboard Button */}
        <Button
          leftIcon={<FiGrid />}
          bg="white"
          color="black"
          width="full"
          mb="6"
          borderRadius="lg"
          justifyContent="flex-start"
          fontWeight="bold"
          boxShadow="lg"
          px="6"
          py="4"
          _hover={{ bg: "gray.100" }}
        >
          Dashboard
        </Button>
  
        {/* Menu Items */}
        <VStack spacing={5} align="start" pl="2">
          <HStack spacing="4">
            <Icon as={MdOutlineTaskAlt} boxSize={6} />
            <Text fontSize="md">Vital Task</Text>
          </HStack>
  
          <HStack spacing="4">
            <Icon as={FiCheckSquare} boxSize={6} />
            <Text fontSize="md">My Task</Text>
          </HStack>
  
          <HStack spacing="4">
            <Icon as={BsListTask} boxSize={6} />
            <Text fontSize="md">Task Categories</Text>
          </HStack>
  
          <HStack spacing="4">
            <Icon as={FiSettings} boxSize={6} />
            <Text fontSize="md">Settings</Text>
          </HStack>
  
          <HStack spacing="4">
            <Icon as={FiHelpCircle} boxSize={6} />
            <Text fontSize="md">Help</Text>
          </HStack>
        </VStack>
  
        <Spacer />
</Box>
  
        {/* Logout Section */}
        <HStack mt="12" pl="2" spacing="4">
          <Icon as={FiLogOut} boxSize={6} />
          <Text fontSize="md">Logout</Text>
        </HStack>
      </Box>
    );
  };
  