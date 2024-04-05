import Container from '@/components/common/Container';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import IconMemo from '@assets/Chat/icon-mori.svg';

import axios from 'axios';
import IconMemo2 from '@assets/Chat/image-mori.png';
import styled from 'styled-components/native';
import { MaterialIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';

import MakingProfileHeader from '../components/MakingProfile/MakingProfileHeader';
import ImageVip from '@assets/MakeProfile/image-vip.png';
import IconSwitch from '@assets/MakeProfile/icon-switch.svg';

const LoadingPhotos = ({ navigation: { navigate }, route }) => {
  const navigation: any = useNavigation();
  const [base64Image, setBase64Image] = useState<string>();
  const goBack = useCallback(
    () => navigation.navigate('장수사진'),
    [navigation],
  );

  useEffect(() => {
    console.log(route);
    _loadPhotos();

    // let timer = setTimeout(() => {
    //   navigation.navigate('RememberCards');
    // }, 2000);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  const options = {
    method: 'POST',
    url: 'https://face-swap1.p.rapidapi.com/swap',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer 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',
      'X-RapidAPI-Key': 'a3e0156958msh4f5574d49272ee8p1895c7jsned89ec452c94',
      'X-RapidAPI-Host': 'face-swap1.p.rapidapi.com',
    },
    data: {
      source: route.params.photo,
      target:
        'https://firebasestorage.googleapis.com/v0/b/memori-7aab6.appspot.com/o/image%2074.png?alt=media&token=dda9eb99-96a1-4e6e-ba36-1ea8e16b4c7f',
    },
  };

  const _loadPhotos = async () => {
    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setBase64Image('data:image/png;base64,' + response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(base64Image);
  return (
    <>
      {!base64Image ? (
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
          <View>
            <LoadingText style={{ fontWeight: '700' }}>
              {'장수사진을 만들고 있어요.'}
            </LoadingText>
            <LoadingText>{'완료될 때까지 화면을 유지해주세요.'}</LoadingText>
          </View>
        </Container>
      ) : (
        <Container
          width="100%"
          height="100%"
          backgroundColor="#F5F5F5"
          alignItems="flex-start"
        >
          <MakingProfileHeader isShown={false} />
          <Title>{'단 하나뿐인\n장수사진이 만들어졌어요!'}</Title>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 25, marginTop: 12 }}
          >
            <Image
              style={{
                width: 323,
                height: 439,
                borderRadius: 13,
              }}
              source={{ uri: base64Image }}
            />
            <Image
              style={{
                width: 323,
                height: 439,
                borderRadius: 13,
                marginLeft: 16,
                marginRight: 25,
              }}
              source={ImageVip}
            />
          </ScrollView>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <IconSwitch />
          </View>

          <View style={{ width: '100%', alignItems: 'center', marginTop: 25 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 343,
              }}
            >
              <ButtonCustom
                onPress={goBack}
                width="136px"
                style={{ marginRight: 12, backgroundColor: '#DFDFDF' }}
              >
                <ButtonTitle style={{ color: '#B2B2B2' }}>
                  {'다시 만들기'}
                </ButtonTitle>
              </ButtonCustom>
              <ButtonCustom
                onPress={goBack}
                width="204px"
                style={{ backgroundColor: '#47B97A' }}
              >
                <ButtonTitle>{'모두 저장하기'}</ButtonTitle>
              </ButtonCustom>
            </View>
          </View>
        </Container>
      )}
    </>
  );
};

export default LoadingPhotos;

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

const Title = styled.Text`
  color: #484848;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.5px;

  margin-left: 25px;
`;

const ButtonCustom = styled.TouchableOpacity<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 58px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  border-radius: 100px;
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
