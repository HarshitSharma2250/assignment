import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AddTask } from '../redux/Action'

export const FormData = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch=useDispatch()
const title=useRef("")
const description=useRef("")

    const HandleSubmit=(e)=>{
        e.preventDefault()
dispatch(AddTask({title:title.current.value,description:description.current.value,id:String(Date.now()),status:"todo"}))
title.current.value=""
description.current.value=""
        onClose()
    }

  return (

          <>
            <Button onClick={onOpen} 
            
            color={"#fff"}
            bg={"green"}
            _hover={"none"}
            >Create</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>create new task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <form onSubmit={HandleSubmit}>
                <SimpleGrid spacing={5}>
                  <Input type="text" placeholder="enter title" fontSize={17} ref={title} required/>
                  <Textarea placeholder='Here is a sample placeholder' ref={description} required/>
                  <Button
                  borderRadius={15}
                  bgColor={"black"}
                  color={"#fff"}
                  _hover={{bgColor:'gray',color:"black"}}
                  type="submit"
                  >
                    create
                    </Button>
                </SimpleGrid >
              </form>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
      }

