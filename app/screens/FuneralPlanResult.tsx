import PlanningFuneralHeader from '@/components/PlanningFuneral/PlanningFuneralHeader';
import Container from '@/components/common/Container';
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IconMemo from '@assets/Chat/icon-mori.svg';
import ImageResult from '@assets/FuneralPlan/image-result.png';
import ImageFinal from '@assets/FuneralPlan/image-final.png';
import { useNavigation } from '@react-navigation/native';

const FuneralPlanResult = () => {
  const [pages, setPages] = useState<number>(0);
  const navigation: any = useNavigation();
  const goBack = useCallback(
    () => navigation.navigate('엔딩노트'),
    [navigation],
  );

  const increasePages = () => {
    setPages((page) => page + 1);
  };
  const decreasePages = () => {
    setPages((page) => page - 1);
  };

  return (
    <>
      {pages === 0 ? (
        <Container
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          paddingLeft="16px"
          paddingRight="16px"
          backgroundColor="#F5F5F5"
        >
          <PlanningFuneralHeader isShown={false} />
          <ScrollView>
            <ChatContainer>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 127,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      {'모두 작성하셨어요!\n'}
                      <Text style={{ fontWeight: '700' }}>
                        {'아래 봉투를 클릭'}
                      </Text>
                      {'해 작성한\n내용이 맞는지 확인해 주세요. '}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <TouchableOpacity
                onPress={increasePages}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  marginLeft: 45,
                }}
              >
                <Image
                  source={ImageResult}
                  style={{
                    marginTop: 56,
                    width: 277,
                    height: 272,
                  }}
                />
              </TouchableOpacity>
            </ChatContainer>
          </ScrollView>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 343,
              }}
            >
              <ButtonCustom
                onPress={increasePages}
                width="128px"
                style={{ marginRight: 12, backgroundColor: '#DFDFDF' }}
              >
                <ButtonTitle>{'다시 쓸래요'}</ButtonTitle>
              </ButtonCustom>
              <ButtonCustom
                onPress={goBack}
                width="203px"
                style={{ backgroundColor: '#47B97A' }}
              >
                <ButtonTitle>{'저장'}</ButtonTitle>
              </ButtonCustom>
            </View>
          </View>
        </Container>
      ) : (
        <Container
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          paddingLeft="16px"
          paddingRight="16px"
          backgroundColor="#F5F5F5"
        >
          <ScrollView style={{ width: '100%' }}>
            <PlanningFuneralHeader isShown={true} />
            <Container backgroundColor="#F5F5F5">
              <Image
                source={ImageFinal}
                style={{
                  width: 343,
                  height: 2119,
                }}
              />
            </Container>
            <ButtonCustom
              onPress={decreasePages}
              style={{ backgroundColor: '#47B97A', marginTop: 27 }}
            >
              <ButtonTitle>{'확인 다 했어요'}</ButtonTitle>
            </ButtonCustom>
          </ScrollView>
        </Container>
      )}
    </>
  );
};

export default FuneralPlanResult;

const ChatContainer = styled.View`
  padding-bottom: 84px;
  width: 100%;
  height: 100%;
`;

const MessageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
  margin-top: ${(props) => (props.isUserMessage ? '8px' : '0')};
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
      ? '42px'
      : props.showAvatar && !props.isUserMessage
        ? '-60px'
        : '0px'};

  max-width: 400px;
`;

const MessageText = styled.Text`
  color: ${(props) => (props.isUserMessage ? '#FFF' : '#1A1A1B')};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.isUserMessage ? '700' : '500')};
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const ButtonCustom = styled.TouchableOpacity<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 58px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  border-radius: 8px;
  background: #62d282;

  align-items: center;
  justify-content: center;

  display: flex;
`;

const ButtonTitle = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Title = styled.Text`
  color: #463e3e;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
`;

const FixButton = styled.TouchableOpacity`
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: #e4e4e4;
`;

const FixButtonText = styled.TouchableOpacity``;
