import Container from '@/components/common/Container';
import SearchBar from '@/components/common/SearchBar';
import React, { useCallback } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import ImageCardBackgroundBlue from '@assets/Home/image-card-background-blue.png';
import ImageCardBackgroundOrange from '@assets/Home/image-card-background-orange.png';
import ImageCardBackgroundRed from '@assets/Home/image-card-background-red.png';
import IconArrowTopGray from '@assets/common/icon-arrow-top-gray.svg';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

const LandingHome = () => {
  const navigation: any = useNavigation();
  const goChat = useCallback(() => navigation.navigate('Chat'), [navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container
        width="100%"
        height="100%"
        backgroundColor="#f5f5f5"
        paddingTop={'16px'}
        alignItems="flex-start"
      >
        <SearchBar />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Container
            height="100%"
            flexDirection="row"
            backgroundColor="#f5f5f5"
            marginBottom="29px"
            paddingLeft="16px"
          >
            <TouchableOpacity onPress={goChat}>
              <Card source={ImageCardBackgroundBlue}>
                <CardText>
                  {'살면서 가장\n'}
                  <Text style={{ color: '#FCFF61' }}>
                    {'행복했던 순간'}
                    <Text style={{ color: '#Ffffff' }}>
                      {'은\n언제인가요?'}
                    </Text>
                  </Text>
                </CardText>
                <CardButtonContainer width="135px">
                  <CardButtonText>{'질문카드 작성하기'}</CardButtonText>
                </CardButtonContainer>
              </Card>
            </TouchableOpacity>

            <Card source={ImageCardBackgroundRed}>
              <View>
                <CardText>
                  <Text style={{ color: '#FCFF61' }}>
                    {'유언장 작성'}
                    <Text style={{ color: '#Ffffff' }}>
                      {',\n어떤 말을\n남기고 싶으신가요?'}
                    </Text>
                  </Text>
                </CardText>
                <CardSubText style={{ marginTop: 10 }}>
                  {'모리가 도와드릴게요'}
                </CardSubText>
              </View>
              <CardButtonContainer width="147px">
                <CardButtonText>{'유언장 작성 시작하기'}</CardButtonText>
              </CardButtonContainer>
            </Card>

            <Card source={ImageCardBackgroundOrange}>
              <View>
                <CardText>
                  {'같이 '}
                  <Text style={{ color: '#FCFF61' }}>
                    {'장례식\n계획'}
                    <Text style={{ color: '#Ffffff' }}>{'을 세워볼까요?'}</Text>
                  </Text>
                </CardText>
                <CardSubText>
                  {'\n어려운 계획, 모리가 쉽게 도와드릴게요'}
                </CardSubText>
              </View>
              <CardButtonContainer width="132px">
                <CardButtonText>{'장례계획 시작하기'}</CardButtonText>
              </CardButtonContainer>
            </Card>
          </Container>
        </ScrollView>
        <Container width="100%" backgroundColor="#f5f5f5">
          <IconArrowTopGray />
          <ArrowText>{'카드를 눌러서 답해보세요'}</ArrowText>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default LandingHome;

const Card = styled(ImageBackground)`
  width: 268px;
  height: 451px;
  margin-right: 16px;
  padding-top: 28px;
  padding-left: 16px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardText = styled.Text`
  margin-left: 12px;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
`;

const CardSubText = styled.Text`
  color: #ffddd5;

  font-size: 16px;
  font-weight: 400;
  margin-left: 12px;
`;

const CardButtonContainer = styled(TouchableOpacity)<{ width: string }>`
  width: ${(props) => props.width};
  height: 35px;

  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;

  background-color: #313130;

  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
`;

const CardButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
`;

const ArrowText = styled.Text`
  margin-top: 8px;

  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;
