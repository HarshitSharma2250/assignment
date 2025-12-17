import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Select, Button } from '@chakra-ui/react';

const PriorityPrompt = ({ isOpen, onClose, onSubmit, item }) => {
    const [priority, setPriority] = useState('low');

    const handleChange = (e) => {
        setPriority(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit(item.id, priority);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Set Priority for {item?.title}</ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Priority</FormLabel>
                        <Select value={priority} onChange={handleChange}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Select>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default PriorityPrompt;
