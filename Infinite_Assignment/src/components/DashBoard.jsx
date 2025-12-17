import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { CgChart } from "react-icons/cg";
import { FaCube, FaExchangeAlt, FaWallet } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiHistoryLine,RiNotification4Line,RiLogoutBoxLine } from "react-icons/ri";
import { TbCoinFilled } from "react-icons/tb";
import { IoSearchSharp,IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";


import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { QuickLinks } from "./QuickLinks";
import { Logo } from "./Logo";

const Links = [
  { text: "DashBoard", icon: <MdDashboard /> },
  { text: "CRM", icon: <FaUserGroup /> },
  { text: "MAM", icon: <FaCube /> },
  { text: "PAMM", icon: <CgChart /> },
  { text: "Trade", icon: <FaExchangeAlt /> },
  { text: "Wallet", icon: <FaWallet /> },
  { text: "Accounts", icon: <TbCoinFilled /> },
  { text: "Hiatory", icon: <RiHistoryLine /> },
];


const Links2=[
  { text: "Notifications", icon: <RiNotification4Line/> },
  { text: "Settings", icon: <IoSettingsOutline /> },
  { text: "Help & Support", icon: <BiSupport /> },
  { text: "Log Out", icon: <RiLogoutBoxLine /> }
]

export const DashBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={["block", "block", "block", "grid"]}
        w="100%"
        gridTemplateColumns={["repeat(1,1fr)", "250px auto"]}
      >
        {/* Sidebar */}
        <Box 
          bg="purple.400"
          h="100%"
          display={["none", "none", "none", "flex"]}
          color={"#fff"}
          minW={"180px"}
          flexDirection={'column'}
          justifyContent={'space-between'}
          
        >
<Box>
<Logo/>
          {Links.map((link) => (
            <Flex
              key={link.text}
              alignItems={"center"}
              w={"100%"}
              pl={5}
              _hover={{
                color: "#ADFF2F",
                borderRight: "4px solid #ADFF2F",
                background:
                  "linear-gradient(90deg, rgba(173, 255, 47, 0.07) 80%, rgba(173, 255, 47, 0.5) 100%)",
              }}
            >
              {link.icon}
              <Text my={1} textAlign="left" ml={3}>
                {link.text}
              </Text>
            </Flex>
          ))}
</Box>
          <Box>
          {Links2.map((link) => (
            <Flex
              key={link.text}
              alignItems={"center"}
              w={"100%"}
              pl={5}
              _hover={{
                color: "#ADFF2F",
                borderRight: "4px solid #ADFF2F",
                background:
                  "linear-gradient(90deg, rgba(173, 255, 47, 0.07) 80%, rgba(173, 255, 47, 0.5) 100%)",
              }}
            >
              {link.icon}
              <Text my={1} textAlign="left" ml={3} >
                {link.text}
              </Text>
            </Flex>
          ))}
          <Divider/>
    <Flex pb={'20px'} mt='10px' justifyContent={'center'} alignItems={'center'} gap={'20px'}>
  <Box boxShadow='Base' w='30px' h='30px' display={'flex'} bg={'purple.300'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'}>
  <LuUser/>
  </Box>
  <Box>
    <Text >Syam Shakur</Text>
    <Text >syam01.shankur@m....</Text>
  </Box>

          </Flex>
          </Box>
        </Box>

        {/* Header, body */}

        <Box>
          {/* Header */}

          <Flex
            h={["90px", "90px", 12, 12]}
            w={"100%"}
            justifyContent={[
              "space-around",
              "space-around",
              "space-between",
              "space-between",
            ]}
            alignItems={[, , "center", "center"]}
            flexDirection={["column", "column", "row", "row"]}
            px={4}
            boxShadow="base"
          >
            <Flex alignItems="center" gap={'10px'}>
              <IconButton
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Open Menu"
                display={["inline-flex", "inline-flex", "inline-flex", "none"]}
                onClick={isOpen ? onClose : onOpen}
              />
              <Box ml={{ base: 2, md: 0 }} fontWeight={700} opacity={".7"} fontSize={["10px","15px","15px","15px"]}>
                Dashboard
              </Box>
            </Flex>

            {/* Search Bar */}
            <Box
              w={{ base: "100%", md: "30%" }}
              display={"flex"}
              alignItems={"center"}
              h={'30px'}
            >
              <InputGroup mr={3}>
                <InputLeftElement pointerEvents="none" >
                  <IoSearchSharp color="gray.300" style={{marginBottom:'6px'}} />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="search..."
                  w={"100%"}
                  color="black"
                  h={'30px'}
                  fontSize={'15px'}
                />
              </InputGroup>
              <Box display={["none", "none", "block", "block"]}>
                <IoMdNotificationsOutline fontSize={"20px"} />
              </Box>
            </Box>
          </Flex>

          {/* Body */}
          <Box>
            <QuickLinks />
          </Box>
        </Box>

        {/* Drawer for Sidebar on Mobile */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent maxWidth="250px" width="180px">
            <DrawerCloseButton />
            <DrawerBody bg="purple.300" p={0}>
<Flex flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
<Box>
          <Logo/>
          {Links.map((link) => (
            <Flex
              key={link.text}
              alignItems={"center"}
              w={"100%"}
              pl={5}
              _hover={{
                color: "#ADFF2F",
                borderRight: "4px solid #ADFF2F",
                background:
                  "linear-gradient(90deg, rgba(173, 255, 47, 0.07) 80%, rgba(173, 255, 47, 0.5) 100%)",
              }}
            >
              {link.icon}
              <Text my={2} textAlign="left" ml={3} color={'#fff'}>
                {link.text}
              </Text>
            </Flex>
          ))}
</Box>
          <Box>
          {Links2.map((link) => (
            <Flex
              key={link.text}
              alignItems={"center"}
              w={"100%"}
              pl={5}
              _hover={{
                color: "#ADFF2F",
                borderRight: "4px solid #ADFF2F",
                background:
                  "linear-gradient(90deg, rgba(173, 255, 47, 0.07) 80%, rgba(173, 255, 47, 0.5) 100%)",
              }}
            >
              {link.icon}
              <Text my={2} textAlign="left" ml={3} color={'white'}>
                {link.text}
              </Text>
            </Flex>
          ))}
          <Divider/>
    <Flex pb={'20px'} mt='10px' justifyContent={'center'} alignItems={'center'} gap={'20px'}>
  <Box boxShadow='Base' w='30px' h='30px' display={'flex'} bg={'purple.500'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'}>
  <LuUser color="white"/>
  </Box>
  <Box color={'white'}>
    <Text>Syam Shakur</Text>
    <Text>syam01.shankur@m....</Text>
  </Box>

          </Flex>
          </Box>
</Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
