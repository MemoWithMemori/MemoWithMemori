import Container from '@/components/common/Container';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageBackgroundMock from '@assets/RememberCards/image-background.png';
import IconEdit from '@assets/common/icon-edit.svg';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  shareButton: {
    marginRight: 20, // 오른쪽 여백 조정
  },
  shareButtonText: {
    color: '#3E3E40', // 텍스트 색상
    fontSize: 16, // 폰트 크기
  },
});

const RememberCards = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('공유하기 버튼 클릭')}
          style={styles.shareButton}
        >
          <Text style={styles.shareButtonText}>공유 하기</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container
        width="100%"
        height="100%"
        backgroundColor="#f5f5f5"
        paddingTop={'16px'}
        alignItems="flex-start"
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Container
            height="100%"
            flexDirection="row"
            backgroundColor="#f5f5f5"
            marginBottom="29px"
            paddingLeft="16px"
          >
            <Card source={ImageBackgroundMock}>
              <CardText>
                {'홍길동님의\n살면서 가장\n행복했던 순간은\n언제인가요?'}
              </CardText>
            </Card>

            <Container
              width="343px"
              height="504px"
              paddingLeft="23px"
              paddingTop="23px"
              marginRight="16px"
            >
              <View>
                <CardAnswerText>
                  {
                    '가장 행복했던 순간은요,\n\n가족이 다 같이 모여서 웃고 이야기할 때예요. 자식들이 건강하고 행복하게 자라는 걸 보는 거, 그게 저에겐 최고의 행복이죠. 그런 순간들이 제 인생을 빛나게 만들어요.'
                  }
                </CardAnswerText>
              </View>
            </Container>
          </Container>
        </ScrollView>
        <Container
          backgroundColor="#f5f5f5"
          flexDirection="row"
          width="100%"
          justifyContent="center"
        >
          <Container
            flexDirection="row"
            justifyContent="center"
            backgroundColor="#EAEAEA"
            marginRight="4px"
            width="129px"
            height="56px"
            borderBottomLeftRadius="9999px"
            borderTopLeftRadius="9999px"
            borderTopRightRadius="9999px"
            borderBottomRightRadius="9999px"
          >
            <CardEditButtonText color="#1A1A1B" style={{ marginRight: 4 }}>
              {'답변 수정'}
            </CardEditButtonText>
            <IconEdit />
          </Container>
          <Container
            flexDirection="row"
            justifyContent="center"
            width="202px"
            height="56px"
            backgroundColor="#47B97A"
            borderBottomLeftRadius="9999px"
            borderTopLeftRadius="9999px"
            borderTopRightRadius="9999px"
            borderBottomRightRadius="9999px"
          >
            <CardEditButtonText color="#FFF">
              {'다시 대화하기'}
            </CardEditButtonText>
          </Container>
        </Container>
        <Container width="100%" marginTop="40px" backgroundColor="#f5f5f5">
          <Container
            width="346px"
            alignItems="flex-start"
            backgroundColor="#f5f5f5"
          >
            <Title>{'다른 질문에도 답해볼까요?'}</Title>
            <Container
              flexDirection="row"
              width="100%"
              justifyContent="center"
              marginTop="12px"
              backgroundColor="#f5f5f5"
            >
              <Container
                backgroundColor="#D0BBFF"
                width="110px"
                height="140px"
                borderBottomLeftRadius="10px"
                borderBottomRightRadius="10px"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                marginRight="8px"
                alignItems="flex-start"
                paddingTop="12px"
                paddingLeft="12px"
              >
                <SmallCardTitle>{'지금 가고싶은\n여행지는?'}</SmallCardTitle>
              </Container>
              <Container
                backgroundColor="#86B7FF"
                width="110px"
                height="140px"
                borderBottomLeftRadius="10px"
                borderBottomRightRadius="10px"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                marginRight="8px"
                alignItems="flex-start"
                paddingTop="12px"
                paddingLeft="12px"
              >
                <SmallCardTitle>{'나에게\n죽음이란?'}</SmallCardTitle>
              </Container>
              <Container
                backgroundColor="#D0C4FF"
                width="110px"
                height="140px"
                borderBottomLeftRadius="10px"
                borderBottomRightRadius="10px"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                alignItems="flex-start"
                paddingTop="12px"
                paddingLeft="12px"
              >
                <SmallCardTitle>
                  {'가장 친했던\n친구는\n누구인가요?'}
                </SmallCardTitle>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default RememberCards;

const Card = styled(ImageBackground)`
  width: 343px;
  height: 504px;
  margin-right: 8px;
  padding-top: 28px;
  padding-left: 28px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardText = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
`;

const CardAnswerText = styled.Text`
  width: 297px;
  color: #3e3e40;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;
`;

const CardEditButtonText = styled.Text`
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.4px;
`;

const SmallCardTitle = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.4px;
`;