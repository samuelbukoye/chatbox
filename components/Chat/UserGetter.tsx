import {
  Button,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { setStringStateType } from '../../utils/interfaces';

interface propArgs {
  setUser: setStringStateType;
  showModal: boolean;
}

const UserGetter = ({ setUser, showModal }: propArgs) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputMessage, setInputMessage] = useState('');

  return (
    <>
      <Modal isOpen={showModal} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your Name</ModalHeader>
          <ModalBody>
            <Grid w="90%" gridTemplateColumns={'1fr 25%'} h="40%">
              <Input
                placeholder="Type Something..."
                w="full"
                h="full"
                borderLeftRadius="lg"
                borderRightRadius="0"
                border="1px solid black"
                _focus={{
                  border: '1px solid black',
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setUser(inputMessage);
                  }
                }}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button
                bg="black"
                color="white"
                borderRadius="none"
                borderLeftRadius="0"
                borderRightRadius="lg"
                w="full"
                h="full"
                p="0"
                _hover={{
                  bg: 'white',
                  color: 'black',
                  border: '1px solid black',
                }}
                disabled={inputMessage.trim().length <= 0}
                onClick={() => setUser(inputMessage)}
              >
                Send
              </Button>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserGetter;
