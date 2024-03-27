import Container from '@/components/common/Container';
import React, { useCallback } from 'react';
import { Text, ImageBackground } from 'react-native';
import IconCard from '@assets/TabBar/icon-tab-home.svg';
import styled from 'styled-components/native';
import ImageCardBackgroundRed from '@assets/EndingNote/Home/image-card-background-red.png';
import ImageCardBackgroundGreen from '@assets/EndingNote/Home/image-card-background-green.png';
import ImageCardBackgroundDarkPurple from '@assets/EndingNote/Home/image-card-background-darkPurple.png';
import ImageCardBackgroundPurple from '@assets/EndingNote/Home/image-card-background-purple.png';
import ImageCardBackgroundOrange from '@assets/EndingNote/Home/image-card-background-orange.png';
import ImageCardBackgroundYellow from '@assets/EndingNote/Home/image-card-background-yellow.png';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';

const EndingNote = () => {
  const navigation: any = useNavigation();
  const goPlan = useCallback(
    () => navigation.navigate('장수사진'),
    [navigation],
  );

  return (
    <ScrollView>
      <Header isLogo={true} />
      <Container
        width="100%"
        height="100%"
        alignItems="flex-start"
        paddingTop="16px"
        backgroundColor="#f5f5f5"
      >
        <Container width="100%" paddingBottom="24px" backgroundColor="#f5f5f5">
          <Container
            width="100%"
            flexDirection="row"
            alignItems="center"
            marginBottom="12px"
            marginLeft="16px"
            backgroundColor="#f5f5f5"
          >
            <Title>{'질문/기억카드 리스트'}</Title>
            <IconCard fill="#3E3E40" />
          </Container>
          <Card source={ImageCardBackgroundRed} width="351px" height="133px">
            <CardText>
              {'대화를 통해\n나의 기억들을 정리하고\n기록해볼까요?'}
            </CardText>
          </Card>
        </Container>
        <Line />
        <Container
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginBottom="12px"
          paddingTop="16px"
          backgroundColor="#f5f5f5"
        >
          <CardWrapContainer>
            <Card source={ImageCardBackgroundGreen} width="343px">
              <CardSubText color="#000">{'사전 연명의료 의향서'}</CardSubText>
            </Card>
            <TouchableOpacity onPress={goPlan}>
              <Card source={ImageCardBackgroundDarkPurple}>
                <CardSubText>{'장례식 계획 세우기'}</CardSubText>
              </Card>
            </TouchableOpacity>
            <Card source={ImageCardBackgroundPurple}>
              <CardSubText>{'장례식 찾기'}</CardSubText>
            </Card>
            <Card source={ImageCardBackgroundOrange}>
              <CardSubText color="#000">
                {'유언장/상속\n계획 세우기'}
              </CardSubText>
            </Card>
            <Card source={ImageCardBackgroundYellow}>
              <CardSubText color="#000">{'유품정리 계획'}</CardSubText>
            </Card>
          </CardWrapContainer>
        </Container>
      </Container>
    </ScrollView>
  );
};
export default EndingNote;

const Title = styled.Text`
  color: #3e3e40;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.68px;
  letter-spacing: -0.4px;
`;

const CardWrapContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 360px;
  flex-wrap: wrap;
`;

const Card = styled(ImageBackground)<{ width?: string }>`
  width: ${(props) => props.width || '163px'};
  height: ${(props) => props.height || '167px'};

  border-top-left-radius: 12px;

  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-left: 8px;
`;

const CardText = styled.Text<{ color?: string }>`
  color: ${(props) => props.color || '#fff'};
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;

  margin-top: 11px;
  margin-left: 15px;
`;

const CardSubText = styled(CardText)`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;

  margin-top: 16px;
  margin-left: 16px;
`;

const Line = styled.View`
  width: 100%;
  height: 8px;
  background-color: #eaeaea;
`;
