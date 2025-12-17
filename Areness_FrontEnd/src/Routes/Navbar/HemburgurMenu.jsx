import React from 'react';
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const HemburgurMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* Hamburger Button - Visible only on small screens */}
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
        colorScheme="teal"
        size={["sm","md","lg"]}
        display={{ md: 'block',lg:"none", xl: 'none' }} // Only on small screens
        m={4}
      />

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Button variant="ghost" w="full" onClick={onClose}>
                Home
              </Button>
              <Button variant="ghost" w="full" onClick={onClose}>
                Profile
              </Button>
              <Button variant="ghost" w="full" onClick={onClose}>
                Settings
              </Button>
              <Button variant="ghost" w="full" onClick={onClose}>
                Logout
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HemburgurMenu;

  