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
    >
      <Grid
        w={'500px'}
        h={'1000px'}
        gridTemplateRows={'200px 1fr 200px'}
        borderRadius={'xl'}
        overflow={'hidden'}
      >
        <Header />
        <Messages />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Chat;
