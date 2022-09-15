import { Grid } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Messages from './Messages';

const Chat = () => {
  const [messages, setMessages] = useState([
    { user: 'computer', text: 'Hi, My Name is HoneyChat' },
    { user: 'me', text: 'Hey there' },
    { user: 'girlie', text: 'Hey there' },
    { user: 'me', text: 'Myself Ferin Patel' },
    {
      user: 'computer',
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
    { user: 'computer', text: 'Hi, My Name is HoneyChat' },
    { user: 'me', text: 'Hey there' },
    { user: 'girlie', text: 'Hey there' },
    {
      user: 'computer',
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
    { user: 'me', text: 'Myself Ferin Patel' },
    { user: 'me', text: 'Myself Ferin Patel' },
    {
      user: 'computer',
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { user: 'me', text: data }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages((old) => [...old, { user: 'computer', text: data }]);
    }, 1000);
  };
  const user = 'me';

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
        <Header user={user} />
        <Messages messages={messages} user={user} />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Grid>
    </Grid>
  );
};

export default Chat;
