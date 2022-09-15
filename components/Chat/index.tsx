import { Grid } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import Messages from './Messages';
const Chat = () => {
  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      w={'100vw'}
      h={'100vh'}
      bg={'white'}
    >
      <Grid
        w={'500px'}
        h={'90vh'}
        gridTemplateRows={'20% 1fr 20%'}
        borderRadius={'xl'}
        overflow={'hidden'}
        border={'5px solid black'}
      >
        <Header />
        <Messages />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Chat;
