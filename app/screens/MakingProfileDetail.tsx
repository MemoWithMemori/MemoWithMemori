import MakingProfileHeader from '@/components/MakingProfile/MakingProfileHeader';
import Container from '@/components/common/Container';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import IconBoy from '@assets/MakeProfile/icon-boy.svg';
import IconGirl from '@assets/MakeProfile/icon-girl.svg';
import { Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import IconCircleCheck from '@assets/MakeProfile/icon-circle-check.svg';
import imageBackgroundClothes1 from '@assets/MakeProfile/clothes/image-clothes-background-1.png';
import imageBackgroundClothes2 from '@assets/MakeProfile/clothes/image-clothes-background-2.png';
import imageBackgroundClothes3 from '@assets/MakeProfile/clothes/image-clothes-background-3.png';
import imageBackgroundClothes4 from '@assets/MakeProfile/clothes/image-clothes-background-4.png';
import imageBackgroundClothes5 from '@assets/MakeProfile/clothes/image-clothes-background-5.png';
import imageBackgroundClothes6 from '@assets/MakeProfile/clothes/image-clothes-background-6.png';
import imageBackgroundFace1 from '@assets/MakeProfile/face/image-background-face-1.png';
import imageBackgroundFace2 from '@assets/MakeProfile/face/image-background-face-2.png';
import imageBackgroundFace3 from '@assets/MakeProfile/face/image-background-face-3.png';
import imageBackgroundFace4 from '@assets/MakeProfile/face/image-background-face-4.png';

import imageBackground1 from '@assets/MakeProfile/background/image-background-1.png';
import imageBackground2 from '@assets/MakeProfile/background/image-background-2.png';
import imageBackground3 from '@assets/MakeProfile/background/image-background-3.png';
import imageBackground4 from '@assets/MakeProfile/background/image-background-4.png';
import imageBackground5 from '@assets/MakeProfile/background/image-background-5.png';
import imageBackground6 from '@assets/MakeProfile/background/image-background-6.png';

import imageExample1 from '@assets/MakeProfile/example/image-example-photo-1.png';
import imageExample2 from '@assets/MakeProfile/example/image-example-photo-2.png';
import imageExample3 from '@assets/MakeProfile/example/image-example-photo-3.png';
import imageExample4 from '@assets/MakeProfile/example/image-example-photo-4.png';
import imageExample5 from '@assets/MakeProfile/example/image-example-photo-5.png';
import imageExample6 from '@assets/MakeProfile/example/image-example-photo-6.png';
import imageExample7 from '@assets/MakeProfile/example/image-example-photo-7.png';
import imageExample8 from '@assets/MakeProfile/example/image-example-photo-8.png';

import IconCheckLight from '@assets/MakeProfile/icon-circle-check-lightGreen.svg';
import IconCheckX from '@assets/MakeProfile/icon-circle-x.svg';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const MakingProfileDetail = () => {
  const [page, setPage] = useState<number>(0);
  const [selectedType, setSelectedType] = useState({
    gender: null,
    outfit: null,
    face: null,
    background: null,
  });

  const handleSelection = (type, value) => {
    setSelectedType((prev) => ({
      ...prev,
      [type]: prev[type] === value ? null : value,
    }));
  };

  const increasePages = () => {
    setPage((page) => page + 1);
  };

  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState('');

  const navigation: any = useNavigation();

  // 이미지 가져오기
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
        selectionLimit: 10,
      },
      (response) => {
        // 사용자가 선택을 취소한 경우
        if (response.didCancel) {
          return;
        }
        // 오류가 발생한 경우
        else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
          return; // 여기서 함수 실행을 종료해야 합니다.
        }

        uploadImage(response.assets[0].uri);

        // 선택된 이미지 처리
        // setResponse(response.assets[0].uri);
        // setImageFile(response.assets[0].base64);

        console.log(response);

        // 이미지 상태 업데이트 후에 화면 이동 처리
        // setState는 비동기적으로 작동하기 때문에, setState의 콜백을 사용하거나
        // useEffect를 이용해 imageFile 상태의 변화를 감지하고 navigate를 호출합니다.
        // 여기서는 직접 navigation.navigate를 호출하지 않고,
        // 상태 업데이트를 기다린 후에 이동해야 합니다.
      },
    ).catch((error) => console.log(error));
  };

  const uploadImage = async (imageUri) => {
    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg', // 또는 선택한 이미지의 실제 타입
      name: 'upload.jpg', // 또는 다른 이름
    });
    formData.append('api_key', '321349956876236');
    formData.append('upload_preset', 'nvhjcbt2'); // Cloudinary에서 설정한 업로드 프리셋

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dtqwwxqk8/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const imageUrl = response.data.secure_url; // 업로드된 이미지의 URL
      setImageFile(imageUrl);
    } catch (error) {
      console.error('Error uploading image: ', error);
      return null;
    }
  };

  // navigation.navigate 호출을 위해 useEffect 사용
  useEffect(() => {
    console.log(response);
    // console.log(imageFile);
    if (imageFile) {
      navigation.navigate('LoadingPhotos', { photo: imageFile });
    }
  }, [imageFile]); // imageFile 상태가 변경될 때만 실행됩니다.

  return (
    <Container backgroundColor="#f5f5f5" paddingLeft="16px" paddingRight="16px">
      <MakingProfileHeader />
      {page === 0 ? (
        <ScrollView style={{ height: '100%', width: '100%' }}>
          <Container
            width="100%"
            alignItems="flex-start"
            backgroundColor="#f5f5f5"
          >
            <Title>{'성별이 어떻게 되세요?'}</Title>
            <ContainetCustom
              selected={selectedType.gender === '남성'}
              onPress={() => handleSelection('gender', '남성')}
            >
              <IconBoy
                fill={selectedType.gender !== '남성' ? '#353437' : '#ffffff'}
              />
              <SubTitle selected={selectedType.gender === '남성'}>
                {'남성'}
              </SubTitle>
              <View
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 16,
                  display: `${selectedType.gender === '남성' ? 'flex' : 'none'}`,
                }}
              >
                <IconCircleCheck />
              </View>
            </ContainetCustom>
            <ContainetCustom
              selected={selectedType.gender === '여성'}
              onPress={() => handleSelection('gender', '여성')}
            >
              <IconGirl
                fill={selectedType.gender !== '여성' ? '#353437' : '#ffffff'}
              />
              <SubTitle selected={selectedType.gender === '여성'}>
                {'여성'}
              </SubTitle>
              <View
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 16,
                  display: `${selectedType.gender === '여성' ? 'flex' : 'none'}`,
                }}
              >
                <IconCircleCheck />
              </View>
            </ContainetCustom>
            {selectedType.gender && (
              <ButtonCustom onPress={increasePages} marginTop="60px">
                <ButtonTitle>{'다음'}</ButtonTitle>
              </ButtonCustom>
            )}
          </Container>
        </ScrollView>
      ) : page === 1 ? (
        <ScrollView>
          <Container
            width="100%"
            alignItems="flex-start"
            backgroundColor="#f5f5f5"
          >
            <Title>{'마음에 드는 의상을 골라주세요.'}</Title>

            <CardsContainer>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷1')}
              >
                <CardContainer
                  source={imageBackgroundClothes1}
                  selected={selectedType.outfit === '옷1'}
                >
                  <Overlay selected={selectedType.outfit === '옷1'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷1' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷2')}
              >
                <CardContainer
                  source={imageBackgroundClothes2}
                  selected={selectedType.outfit === '옷2'}
                >
                  <Overlay selected={selectedType.outfit === '옷2'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷2' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷3')}
              >
                <CardContainer
                  source={imageBackgroundClothes3}
                  selected={selectedType.outfit === '옷3'}
                >
                  <Overlay selected={selectedType.outfit === '옷3'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷3' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷4')}
              >
                <CardContainer
                  source={imageBackgroundClothes4}
                  selected={selectedType.outfit === '옷4'}
                >
                  <Overlay selected={selectedType.outfit === '옷4'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷4' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷5')}
              >
                <CardContainer
                  source={imageBackgroundClothes5}
                  selected={selectedType.outfit === '옷5'}
                >
                  <Overlay selected={selectedType.outfit === '옷5'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷5' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('outfit', '옷6')}
              >
                <CardContainer
                  source={imageBackgroundClothes6}
                  selected={selectedType.outfit === '옷6'}
                >
                  <Overlay selected={selectedType.outfit === '옷6'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.outfit === '옷6' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
            </CardsContainer>
            {selectedType.outfit && (
              <ButtonCustom marginTop={'37px'} onPress={increasePages}>
                <ButtonTitle>{'다음'}</ButtonTitle>
              </ButtonCustom>
            )}
          </Container>
        </ScrollView>
      ) : page === 2 ? (
        <ScrollView>
          <Container
            width="100%"
            alignItems="flex-start"
            backgroundColor="#f5f5f5"
          >
            <Title>{'어떤 표정이 가장 마음에 드시나요?'}</Title>
            <CardsContainer>
              <TouchableOpacity
                onPress={() => handleSelection('face', '얼굴1')}
              >
                <CardFaceContainer
                  source={imageBackgroundFace1}
                  selected={selectedType.face === '얼굴1'}
                >
                  <Overlay selected={selectedType.face === '얼굴1'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.face === '얼굴1' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardFaceContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('face', '얼굴2')}
              >
                <CardFaceContainer
                  source={imageBackgroundFace2}
                  selected={selectedType.face === '얼굴2'}
                >
                  <Overlay selected={selectedType.face === '얼굴2'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.face === '얼굴2' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardFaceContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('face', '얼굴3')}
              >
                <CardFaceContainer
                  source={imageBackgroundFace3}
                  selected={selectedType.face === '얼굴3'}
                >
                  <Overlay selected={selectedType.face === '얼굴3'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.face === '얼굴3' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardFaceContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('face', '얼굴4')}
              >
                <CardFaceContainer
                  source={imageBackgroundFace4}
                  selected={selectedType.face === '얼굴4'}
                >
                  <Overlay selected={selectedType.face === '얼굴4'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.face === '얼굴4' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardFaceContainer>
              </TouchableOpacity>
            </CardsContainer>
            {selectedType.face && (
              <ButtonCustom marginTop={'37px'} onPress={increasePages}>
                <ButtonTitle>{'다음'}</ButtonTitle>
              </ButtonCustom>
            )}
          </Container>
        </ScrollView>
      ) : page === 3 ? (
        <ScrollView>
          <Container
            width="100%"
            alignItems="flex-start"
            backgroundColor="#f5f5f5"
          >
            <Title>{'어떤 배경에서 찍고 싶으세요?'}</Title>

            <CardsContainer>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경1')}
              >
                <CardContainer
                  source={imageBackground1}
                  selected={selectedType.background === '배경1'}
                >
                  <Overlay selected={selectedType.background === '배경1'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경1' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경2')}
              >
                <CardContainer
                  source={imageBackground2}
                  selected={selectedType.background === '배경2'}
                >
                  <Overlay selected={selectedType.background === '배경2'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경2' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경3')}
              >
                <CardContainer
                  source={imageBackground3}
                  selected={selectedType.background === '배경3'}
                >
                  <Overlay selected={selectedType.background === '배경3'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경3' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경4')}
              >
                <CardContainer
                  source={imageBackground4}
                  selected={selectedType.background === '배경4'}
                >
                  <Overlay selected={selectedType.background === '배경4'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경4' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경5')}
              >
                <CardContainer
                  source={imageBackground5}
                  selected={selectedType.outfit === '배경5'}
                >
                  <Overlay selected={selectedType.background === '배경5'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경5' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelection('background', '배경6')}
              >
                <CardContainer
                  source={imageBackground6}
                  selected={selectedType.background === '배경6'}
                >
                  <Overlay selected={selectedType.background === '배경6'} />
                  <View
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      display: `${selectedType.background === '배경6' ? 'flex' : 'none'}`,
                    }}
                  >
                    <IconCircleCheck />
                  </View>
                </CardContainer>
              </TouchableOpacity>
            </CardsContainer>
            {selectedType.background && (
              <ButtonCustom marginTop={'37px'} onPress={increasePages}>
                <ButtonTitle>{'다음'}</ButtonTitle>
              </ButtonCustom>
            )}
          </Container>
        </ScrollView>
      ) : page === 4 ? (
        <Container
          width="100%"
          alignItems="flex-start"
          backgroundColor="#F5F5F5"
        >
          <ExampleTitleText>{'좋은 사진 예시'}</ExampleTitleText>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Container backgroundColor="#F5F5F5">
              <Container flexDirection="row" backgroundColor="#F5F5F5">
                <ExampleCard source={imageExample1}>
                  <IconCheckLight />
                </ExampleCard>
                <ExampleCard source={imageExample2}>
                  <IconCheckLight />
                </ExampleCard>
                <ExampleCard source={imageExample3}>
                  <IconCheckLight />
                </ExampleCard>
                <ExampleCard source={imageExample4}>
                  <IconCheckLight />
                </ExampleCard>
              </Container>
            </Container>
          </ScrollView>
          <Text
            style={{
              marginTop: 8,
              color: '#7D7D7D',
              fontSize: 13,
              lineHeight: 19.5,
              fontWeight: '800',
              marginBottom: 30,
            }}
          >
            {
              '· 얼굴이 선명하게 나온 사진\n· 보정하지 않은 원본 사진\n· 다양한 각도/배경/표정의 사진'
            }
          </Text>
          <ExampleTitleText>{'나쁜 사진 예시'}</ExampleTitleText>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Container backgroundColor="#F5F5F5">
              <Container flexDirection="row" backgroundColor="#F5F5F5">
                <ExampleCard source={imageExample5}>
                  <IconCheckX />
                </ExampleCard>
                <ExampleCard source={imageExample6}>
                  <IconCheckX />
                </ExampleCard>
                <ExampleCard source={imageExample7}>
                  <IconCheckX />
                </ExampleCard>
                <ExampleCard source={imageExample8}>
                  <IconCheckX />
                </ExampleCard>
              </Container>
            </Container>
          </ScrollView>
          <Text
            style={{
              marginTop: 8,
              color: '#7D7D7D',
              fontSize: 13,
              lineHeight: 19.5,
              fontWeight: '800',
            }}
          >
            {
              '· 아동 또는 노출이 심한 사진\n· 마스크/안경/선글라스 등으로 얼굴이 가려진 사진\n· 얼굴이 작게 나온 전신사진\n· 단체 사진 또는 흑백 사진'
            }
          </Text>
          <ButtonCustom marginTop={'33px'} onPress={onSelectImage}>
            <ButtonTitle>{'사진 올리기'}</ButtonTitle>
          </ButtonCustom>
        </Container>
      ) : (
        <Container>
          <Text>{'Not found'}</Text>
        </Container>
      )}
    </Container>
  );
};

