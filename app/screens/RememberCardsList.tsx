import RememberCardsHeader from '@/components/RememberCards/RememberCardsHeader';
import Container from '@/components/common/Container';
import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

import ImageBackgroundMock from '@assets/RememberCards/image-background-list.png';
import { ScrollView } from 'react-native-gesture-handler';

const RememberCardsList = () => {
  return (
    <ScrollView>
      <Container
        paddingLeft="10px"
        paddingRight="10px"
        backgroundColor="#F5F5F5"
      >
        <RememberCardsHeader />
        <Container
          width="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          marginBottom="37px"
          backgroundColor="#F5F5F5"
        >
          <Container
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="#F5F5F5"
          >
            <Text>{'기억 카드'}</Text>
            <SubText>{'더보기'}</SubText>
          </Container>
          <Card source={ImageBackgroundMock}>
            <CardText>{'가장 행복했던 순간은\n언제인가요?'}</CardText>
          </Card>
        </Container>
        <Container>
          <CardContainer backgroundColor="#F5F5F5">
            <Container
              width="100%"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="12px"
              backgroundColor="#F5F5F5"
            >
              <Text>{'질문 카드'}</Text>
              <SubText>{'더보기'}</SubText>
            </Container>
            <CardColor backgroundColor={'#D0BBFF'}>
              <CardColorText>{'지금 가고싶은\n여행지는?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#BBD6FF'}>
              <CardColorText>{'나에게\n죽음이란?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#D0C4FF'}>
              <CardColorText>
                {'가장 친했던\n친구는\n누구인가요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#ACCDFE'}>
              <CardColorText>
                {'가장 기억에\n남는 영화가\n있나요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#FFE3AE'}>
              <CardColorText>{'어릴적\n꿈은\n무엇이었나요?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#ACCDFE'}>
              <CardColorText>{'지금 가고싶은\n여행지는?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#B392FFC1'}>
              <CardColorText>
                {'가장 힘들었던\n시기가\n있었나요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#63E095'}>
              <CardColorText>{'기억에 남는\n장소가\n있나요?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#FFE3AE'}>
              <CardColorText>
                {'요즘의 제일\n관심사가\n무엇인가요?'}
              </CardColorText>
            </CardColor>
          </CardContainer>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default RememberCardsList;

const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.5px;
`;

const SubText = styled.Text`
  color: #a3a3a3;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.4px;
`;

const Card = styled(ImageBackground)`
  width: 110px;
  height: 140px;
  margin-top: 12px;
  padding-top: 12px;
  padding-left: 11px;

  display: flex;
  flex-direction: column;
`;

const CardText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const CardColor = styled.View`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#583f91'};

  margin-left: 4px;
  margin-right: 4px;
  margin-top: 6px;
  margin-bottom: 6px;

  width: 110px;
  height: 140px;
  border-radius: 10.14px;

  padding-top: 12px;
  padding-left: 12px;
`;

const CardContainer = styled.View`
  width: 359px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CardColorText = styled(CardText)`
  color: #000000;
`;
