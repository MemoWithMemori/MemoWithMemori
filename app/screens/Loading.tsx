import Container from '@/components/common/Container';
import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import IconMemo from '@assets/Chat/icon-mori.svg';

import IconMemo2 from '@assets/Chat/image-mori.png';
import styled from 'styled-components/native';
import { MaterialIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Loading = ({ navigation: { navigate }, route }) => {
  const navigation: any = useNavigation();
  const [summary, setSummary] = useState();
  const _loadSummary = async () => {
    console.log(route);
    const { params } = route;
    const textsFromUser1 = params.chat
      .filter((item) => item.user._id === 'user1')
      .map((item) => item.text);

    console.log(params.chat);
    console.log(textsFromUser1);

    try {
      const response = await axios.post(
        'https://us-central1-memori-7aab6.cloudfunctions.net/addMemoryCard',
        {
          title: '가장 행복했던\n순간은\n언제인가요?',
          messages: textsFromUser1,
        },
      );
      return response.data; // 서버로부터 받은 응답
    } catch (error) {
      console.error('메시지 전송 실패:', error);
    }
  };

  const onSummary = async () => {
    const apiResponse = await _loadSummary();
    if (apiResponse) {
      console.log(apiResponse);
      navigation.navigate('RememberCards', {
        response: apiResponse,
        show: true,
      });
    }
  };

  useEffect(() => {
    onSummary();
  }, []);

  return (
    <Container
      width="100%"
      height="100%"
      backgroundColor="#F5F5F5"
      justifyContent="center"
    >
      <LoadingIndicators source={IconMemo2}>
        <MaterialIndicator size={150} color={'#8DC76E'} />
        {/* <IconMemo width={130} height={130} /> */}
      </LoadingIndicators>
      <View style={{ flexDirection: 'row' }}>
        <LoadingText>{'모리가 '}</LoadingText>
        <LoadingText style={{ fontWeight: '700' }}>
          {'기억카드를 만들고 '}
        </LoadingText>
        <LoadingText>{'있어요'}</LoadingText>
      </View>
    </Container>
  );
};

export default Loading;

const LoadingIndicators = styled(ImageBackground)`
  width: 100px;
  height: 100px;

  margin-bottom: 32px;
`;

const LoadingText = styled.Text`
  color: #1a1a1b;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
