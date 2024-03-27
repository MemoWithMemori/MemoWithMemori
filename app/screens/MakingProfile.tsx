import Header from '@/components/Header';
import Container from '@/components/common/Container';
import React, { useCallback } from 'react';
import { Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import ImageBackgroundIntroduceProfile from '@assets/MakeProfile/image-background-introduce-profile.png';
import IconCategory1 from '@assets/MakeProfile/icon-category-1.svg';
import IconCategory2 from '@assets/MakeProfile/icon-category-2.svg';
import IconArrowRightGray from '@assets/common/icon-arrow-right-gray.svg';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MakingProfile = () => {
  const navigation: any = useNavigation();
  const goMakieProfile = useCallback(
    () => navigation.navigate('MakingProfileDetail'),
    [navigation],
  );

  return (
    <ScrollView>
      <Container backgroundColor="#f5f5f5">
        <Header isLogo={false} />
        <Card source={ImageBackgroundIntroduceProfile}>
          <CardTitle>{'아직 장수사진을 찍으신 적이 없으신가요?'}</CardTitle>
          <CardButton>
            <CardButtonText onPress={goMakieProfile}>
              {'지금 시작하기'}
            </CardButtonText>
          </CardButton>
        </Card>
        <Container alignItems="flex-start" backgroundColor="#f5f5f5">
          <Container
            width="336px"
            flexDirection="row"
            marginBottom="16px"
            marginTop="40px"
            backgroundColor="#f5f5f5"
          >
            <IconCategory1 />
            <Container
              alignItems="flex-start"
              marginLeft="14px"
              backgroundColor="#f5f5f5"
            >
              <Title>{'고화질 AI'}</Title>
              <SubTitle>{'기존의 사진을 고화질로 바꿔보세요'}</SubTitle>
            </Container>
            <Container marginLeft="auto">
              <IconArrowRightGray />
            </Container>
          </Container>
          <Container
            width="336px"
            flexDirection="row"
            marginBottom="16px"
            backgroundColor="#f5f5f5"
          >
            <IconCategory2 />
            <Container
              alignItems="flex-start"
              marginLeft="14px"
              backgroundColor="#f5f5f5"
            >
              <Title>{'표정변화 AI'}</Title>
              <SubTitle>{'고화질사진을 만들어보세요'}</SubTitle>
            </Container>
            <Container marginLeft="auto">
              <IconArrowRightGray />
            </Container>
          </Container>
        </Container>
      </Container>
    </ScrollView>
  );
};

export default MakingProfile;

const Card = styled(ImageBackground)`
  width: 344px;
  height: 465px;
  margin-top: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 28px;
`;

const CardTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;

  margin-bottom: 10px;
`;

const CardButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 296px;
  height: 63px;
  border-radius: 100px;
  border: 1px solid #ffefee;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

const CardButtonText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
`;

const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const SubTitle = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;
