import Container from '@/components/common/Container';
import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import IconMemo from '@assets/Chat/icon-mori.svg';

import IconMemo2 from '@assets/Chat/image-mori.png';
import styled from 'styled-components/native';
import { MaterialIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.navigate('RememberCards');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
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
