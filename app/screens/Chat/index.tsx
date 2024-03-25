import ChatBar from '@/components/Chat/ChatBar';
import Container from '@/components/common/Container';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState('');

  const renderItem = ({ item, index }) => {
    // 첫 번째 메시지이거나 이전 메시지의 발신자와 현재 메시지의 발신자가 다른 경우에만 프로필 사진을 표시합니다.
    console.log(item);
    const isUserMessage = item.user._id === 'user1';
    const showAvatar =
      index === messages.length - 1 ||
      messages[index + 1].user._id !== item.user._id;

    // 날짜 포매팅 함수 (예시: '2:30 PM')
    function formatMessageTime(timestamp) {
      const date = new Date(timestamp);
      return date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2);
    }

    return (
      <MessageContainer isUserMessage={item.user._id === 'user1'}>
        {item.user._id === 'user2' && !item.isUserMessage && showAvatar && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 100,
              height: 90,
            }}
          >
            <Image
              source={item.user.avatar}
              style={{
                width: 36,
                height: 36,
              }}
            />
            <Text style={{ marginLeft: 4 }}>모리</Text>
          </View>
        )}
        <View
          style={{
            display: 'flex',
            flexDirection: `${!isUserMessage ? 'row' : 'row-reverse'}`,
            alignItems: 'flex-end',
          }}
        >
          <MessageBubble isUserMessage={isUserMessage} showAvatar={showAvatar}>
            <MessageText isUserMessage={isUserMessage}>{item.text}</MessageText>
          </MessageBubble>
          <MessageTimestamp isUserMessage={isUserMessage}>
            {formatMessageTime(item.createdAt)}
          </MessageTimestamp>
        </View>
      </MessageContainer>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <ChatContainer>
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              inverted
            />
          </ChatContainer>
        </View>
        <ChatBar
          text={text}
          setText={setText}
          messages={messages}
          setMessages={setMessages}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default Chat;

const ChatContainer = styled.View`
  padding: 10px;
  padding-bottom: 84px;
`;

const MessageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 8px;
  justify-content: ${(props) =>
    props.isUserMessage ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUserMessage ? '#47B97A' : '#EBEBEB')};
  border-radius: 16px;
  border-top-right-radius: ${(props) => (props.isUserMessage ? '0px' : '20px')};
  border-top-left-radius: ${(props) => (!props.isUserMessage ? '0px' : '20px')};
  padding: 16px;

  margin-left: ${(props) =>
    !props.showAvatar && !props.isUserMessage
      ? '52px'
      : props.showAvatar && !props.isUserMessage
        ? '-50px'
        : '0px'};

  max-width: 400px;
`;

const MessageText = styled.Text`
  color: ${(props) => (props.isUserMessage ? '#FFF' : '#1A1A1B')};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const MessageTimestamp = styled.Text`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #878787;
  margin-left: ${(props) => (props.isUserMessage ? '0px' : '4px')};
  margin-right: ${(props) => (props.isUserMessage ? '4px' : '0px')};
`;
