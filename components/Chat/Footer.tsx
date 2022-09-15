import { Button, Flex, Grid, Input } from '@chakra-ui/react';
import { setStringStateType } from '../../utils/interfaces';

interface propArgs {
  inputMessage: string;
  setInputMessage: setStringStateType;
  handleSendMessage: () => void;
}

const Footer = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}: propArgs) => {
  return (
    <Flex w="100%" bg={'gray.700'} alignItems="center" justifyContent="center">
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
              handleSendMessage();
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
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Grid>
    </Flex>
  );
};

export default Footer;
