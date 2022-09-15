import { Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IMessage } from '../../utils/interfaces';
import Footer from './Footer';
import Header from './Header';
import Messages from './Messages';
import UserGetter from './UserGetter';

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const [inputMessage, setInputMessage] = useState('');
  const [trimmedMessage, setTrimmedMessage] = useState<IMessage[]>([]);
  const [pagination, setPagination] = useState(1);
  const [isPaginated, setIsPaginated] = useState(false);
  const [user, setUser] = useState('');
  const [showModal, setShowModal] = useState(true);

  const messagePerPage = 10;

  useEffect(() => {
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [user]);

  useEffect(() => {
    if (messages.length > messagePerPage * pagination) {
      setIsPaginated(true);
    } else {
      setIsPaginated(false);
    }
  }, [messages.length, pagination]);

  useEffect(() => {
    if (messages.length > messagePerPage * pagination) {
      setIsPaginated(true);
    } else {
      setIsPaginated(false);
    }
  }, [messages.length, pagination]);

  useEffect(() => {
    const newNumber = pagination * messagePerPage * -1;
    const newMessage = messages.slice(newNumber);
    setTrimmedMessage(newMessage);
  }, [messages, pagination]);

  useEffect(() => {
    if (user) {
      setInterval(() => {
        const updatedMessages: IMessage[] = localStorage.getItem('message')
          ? (JSON.parse(
              localStorage.getItem('message') as string
            ) as unknown as IMessage[])
          : ([] as unknown as IMessage[]);
        if (updatedMessages?.length) setMessages(updatedMessages);
        console.log(updatedMessages);
      }, 1000);
    }
  }, [user]);

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    localStorage.setItem(
      'message',
      JSON.stringify([...messages, { user, text: data }])
    );
    setMessages((old) => [...old, { user, text: data }]);
    setInputMessage('');
  };

  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      w={'100vw'}
      h={'100vh'}
      bg={'white'}
    >
      <UserGetter setUser={setUser} showModal={showModal} />
      <Grid
        w={'500px'}
        h={'90vh'}
        gridTemplateRows={'20% 1fr 20%'}
        borderRadius={'xl'}
        overflow={'hidden'}
        border={'5px solid black'}
      >
        <Header user={user} />
        <Messages
          isPaginated={isPaginated}
          messages={trimmedMessage}
          user={user}
          setPagination={setPagination}
        />
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
