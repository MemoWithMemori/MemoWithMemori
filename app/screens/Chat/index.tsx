import ChatBar from '@/components/Chat/ChatBar';
import Container from '@/components/common/Container';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  InputAccessoryView,
} from 'react-native';
import styled from 'styled-components/native';
import IconMemo from '@assets/Chat/icon-mori.svg';
import IconModalButton from '@assets/Chat/icon-modal-button.svg';

import IconMori from '@assets/Chat/image-mori.png';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  shareButton: {
    marginRight: 20, // 오른쪽 여백 조정
  },
  shareButtonText: {
    color: '#47B97A', // 텍스트 색상
    fontSize: 16, // 폰트 크기
  },
});

const Chat = () => {
  const navigation: any = useNavigation();
  const [messages, setMessages] = useState<any>([
    {
      _id: '1711993135450',
      createdAt: new Date().toISOString(),
      text: '대화를 마치고 싶으실 땐\n우측상단의 저장 버튼을\n눌러주세요. :)',
      user: { _id: 'user2' },
    },
    {
      _id: '1711993135451',
      createdAt: new Date().toISOString(),
      text: '안녕하세요,\n살면서 가장 행복했던 순간은\n언제인가요? ',
      user: { _id: 'user2', avatar: IconMori },
    },
  ]);
  const [text, setText] = useState('');
  const [summaryText, setSummaryText] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const goChat = useCallback(() => {
    navigation.navigate('Loading', { chat: messages });
    setModalVisible(false);
  }, [navigation, messages]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.shareButton}
        >
          <Text style={styles.shareButtonText}>대화 저장</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, messages]);

  const renderItem = ({ item, index }) => {
    // 첫 번째 메시지이거나 이전 메시지의 발신자와 현재 메시지의 발신자가 다른 경우에만 프로필 사진을 표시합니다.
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
        {item.user._id === 'user2' ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                display: `${showAvatar ? 'flex' : 'none'}`,
              }}
            >
              <Image
                source={item.user.avatar}
                style={{
                  width: 36,
                  height: 36,
                  marginTop: -8,
                }}
              />
              <Text style={{ marginLeft: 8 }}>모리</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: `${!isUserMessage ? 'row' : 'row-reverse'}`,
                alignItems: 'flex-end',
                marginLeft: 40,
              }}
            >
              <MessageBubble
                isUserMessage={isUserMessage}
                showAvatar={showAvatar}
              >
                <MessageText isUserMessage={isUserMessage}>
                  {item.text}
                </MessageText>
              </MessageBubble>
              <MessageTimestamp isUserMessage={isUserMessage}>
                {formatMessageTime(item.createdAt)}
              </MessageTimestamp>
            </View>
          </View>
        ) : (
          <View
            style={{
              display: 'flex',
              flexDirection: `${!isUserMessage ? 'row' : 'row-reverse'}`,
              alignItems: 'flex-end',
            }}
          >
            <MessageBubble
              isUserMessage={isUserMessage}
              showAvatar={showAvatar}
            >
              <MessageText isUserMessage={isUserMessage}>
                {item.text}
              </MessageText>
            </MessageBubble>
            <MessageTimestamp isUserMessage={isUserMessage}>
              {formatMessageTime(item.createdAt)}
            </MessageTimestamp>
          </View>
        )}
      </MessageContainer>
    );
  };

  return (
    <>
      {modalVisible && (
        <Container
          height="100%"
          backgroundColor="transparent"
          justifyContent="center"
        >
          <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
          >
            <ModalContainer>
              <View style={{ alignItems: 'center' }}>
                <IconMemo width={56} height={56} />
                <ModalText style={{ marginTop: 16 }}>
                  {'생각정리가 되셨나요?\n\n저희가 대화한 내용을 정리해서'}
                </ModalText>
                <ModalText style={{ fontWeight: '700', marginBottom: 40 }}>
                  {' 기억카드로 만들어 드릴게요. :)'}
                </ModalText>
              </View>
              <Container flexDirection="row">
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Container
                    width="146px"
                    height="56px"
                    justifyContent="center"
                  >
                    <Text>취소</Text>
                  </Container>
                </Pressable>
                <Pressable onPress={goChat}>
                  <IconModalButton />
                </Pressable>
              </Container>
            </ModalContainer>
          </Modal>
        </Container>
      )}
      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <ChatContainer>
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            inverted
          />
        </ChatContainer>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ChatBar
          text={text}
          setText={setText}
          messages={messages}
          setMessages={setMessages}
          setSummaryText={setSummaryText}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default Chat;

const ChatContainer = styled.View`
  padding: 10px;
  padding-bottom: 84px;
  background-color: #f5f5f5;
`;

const MessageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 8px;
  background-color: #f5f5f5;
  justify-content: ${(props) =>
    props.isUserMessage ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUserMessage ? '#47B97A' : '#EBEBEB')};
  border-radius: 16px;
  border-top-right-radius: ${(props) => (props.isUserMessage ? '0px' : '16px')};
  border-top-left-radius: ${(props) => (!props.isUserMessage ? '0px' : '16px')};
  padding: 16px;

  margin-left: ${(props) =>
    !props.showAvatar && !props.isUserMessage
      ? '0px'
      : props.showAvatar && !props.isUserMessage
        ? '0px'
        : '0px'};

  max-width: 226px;
`;

const MessageText = styled(Text)`
  color: ${(props) => (props.isUserMessage ? '#FFF' : '#1A1A1B')};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.4px;
  flex-wrap: wrap;
`;

const MessageTimestamp = styled.Text`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #878787;
  margin-left: ${(props) => (props.isUserMessage ? '0px' : '4px')};
  margin-right: ${(props) => (props.isUserMessage ? '4px' : '0px')};
`;

const ModalContainer = styled.View`
  margin: 16px;
  margin-top: 50%;
  background-color: white;
  border-radius: 12px;
  align-items: center;
  /* elevation: 5; */
  padding: 8px;
  padding-top: 40px;
`;

const ModalText = styled.Text`
  color: #1a1a1b;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
