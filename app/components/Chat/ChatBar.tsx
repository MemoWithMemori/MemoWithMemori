import React, { useState } from 'react';
import Container from '../common/Container';
import IconChatDefault from '@assets/Chat/icon-chatting-white.svg';
import IconButtonSend from '@assets/Chat/icon-button-send-messages.svg';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import IconMori from '@assets/Chat/image-mori.png';

import axios from 'axios';

// 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;

// 화면 너비에서 84을 뺀 값을 계산
const calculatedWidth = screenWidth - 84;

const ChatBar = (props) => {
  const { text, setText, messages, setMessages } = props;

  // 예시: API 요청을 위한 함수 (Axios 사용)
  async function sendMessageToAPI(messageContent) {
    try {
      const response = await axios.post(
        'https://us-central1-memori-7aab6.cloudfunctions.net/chatMORI',
        {
          message: messageContent,
        },
      );
      return response.data; // 서버로부터 받은 응답
    } catch (error) {
      console.error('메시지 전송 실패:', error);
    }
  }

  // 예시: 메시지 전송 로직
  const handleSendMessage = async () => {
    if (!text) return; // 입력된 텍스트가 없으면 함수 종료

    const newMessage = {
      _id: Date.now().toString(), // 임시 ID 생성
      text: text, // 입력된 텍스트
      createdAt: new Date().toISOString(),
      user: { _id: 'user1' }, // 보내는 사람
    };

    // 메시지 목록에 새 메시지 추가
    setMessages((prevMessages) => [newMessage, ...prevMessages]);

    // API로 메시지 전송 및 응답 처리
    const apiResponse = await sendMessageToAPI(text);
    if (apiResponse) {
      // 응답으로 받은 메시지를 목록에 추가하는 로직 구현
      const responseMessage = {
        _id: Date.now().toString(), // 임시 ID 생성
        text: apiResponse.content, // API 응답에서 받은 텍스트
        createdAt: apiResponse.createdAt,
        user: { _id: 'user2' }, // 받는 사람
      };

      // 메시지 목록에 응답 메시지 추가
      setMessages((prevMessages) => [responseMessage, ...prevMessages]);
    }

    // 입력 필드 초기화
    setText('');
  };

  // ChatBar 컴포넌트 내에서 메시지 전송 버튼에 handleSendMessage 함수를 연결

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
        <IconButtonSend onPress={handleSendMessage} />
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
