import Container from '@/components/common/Container';
import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import IconMemo from '@assets/Chat/icon-mori.svg';

import IconMemo2 from '@assets/Chat/image-mori.png';
import styled from 'styled-components/native';
import { MaterialIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';

// import Replicate from 'replicate';
// const replicate = new Replicate();

const LoadingPhotos = ({ navigation: { navigate }, route }) => {
  const navigation: any = useNavigation();

  // useEffect(() => {
  //   console.log(route);
  //   console.log(route.params.photo.assets[0].uri);
  //   _loadPhotos();

  //   // let timer = setTimeout(() => {
  //   //   navigation.navigate('RememberCards');
  //   // }, 2000);
  //   // return () => {
  //   //   clearTimeout(timer);
  //   // };
  // }, []);

  // const _loadPhotos = async () => {
  //   const input = {
  //     target_image:
  //       'https://replicate.delivery/pbxt/JN97ny6RmjfrxizbgyHnPGGP8Kxzw6UI20ekarOg7dbo02Pi/elon.jpg',
  //     swap_image: route.params.photo.assets[0].uri,
  //   };

  //   const output = await replicate.run(
  //     'lucataco/faceswap:9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d',
  //     { input },
  //   );
  // };

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
        <LoadingText>{'장수사진을 만들고 있어요.'}</LoadingText>
        <LoadingText style={{ fontWeight: '700' }}>
          {'기억카드를 만들고 '}
        </LoadingText>
        <LoadingText>{'완료될 때까지 화면을 유지해주세요.'}</LoadingText>
      </View>
    </Container>
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
