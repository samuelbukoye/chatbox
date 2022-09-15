import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Chat from '../components/Chat';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Chatbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Chat />
      </Box>
    </Box>
  );
};

export default Home;