export default MakingProfileDetail;

const Title = styled.Text`
  color: #474747;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const SubTitle = styled.Text`
  color: ${(props) => (props.selected ? '#fff' : '#353437')};
  font-size: 24px;
  font-weight: 700;
`;

const ContainetCustom = styled.TouchableOpacity`
  width: 100%;
  height: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.selected ? '#595959' : '#ffffff')};
`;

const ButtonCustom = styled.TouchableOpacity`
  width: 100%;
  height: 58px;
  margin-top: ${(props) => props.marginTop};
  border-radius: 8px;
  background: #62d282;

  align-items: center;
  justify-content: center;

  display: flex;
  margin-bottom: 30px;
`;

const ButtonTitle = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const CardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 360px;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const CardContainer = styled.ImageBackground`
  width: 169px;
  height: 170px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const CardFaceContainer = styled(CardContainer)`
  height: 240px;
`;

const Overlay = styled(View)`
  flex: 1;
  border-radius: 8px;
  background-color: ${(props) =>
    props.selected ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

const ExampleTitleText = styled.Text`
  color: #6f6f6f;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;

  margin-bottom: 8px;
`;

const ExampleCard = styled.ImageBackground`
  width: 104px;
  height: 135px;

  margin-right: 3px;
  margin-left: 3px;

  display: flex;
  flex-direction: column-reverse;
  padding-left: 75px;
  padding-bottom: 11px;
`;
