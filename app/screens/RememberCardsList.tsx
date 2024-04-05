import RememberCardsHeader from '@/components/RememberCards/RememberCardsHeader';
import Container from '@/components/common/Container';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, View } from 'react-native';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const RememberCardsList = () => {
  const navigation: any = useNavigation();
  const [cards, setCards] = useState({});
  useEffect(() => {
    _loadData();
  }, []);

  const onPress = (obj) => {
    navigation.navigate('RememberCards', { response: obj, show: false });
  };

  const _loadData = async () => {
    try {
      const response = await axios.get(
        'https://memori-7aab6-default-rtdb.firebaseio.com/memoryCard.json',
      );
      console.log(response.data);
      setCards(response.data);
      return response.data; // 서버로부터 받은 응답
    } catch (error) {
      console.error('메시지 전송 실패:', error);
    }
  };

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
          <CardContainer style={{ flexDirection: 'row' }}>
            {Object.values(cards).map((obj: any, index: number) => {
              return (
                <TouchableOpacity
                  style={{ borderTopLeftRadius: 20 }}
                  onPress={() => onPress(obj)}
                  key={index}
                >
                  <Card
                    imageStyle={{ borderRadius: 10 }}
                    source={{ uri: obj.imgUrl }}
                    resizeMode="stretch"
                  >
                    <CardText>{obj.title}</CardText>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </CardContainer>
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
              <CardColorText>
                {'나에게\n힘과 기쁨을 \n주는 것은\n무엇인가요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#BBD6FF'}>
              <CardColorText>
                {'가장 친했던\n친구는\n누구인가요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#D0C4FF'}>
              <CardColorText>
                {'가장 기억에\n남는 영화가\n있나요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#ACCDFE'}>
              <CardColorText>
                {'가장 힘들었던\n시기가\n있었나요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#FFE3AE'}>
              <CardColorText>
                {'요즘의 제일\n관심사가\n무엇인가요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#ACCDFE'}>
              <CardColorText>{'나에게\n죽음이란?'}</CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#B392FFC1'}>
              <CardColorText>
                {'가장 힘들었던\n시기가\n있었나요?'}
              </CardColorText>
            </CardColor>
            <CardColor backgroundColor={'#63E095'}>
              <CardColorText>{'지금 가고싶은\n여행지는?'}</CardColorText>
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
  padding-right: 11px;
  margin-right: 4px;
  margin-left: 4px;
  border-radius: 20px;

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
