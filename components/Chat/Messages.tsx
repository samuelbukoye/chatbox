import { TriangleDownIcon } from '@chakra-ui/icons';
import { Avatar, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const Messages = () => {
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

  const user = 'me';

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (elementRef?.current) {
        elementRef.current.scrollIntoView();
      }
    });

    return <Grid ref={elementRef} />;
  };

  return (
    <Grid w="full" h="Full" overflowY="scroll" pt="6" pb="3" px="3" gridGap="6">
      {messages.map((item, index) => {
        if (item.user === user) {
          return (
            <GridItem
              key={index}
              w="100%"
              display="flex"
              justifyContent="right"
              gap={'1'}
            >
              <Avatar
                name={item.user}
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                bg="blue.300"
                transform={'translate(-5px, -45%)'}
              ></Avatar>
              <Grid
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                p="3"
                borderRadius="md"
                pos="relative"
              >
                <TriangleDownIcon
                  pos="absolute"
                  top="-5px"
                  left="-1px"
                  transform={'translateX(-20%)'}
                  color="black"
                  w={6}
                  h={6}
                />
                <Text color="gray.100">{item.text}</Text>
              </Grid>
            </GridItem>
          );
        } else {
          return (
            <GridItem
              key={index}
              w="100%"
              display="flex"
              justifyContent="left"
              gap={'1'}
            >
              <Grid
                bg="gray.700"
                color="white"
                minW="100px"
                maxW="350px"
                p="3"
                borderRadius="md"
                pos="relative"
              >
                <TriangleDownIcon
                  pos="absolute"
                  top="-5px"
                  right="-1px"
                  transform={'translateX(20%)'}
                  color="gray.700"
                  w={6}
                  h={6}
                />

                <Text
                  w="full"
                  color="gray.300"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  {item.user}
                </Text>

                <Text color="gray.100">{item.text}</Text>
              </Grid>
              <Avatar
                name={item.user}
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                bg="blue.300"
                transform={'translate(5px, -45%)'}
              ></Avatar>
            </GridItem>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Grid>
  );
};

export default Messages;
