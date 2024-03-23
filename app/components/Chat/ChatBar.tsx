import React, { useState } from 'react';
import Container from '../common/Container';
import IconChatDefault from '@assets/Chat/icon-chatting-white.svg';
import IconButtonSend from '@assets/Chat/icon-button-send-messages.svg';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import IconMori from '@assets/Chat/image-mori.png';

// 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;

// 화면 너비에서 20을 뺀 값을 계산
const calculatedWidth = screenWidth - 84;

const ChatBar = (props) => {
  const { text, setText, messages, setMessages } = props;

  const sendMessage = () => {
    if (text.length > 0) {
      const newMessage = {
        _id: Math.random().toString(36).substr(2, 9),
        text,
        createdAt: new Date(),
        user: {
          _id: 'user2',
          avatar: IconMori,
        },
      };

      setMessages([newMessage, ...messages]);
      setText('');
    }
  };

  return (
    <ChatBarContainer
      width="100%"
      height="84px"
      backgroundColor="#f5f5f5"
      justifyContent="center"
      flexDirection="row"
    >
      <IconChatDefault />
      <Container
        flexDirection="row"
        width={calculatedWidth + 'px'}
        height="44px"
        backgroundColor="#e9e9e9"
        alignItems="center"
        paddingLeft={'12px'}
        marginLeft="8px"
        borderBottomRightRadius="12px"
        borderBottomLeftRadius="12px"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      >
        <SearchBarTextInput
          placeholder="내용을 적어주세요."
          value={text}
          onChangeText={setText}
        />
        <IconButtonSend onPress={sendMessage} />
      </Container>
    </ChatBarContainer>
  );
};

export default ChatBar;

const ChatBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 13px;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 84px;
  background-color: #f5f5f5;
`;

const SearchBarTextInput = styled.TextInput`
  margin-left: 12px;
  margin-right: 8px;
  width: 226px;
  height: 24px;

  color: #a6aaaf;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
