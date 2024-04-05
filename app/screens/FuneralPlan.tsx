import PlanningFuneralHeader from '@/components/PlanningFuneral/PlanningFuneralHeader';
import Container from '@/components/common/Container';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import IconCircleCheck from '@assets/MakeProfile/icon-circle-check.svg';
import IconStrokeLineWidth from '@assets/common/icon-stroke-line-width.svg';
import IconStrokeLineHeight from '@assets/common/icon-stroke-line-height.svg';
import IconSummarize from '@assets/FuneralPlan/icon-summarize.svg';
import IconMemo from '@assets/Chat/icon-mori.svg';
import IconArrowLeft from '@assets/common/icon-arrow-left-gray.svg';
import IconArrowRight from '@assets/common/icon-arrow-right-dark.svg';
import IconHelp from '@assets/FuneralPlan/icon-help.svg';
import IconUpload from '@assets/FuneralPlan/icon-upload.svg';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { planState } from '../stores/recoil/planState';
import { planShowState } from '@/stores/recoil/planShowState';
import { launchImageLibrary } from 'react-native-image-picker';

const screenHeight = Dimensions.get('window').height;
const calculateHeight = screenHeight - 80;

const styles = StyleSheet.create({
  shareButton: {
    marginRight: 20, // 오른쪽 여백 조정
  },
  shareButtonText: {
    color: '#47B97A', // 텍스트 색상
    fontSize: 16, // 폰트 크기
  },
});

const FuneralPlan = () => {
  const [pages, setPages] = useState<number>(0);
  const [initialText, setInitialText] = useState<string>();
  const [tex1, setText1] = useState('');

  const [text2, setText2] = useState('');

  const [text3, setText3] = useState('');

  const [text4, setText4] = useState('');

  const [plans, setPlans] = useRecoilState(planState);
  const [planShow, setPlanShow] = useRecoilState(planShowState);

  const scrollViewRef1: any = useRef();
  const scrollViewRef2: any = useRef();
  const scrollViewRef3: any = useRef();
  const scrollViewRef4: any = useRef();

  const [response, setResponse] = useState();
  const [imageFile, setImageFile] = useState<string>();

  const handleSelection = (type, value) => {
    setPlans((prev) => ({
      ...prev,
      [type]: prev[type] === value ? null : value,
    }));
  };

  const navigation: any = useNavigation();
  const goNavigate = useCallback(
    () => navigation.navigate('FuneralPlanLoading'),
    [navigation],
  );

  const increasePages = () => {
    setPages((page) => page + 1);
  };

  const decreasePages = () => {
    setPages((page) => page - 1);
  };

  useEffect(() => {
    if (plans.plan6) {
      // plans.plan6가 존재하면 3초 후에 두 번째 UI를 보여주기 위한 상태 업데이트
      const timer = setTimeout(() => {
        setPlanShow((prev) => ({
          ...prev,
          ['plan6_shown']: true,
        }));
      }, 1500); // 3000ms = 3초

      // 컴포넌트가 언마운트될 때 타이머를 정리
      return () => clearTimeout(timer);
    }
  }, [plans.plan6]); // plans.plan6가 변경될 때마다 이 useEffect가 실행됩니다.

  useEffect(() => {
    if (plans.plan6_1) {
      // plans.plan6가 존재하면 3초 후에 두 번째 UI를 보여주기 위한 상태 업데이트
      const timer = setTimeout(() => {
        setPlanShow((prev) => ({
          ...prev,
          ['plan6_1_shown']: true,
        }));
      }, 1500); // 3000ms = 3초

      // 컴포넌트가 언마운트될 때 타이머를 정리
      return () => clearTimeout(timer);
    }
  }, [plans.plan6_1]); // plans.plan6가 변경될 때마다 이 useEffect가 실행됩니다.

  useEffect(() => {
    if (plans.plan11) {
      // plans.plan6가 존재하면 3초 후에 두 번째 UI를 보여주기 위한 상태 업데이트
      const timer = setTimeout(() => {
        setPlanShow((prev) => ({
          ...prev,
          ['plan11_shown']: true,
        }));
      }, 1500); // 3000ms = 3초

      // 컴포넌트가 언마운트될 때 타이머를 정리
      return () => clearTimeout(timer);
    }
  }, [plans.plan11]); // plans.plan6가 변경될 때마다 이 useEffect가 실행됩니다.

  useEffect(() => {
    if (plans.plan11_1) {
      // plans.plan6가 존재하면 3초 후에 두 번째 UI를 보여주기 위한 상태 업데이트
      const timer = setTimeout(() => {
        setPlanShow((prev) => ({
          ...prev,
          ['plan11_1_shown']: true,
        }));
      }, 1500); // 3000ms = 3초

      // 컴포넌트가 언마운트될 때 타이머를 정리
      return () => clearTimeout(timer);
    }
  }, [plans.plan11_1]); // plans.plan6가 변경될 때마다 이 useEffect가 실행됩니다.

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
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

        // 선택된 이미지 처리
        setResponse(response.assets[0].fileName);
        setImageFile('data:image/png;base64,' + response.assets[0].base64);
        handleSelection('plan7', '파일선택');

        // 이미지 상태 업데이트 후에 화면 이동 처리
        // setState는 비동기적으로 작동하기 때문에, setState의 콜백을 사용하거나
        // useEffect를 이용해 imageFile 상태의 변화를 감지하고 navigate를 호출합니다.
        // 여기서는 직접 navigation.navigate를 호출하지 않고,
        // 상태 업데이트를 기다린 후에 이동해야 합니다.

        console.log(response);
      },
    ).catch((error) => console.log(error));
  };

  return (
    <View style={{ flex: 1, height: '100%' }}>
      {pages === 0 ? (
        <ScrollView>
          <Container
            height="100%"
            backgroundColor="#f5f5f5"
            paddingLeft="16px"
            paddingRight="16px"
          >
            <PlanningFuneralHeader />
            <CategoriesContainer>
              <CategoryContainer
                onPress={() => setPages(2)}
                style={{ marginRight: 22 }}
                isPlan={plans.plan1}
              >
                <View>
                  <CategoryText>{'01'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'장례형식'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan1 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 47, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan2}
                onPress={() => setPages(3)}
              >
                <View>
                  <CategoryText>{'02'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'부고 범위'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan2 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 50, left: 253, zIndex: -1 }}>
                <IconStrokeLineHeight />
              </StrokeWidth>
              <CategoryContainer
                style={{ marginRight: 22 }}
                isPlan={plans.plan4}
                onPress={() => setPages(5)}
              >
                <View>
                  <CategoryText>{'04'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'수의 선택'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan4 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 137, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan3}
                onPress={() => setPages(4)}
              >
                <View>
                  <CategoryText>{'03'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'장례용품'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan3 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 137, left: 75, zIndex: -1 }}>
                <IconStrokeLineHeight />
              </StrokeWidth>
              <CategoryContainer
                style={{ marginRight: 22 }}
                isPlan={plans.plan5}
                onPress={() => setPages(6)}
              >
                <View>
                  <CategoryText>{'05'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'부의금/화환'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan5 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 224, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan6}
                onPress={() => setPages(7)}
              >
                <View>
                  <CategoryText>{'06'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'장례 이벤트'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan6 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 224, left: 253, zIndex: -1 }}>
                <IconStrokeLineHeight />
              </StrokeWidth>
              <CategoryContainer
                style={{ marginRight: 22 }}
                isPlan={plans.plan8}
                onPress={() => setPages(9)}
              >
                <View>
                  <CategoryText>{'08'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'장사 방법'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan8 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 311, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan7}
                onPress={() => setPages(8)}
              >
                <View>
                  <CategoryText>{'07'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'영정사진'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan7 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 311, left: 75, zIndex: -1 }}>
                <IconStrokeLineHeight />
              </StrokeWidth>
              <CategoryContainer
                style={{ marginRight: 22 }}
                isPlan={plans.plan9}
                onPress={() => setPages(10)}
              >
                <View>
                  <CategoryText>{'09'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'장지 선택'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan9 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 398, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan10}
                onPress={() => setPages(11)}
              >
                <View>
                  <CategoryText>{'10'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'본안당 형태'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan10 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 398, left: 253, zIndex: -1 }}>
                <IconStrokeLineHeight />
              </StrokeWidth>
              <CategoryContainer
                style={{ marginRight: 22 }}
                onPress={() => setPages(13)}
              >
                <View>
                  <IconSummarize />
                  <CategoryText
                    style={{
                      color: '#1A1A1B',
                      fontWeight: '700',
                      marginTop: 8,
                    }}
                  >
                    {'최종 요약본 확인'}
                  </CategoryText>
                </View>
              </CategoryContainer>
              <StrokeWidth style={{ top: 495, left: 150, zIndex: -1 }}>
                <IconStrokeLineWidth />
              </StrokeWidth>
              <CategoryContainer
                isPlan={plans.plan11}
                onPress={() => setPages(12)}
              >
                <View>
                  <CategoryText>{'11'}</CategoryText>
                  <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                    {'묘비명/\n추도 방법'}
                  </CategoryText>
                </View>
                <View
                  style={{
                    display: `${plans.plan11 ? 'flex' : 'none'}`,
                  }}
                >
                  <IconCircleCheck />
                </View>
              </CategoryContainer>
            </CategoriesContainer>
            <ButtonCustom onPress={increasePages} marginTop="77px">
              <ButtonTitle>{'장례식 계획 시작하기'}</ButtonTitle>
            </ButtonCustom>
          </Container>
        </ScrollView>
      ) : pages === 13 ? (
        <Container
          height="100%"
          backgroundColor="#f5f5f5"
          paddingLeft="16px"
          paddingRight="16px"
        >
          <PlanningFuneralHeader />
          <MessageContainer isUserMessage={false}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 100,
                height: 87,
              }}
            >
              <IconMemo width={36} height={36} />
              <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                모리
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <MessageBubble isUserMessage={false} showAvatar={true}>
                <MessageText isUserMessage={false}>
                  {'작성한 장례 계획을 언제 공유할까요?'}
                </MessageText>
              </MessageBubble>
            </View>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble isUserMessage={false} showAvatar={false}>
              <MessageText isUserMessage={false}>
                {
                  '가족이나 유언 집행자에게 공유되며,\n나의 건강(신변)상태에 따라 공개할 수\n있도록 설정할 수 있습니다.'
                }
              </MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble isUserMessage={false} showAvatar={false}>
              <SelectButton
                onPress={() => handleSelection('plan12', '지금 공유')}
              >
                <SelectButtonText>{'지금 공유'}</SelectButtonText>
              </SelectButton>
              <SelectButton
                onPress={() => handleSelection('plan12', '사망 후')}
                style={{ marginTop: 8 }}
              >
                <SelectButtonText>{'사망 후'}</SelectButtonText>
              </SelectButton>
              <SelectButton
                onPress={() => handleSelection('plan12', '기타')}
                style={{ marginTop: 8 }}
              >
                <SelectButtonText>{'기타'}</SelectButtonText>
              </SelectButton>
              <SelectButton
                onPress={() => handleSelection('plan12', '공유하지 않을래요')}
                style={{ marginTop: 8 }}
              >
                <SelectButtonText>{'공유하지 않을래요'}</SelectButtonText>
              </SelectButton>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer isUserMessage={true}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'flex-end',
              }}
            >
              {plans.plan12 ? (
                <MessageBubble isUserMessage={true} showAvatar={true}>
                  <MessageText isUserMessage={true}>{plans.plan12}</MessageText>
                </MessageBubble>
              ) : null}
            </View>
          </MessageContainer>
          {plans.plan12 ? (
            <ButtonCustom onPress={goNavigate} marginTop="77px">
              <ButtonTitle>{'최종 완료'}</ButtonTitle>
            </ButtonCustom>
          ) : null}
        </Container>
      ) : (
        <Container
          width="100%"
          height={calculateHeight + 'px'}
          backgroundColor="#f5f5f5"
          paddingLeft="16px"
          paddingRight="16px"
          paddingBottom="60px"
        >
          <PlanningFuneralHeader />
          <PagesProgressBar>
            {Array(12)
              .fill(1)
              .map((i, index) => {
                return <PageBar key={index} selected={index <= pages - 1} />;
              })}
          </PagesProgressBar>
          {pages === 1 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      {
                        '안녕하세요, 모리입니다.\n함께 장례식 계획을 세워볼까요?'
                      }
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <MessageText isUserMessage={false}>
                    {
                      '장례식은 고인의 삶에 대한\n존경과 감사의 자리이며, 추억을\n회상하고 뜻을 기리는 특별한\n시간입니다.'
                    }
                  </MessageText>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <MessageText
                    isUserMessage={false}
                    style={{ marginBottom: 8 }}
                  >
                    {
                      '나만의 장례식을 쉽게 준비할 수\n있도록 모리가 도와드릴게요!'
                    }
                  </MessageText>
                  <SelectButton
                    onPress={() => setInitialText('네, 알겠습니다.')}
                  >
                    <SelectButtonText>{'네, 알겠습니다.'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {initialText ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {initialText}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 2 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'01. '}</Text>
                      {'장례 형식을 선택해 주세요.'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <MessageText isUserMessage={false}>
                    {'전통식 - 유교\n종교식 - 기독교, 불교, 천주교, 기타'}
                  </MessageText>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan1', '전통식')}
                  >
                    <SelectButtonText>{'전통식'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan1', '종교식')}
                  >
                    <SelectButtonText>{'종교식'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan1 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan1}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 3 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'02. '}</Text>
                      {'부고의 범위를 선택해 주세요.'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 234 }}
                >
                  <SelectButton
                    onPress={() =>
                      handleSelection('plan2', '알리지 않음(무빈소)')
                    }
                  >
                    <SelectButtonText>{'알리지 않음(무빈소)'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan2', '직계가족')}
                  >
                    <SelectButtonText>{'직계가족'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan2', '가까운 지인')}
                  >
                    <SelectButtonText>{'가까운 지인'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() =>
                      handleSelection('plan2', '최대한 많은 조문객')
                    }
                  >
                    <SelectButtonText>{'최대한 많은 조문객'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan2 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan2}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 4 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'03. '}</Text>
                      {'재단 장식 및 장례 용품은\n어떻게 준비할까요?'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 198 }}
                >
                  <SelectButton style={{ backgroundColor: '#2B2B2B' }}>
                    <SelectButtonText
                      style={{ color: '#ffffff', marginRight: 4 }}
                    >
                      {'장례 용품이란?'}
                    </SelectButtonText>
                    <IconHelp />
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8, backgroundColor: '#2B2B2B' }}
                  >
                    <SelectButtonText
                      style={{ color: '#ffffff', marginRight: 4 }}
                    >
                      {'재단 장식이란?'}
                    </SelectButtonText>
                    <IconHelp />
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 198 }}
                >
                  <SelectButton
                    onPress={() => handleSelection('plan3', '기본식')}
                  >
                    <SelectButtonText>{'기본식'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    onPress={() => handleSelection('plan3', '일반형')}
                    style={{ marginTop: 8 }}
                  >
                    <SelectButtonText>{'일반형'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    onPress={() => handleSelection('plan3', '고급형')}
                    style={{ marginTop: 8 }}
                  >
                    <SelectButtonText>{'고급형'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan3 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan3}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 5 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'04. '}</Text>
                      {'어떤 수의를 입고 싶으세요?'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <MessageText isUserMessage={false}>
                    {'수의란 염습(殮襲)할 때\n송장에 입히는 옷이에요.'}
                  </MessageText>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <SelectButton
                    onPress={() => handleSelection('plan4', '전통 수의')}
                  >
                    <SelectButtonText>{'전통 수의'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    onPress={() =>
                      handleSelection('plan4', '수의를 구입해놨어요')
                    }
                    style={{ marginTop: 8 }}
                  >
                    <SelectButtonText>{'수의를 구입해놨어요'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    onPress={() =>
                      handleSelection('plan4', '나에게 의미있는 옷')
                    }
                    style={{ marginTop: 8 }}
                  >
                    <SelectButtonText>{'나에게 의미있는 옷'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan4 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan4}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 6 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'05. '}</Text>
                      {'부의금와 화환은 어떻게 할까요?'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 198 }}
                >
                  <SelectButton
                    onPress={() => handleSelection('plan5', '관례에 따라')}
                  >
                    <SelectButtonText>{'관례에 따라'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan5', '가급적 제한')}
                  >
                    <SelectButtonText>{'가급적 제한'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan5', '전혀 받지 않음')}
                  >
                    <SelectButtonText>{'전혀 받지 않음'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan5 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan5}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 7 ? (
            <ScrollView
              ref={scrollViewRef1}
              onContentSizeChange={() =>
                scrollViewRef1.current.scrollToEnd({ animated: true })
              }
            >
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'06. '}</Text>
                      {'장례식에서 특별하게\n진행하고 싶은 이벤트가 있나요?'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <SelectButton
                    onPress={() =>
                      handleSelection('plan6', '내가 선택한 음악 연주')
                    }
                  >
                    <SelectButtonText>
                      {'내가 선택한 음악 연주'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() =>
                      handleSelection('plan6', '사진 전시 또는 영상 상영')
                    }
                  >
                    <SelectButtonText>
                      {'사진 전시 또는 영상 상영'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() =>
                      handleSelection('plan6', '내가 좋아하는 꽃 장식')
                    }
                  >
                    <SelectButtonText>
                      {'내가 좋아하는 꽃 장식'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan6', '특별한 음식 대접')}
                  >
                    <SelectButtonText>{'특별한 음식 대접'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan6', '기타')}
                  >
                    <SelectButtonText>{'기타'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan6 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan6}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
              {planShow.plan6_shown && (
                <>
                  <MessageContainer isUserMessage={false}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 100,
                        height: 87,
                      }}
                    >
                      <IconMemo width={36} height={36} />
                      <Text
                        style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}
                      >
                        모리
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MessageBubble isUserMessage={false} showAvatar={true}>
                        <MessageText isUserMessage={false}>
                          {'어떤 음악이 연주되면 좋을까요?'}
                        </MessageText>
                      </MessageBubble>
                    </View>
                  </MessageContainer>
                  <MessageContainer>
                    <MessageBubble isUserMessage={false} showAvatar={false}>
                      <TextInput
                        editable
                        multiline
                        numberOfLines={8}
                        maxLength={40}
                        style={{
                          width: 211,
                          height: 222,
                          borderRadius: 12,
                          backgroundColor: '#fff',
                          padding: 16,
                          paddingTop: 75,
                          textAlign: 'center',
                        }}
                        onChangeText={setText1}
                        value={tex1}
                        placeholder={'여기에 입력해주세요.'}
                        placeholderTextColor="#A6AAAF"
                      />
                      <SelectButton
                        style={{
                          marginTop: 8,
                          backgroundColor: '#47B97A',
                        }}
                        onPress={() =>
                          handleSelection('plan6_1', '다 적었어요')
                        }
                      >
                        <SelectButtonText
                          style={{
                            color: '#fff',
                          }}
                        >
                          {'다 적었어요'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan6_1', '다시 선택할래요')
                        }
                      >
                        <SelectButtonText>{'다시 선택할래요'}</SelectButtonText>
                      </SelectButton>
                    </MessageBubble>
                  </MessageContainer>
                </>
              )}
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan6_1 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan6_1}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
              {planShow.plan6_1_shown && (
                <>
                  <MessageContainer isUserMessage={false}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 100,
                        height: 107,
                        marginTop: 20,
                      }}
                    >
                      <IconMemo width={36} height={36} />
                      <Text
                        style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}
                      >
                        모리
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MessageBubble isUserMessage={false} showAvatar={true}>
                        <MessageText isUserMessage={false}>
                          {'추가로 진행하고 싶은 이벤트가 있나요?'}
                        </MessageText>
                      </MessageBubble>
                    </View>
                  </MessageContainer>
                  <MessageContainer>
                    <MessageBubble isUserMessage={false} showAvatar={false}>
                      <SelectButton
                        onPress={() =>
                          handleSelection('plan6_2', '내가 선택한 음악 연주')
                        }
                      >
                        <SelectButtonText>
                          {'내가 선택한 음악 연주'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan6_2', '사진 전시 또는 영상 상영')
                        }
                      >
                        <SelectButtonText>
                          {'사진 전시 또는 영상 상영'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan6_2', '내가 좋아하는 꽃 장식')
                        }
                      >
                        <SelectButtonText>
                          {'내가 좋아하는 꽃 장식'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan6_2', '특별한 음식 대접')
                        }
                      >
                        <SelectButtonText>
                          {'특별한 음식 대접'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() => handleSelection('plan6_2', '기타')}
                      >
                        <SelectButtonText>{'기타'}</SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() => handleSelection('plan6_2', '없어요')}
                      >
                        <SelectButtonText>{'없어요'}</SelectButtonText>
                      </SelectButton>
                    </MessageBubble>
                  </MessageContainer>
                </>
              )}
              {plans.plan6_2 && (
                <MessageContainer isUserMessage={true}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-end',
                    }}
                  >
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan6_2}
                      </MessageText>
                    </MessageBubble>
                  </View>
                </MessageContainer>
              )}
            </ScrollView>
          ) : pages === 8 ? (
            <ScrollView
              ref={scrollViewRef4}
              onContentSizeChange={() =>
                scrollViewRef4.current.scrollToEnd({ animated: true })
              }
            >
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'07. '}</Text>
                      {'장례식에 사용할 영정사진을\n첨부해 주세요.'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <FileUploadBox onPress={onSelectImage}>
                    <FileUploadText>{'파일 선택'}</FileUploadText>
                    <IconUpload />
                  </FileUploadBox>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan7', '사진 없음')}
                  >
                    <SelectButtonText>{'사진 없음'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              {plans.plan7 ? (
                imageFile && plans.plan7 === '파일선택' ? (
                  <>
                    <MessageContainer isUserMessage={true}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row-reverse',
                          alignItems: 'flex-end',
                        }}
                      >
                        <MessageBubble isUserMessage={true} showAvatar={true}>
                          <MessageText isUserMessage={true}>
                            {response}
                          </MessageText>
                        </MessageBubble>
                      </View>
                    </MessageContainer>
                    <MessageContainer isUserMessage={true}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row-reverse',
                          alignItems: 'flex-end',
                        }}
                      >
                        <MessageBubble isUserMessage={true} showAvatar={true}>
                          <Image
                            source={{
                              uri: imageFile,
                            }}
                            style={{ height: 149, width: 123 }}
                          />
                        </MessageBubble>
                      </View>
                    </MessageContainer>
                  </>
                ) : (
                  <MessageContainer isUserMessage={true}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MessageBubble isUserMessage={true} showAvatar={true}>
                        <MessageText isUserMessage={true}>
                          {plans.plan7}
                        </MessageText>
                      </MessageBubble>
                    </View>
                  </MessageContainer>
                )
              ) : (
                <MessageContainer isUserMessage={true}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-end',
                    }}
                  />
                </MessageContainer>
              )}
            </ScrollView>
          ) : pages === 9 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'08. '}</Text>
                      {'장사 방법을 선택해 주세요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 146 }}
                >
                  <SelectButton style={{ backgroundColor: '#2B2B2B' }}>
                    <SelectButtonText
                      style={{ color: '#ffffff', marginRight: 4 }}
                    >
                      {'화장이란?'}
                    </SelectButtonText>
                    <IconHelp />
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8, backgroundColor: '#2B2B2B' }}
                  >
                    <SelectButtonText
                      style={{ color: '#ffffff', marginRight: 4 }}
                    >
                      {'매장이란?'}
                    </SelectButtonText>
                    <IconHelp />
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 198 }}
                >
                  <SelectButton
                    onPress={() => handleSelection('plan8', '화장')}
                  >
                    <SelectButtonText>{'화장'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan8', '매장')}
                  >
                    <SelectButtonText>{'매장'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan8 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan8}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 10 ? (
            <ScrollView
              ref={scrollViewRef3}
              onContentSizeChange={() =>
                scrollViewRef3.current.scrollToEnd({ animated: true })
              }
            >
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'09. '}</Text>
                      {'화장 후 안치되고 싶은 장지를\n선택해 주세요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 230 }}
                >
                  <SelectButton style={{ backgroundColor: '#2B2B2B' }}>
                    <SelectButtonText
                      style={{ color: '#ffffff', marginRight: 4 }}
                    >
                      {'장지의 자세한 설명 보기'}
                    </SelectButtonText>
                    <IconHelp />
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{
                    width: 248,
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                >
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '봉안당')}
                  >
                    <SelectButtonText>{'봉안당'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '봉안묘')}
                  >
                    <SelectButtonText>{'봉안묘'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '수목장')}
                  >
                    <SelectButtonText>{'수목장'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '해양장')}
                  >
                    <SelectButtonText>{'해양장'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '산골')}
                  >
                    <SelectButtonText>{'산골'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide
                    onPress={() => handleSelection('plan9', '잔디장')}
                  >
                    <SelectButtonText>{'잔디장'}</SelectButtonText>
                  </SelectButtonWide>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan9 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan9}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </ScrollView>
          ) : pages === 11 ? (
            <>
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 87,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'10. '}</Text>
                      {'봉안당 형태를 선택해주세요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble
                  isUserMessage={false}
                  showAvatar={false}
                  style={{ width: 225 }}
                >
                  <SelectButton
                    onPress={() => handleSelection('plan10', '개인함')}
                  >
                    <SelectButtonText>
                      {'개인함\n\n'}
                      <Text style={{ fontWeight: '500' }}>
                        {'유골함에 개인유골안치\n300만 ~ 900만'}
                      </Text>
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan10', '부부형')}
                  >
                    <SelectButtonText>
                      {'부부형\n\n'}
                      <Text style={{ fontWeight: '500' }}>
                        {'유골함에 부부 유골 안치\n400만 ~ 1000만'}
                      </Text>
                    </SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan10 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan10}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </>
          ) : pages === 12 ? (
            <ScrollView
              ref={scrollViewRef2}
              onContentSizeChange={() =>
                scrollViewRef2.current.scrollToEnd({ animated: true })
              }
            >
              <MessageContainer isUserMessage={false}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 100,
                    height: 107,
                  }}
                >
                  <IconMemo width={36} height={36} />
                  <Text style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}>
                    모리
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <MessageBubble isUserMessage={false} showAvatar={true}>
                    <MessageText isUserMessage={false}>
                      <Text style={{ fontWeight: '700' }}>{'11. '}</Text>
                      {
                        '마지막으로 인사, 묘비명, 제사\n(추도) 방법을 결정할 수 있어요.'
                      }
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatoar={false}>
                  <MessageText isUserMessage={false}>
                    {'나의 장례식에 와준 분들에게\n마지막 인사를 남겨보세요.'}
                  </MessageText>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <TextInput
                    editable
                    multiline
                    numberOfLines={8}
                    maxLength={40}
                    style={{
                      width: 211,
                      height: 222,
                      borderRadius: 12,
                      backgroundColor: '#fff',
                      padding: 16,
                      paddingTop: 75,
                      textAlign: 'center',
                    }}
                    onChangeText={setText2}
                    value={text2}
                    placeholder={'여기에 입력해주세요.'}
                    placeholderTextColor="#A6AAAF"
                  />
                  <SelectButton
                    style={{
                      marginTop: 8,
                      backgroundColor: '#47B97A',
                    }}
                    onPress={() => handleSelection('plan11', '다 적었어요')}
                  >
                    <SelectButtonText
                      style={{
                        color: '#fff',
                      }}
                    >
                      {'다 적었어요'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton
                    style={{ marginTop: 8 }}
                    onPress={() => handleSelection('plan11', '안 적을래요')}
                  >
                    <SelectButtonText>{'안 적을래요'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan11 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan11}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
              {planShow.plan11_shown && (
                <>
                  <MessageContainer isUserMessage={false}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 100,
                        height: 87,
                      }}
                    >
                      <IconMemo width={36} height={36} />
                      <Text
                        style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}
                      >
                        모리
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MessageBubble isUserMessage={false} showAvatar={true}>
                        <MessageText isUserMessage={false}>
                          {'묘비에 세길 자신의 묘비명을 적어주세요.'}
                        </MessageText>
                      </MessageBubble>
                    </View>
                  </MessageContainer>
                  <MessageContainer>
                    <MessageBubble isUserMessage={false} showAvatar={false}>
                      <TextInput
                        editable
                        multiline
                        numberOfLines={8}
                        maxLength={40}
                        style={{
                          width: 211,
                          height: 222,
                          borderRadius: 12,
                          backgroundColor: '#fff',
                          padding: 16,
                          paddingTop: 75,
                          textAlign: 'center',
                        }}
                        onChangeText={setText3}
                        value={text3}
                        placeholder={'여기에 입력해주세요.'}
                        placeholderTextColor="#A6AAAF"
                      />
                      <SelectButton
                        style={{
                          marginTop: 8,
                          backgroundColor: '#47B97A',
                        }}
                        onPress={() =>
                          handleSelection('plan11_1', '다 적었어요')
                        }
                      >
                        <SelectButtonText
                          style={{
                            color: '#fff',
                          }}
                        >
                          {'다 적었어요'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan11_1', '안 적을래요')
                        }
                      >
                        <SelectButtonText>{'안 적을래요'}</SelectButtonText>
                      </SelectButton>
                    </MessageBubble>
                  </MessageContainer>
                </>
              )}
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan11_1 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan11_1}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
              {planShow.plan11_1_shown && (
                <>
                  <MessageContainer isUserMessage={false}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 100,
                        height: 107,
                      }}
                    >
                      <IconMemo width={36} height={36} />
                      <Text
                        style={{ marginLeft: 8, fontSize: 16, lineHeight: 22 }}
                      >
                        모리
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      }}
                    >
                      <MessageBubble isUserMessage={false} showAvatar={true}>
                        <MessageText isUserMessage={false}>
                          {
                            '유가족이 나의 제사(추도)방법을\n어떻게 하면 좋을지 적어주세요.'
                          }
                        </MessageText>
                      </MessageBubble>
                    </View>
                  </MessageContainer>
                  <MessageContainer>
                    <MessageBubble isUserMessage={false} showAvatar={false}>
                      <TextInput
                        editable
                        multiline
                        numberOfLines={8}
                        maxLength={40}
                        style={{
                          width: 211,
                          height: 222,
                          borderRadius: 12,
                          backgroundColor: '#fff',
                          padding: 16,
                          paddingTop: 75,
                          textAlign: 'center',
                        }}
                        onChangeText={setText4}
                        value={text4}
                        placeholder={'여기에 입력해주세요.'}
                        placeholderTextColor="#A6AAAF"
                      />
                      <SelectButton
                        style={{
                          marginTop: 8,
                          backgroundColor: '#47B97A',
                        }}
                        onPress={() =>
                          handleSelection('plan11_2', '다 적었어요')
                        }
                      >
                        <SelectButtonText
                          style={{
                            color: '#fff',
                          }}
                        >
                          {'다 적었어요'}
                        </SelectButtonText>
                      </SelectButton>
                      <SelectButton
                        style={{ marginTop: 8 }}
                        onPress={() =>
                          handleSelection('plan11_2', '안 적을래요')
                        }
                      >
                        <SelectButtonText>{'안 적을래요'}</SelectButtonText>
                      </SelectButton>
                    </MessageBubble>
                  </MessageContainer>
                </>
              )}
              <MessageContainer isUserMessage={true}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-end',
                  }}
                >
                  {plans.plan11_2 ? (
                    <MessageBubble isUserMessage={true} showAvatar={true}>
                      <MessageText isUserMessage={true}>
                        {plans.plan11_2}
                      </MessageText>
                    </MessageBubble>
                  ) : null}
                </View>
              </MessageContainer>
            </ScrollView>
          ) : (
            <Container>
              <Text>not found</Text>
            </Container>
          )}
        </Container>
      )}
      {pages === 1 ? (
        <BottomTab>
          {initialText && (
            <>
              <BottomTabObject onPress={decreasePages}></BottomTabObject>
              <BottomTabObject onPress={increasePages}>
                <BottomTabText style={{ color: '#1A1A1B', marginRight: 8 }}>
                  {'다음 질문'}
                </BottomTabText>
                <IconArrowRight />
              </BottomTabObject>
            </>
          )}
        </BottomTab>
      ) : (
        <>
          {pages !== 0 && pages !== 13 && (
            <BottomTab>
              <BottomTabObject onPress={decreasePages}>
                <IconArrowLeft />
                <BottomTabText style={{ marginLeft: 8 }}>
                  {'이전 질문'}
                </BottomTabText>
              </BottomTabObject>
              {pages === 7 && plans.plan6_2 && planShow.plan6_1_shown ? (
                <BottomTabObject onPress={increasePages}>
                  <BottomTabText style={{ color: '#1A1A1B', marginRight: 8 }}>
                    {'다음 질문'}
                  </BottomTabText>
                  <IconArrowRight />
                </BottomTabObject>
              ) : null}
              {pages === 12 && plans.plan11_2 && planShow.plan11_1_shown ? (
                <BottomTabObject onPress={increasePages}>
                  <BottomTabText style={{ color: '#1A1A1B', marginRight: 8 }}>
                    {'완료'}
                  </BottomTabText>
                  <IconArrowRight />
                </BottomTabObject>
              ) : null}
              {pages !== 7 && pages !== 12 && plans['plan' + (pages - 1)] && (
                <BottomTabObject onPress={increasePages}>
                  <BottomTabText style={{ color: '#1A1A1B', marginRight: 8 }}>
                    {'다음 질문'}
                  </BottomTabText>
                  <IconArrowRight />
                </BottomTabObject>
              )}
            </BottomTab>
          )}
        </>
      )}
    </View>
  );
};

export default FuneralPlan;

const CategoriesContainer = styled.View`
  flex-direction: row;
  width: 328px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 150px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 12px;
  border: ${(props) =>
    props.isPlan ? '1px solid #47b97a' : '1px solid transparent'};
  background: #fff;

  margin-top: 14px;
  margin-bottom: 14px;
`;

const CategoryText = styled.Text`
  color: #626265;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const StrokeWidth = styled.View`
  position: absolute;
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
`;

const ButtonTitle = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const PagesProgressBar = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: #f5f5f5;
  margin-bottom: 20px;
`;

const PageBar = styled.View`
  width: 29.333px;
  height: 6px;
  border-radius: 999px;
  background: ${(props) => (props.selected ? '#47B97A' : '#EBEBEB')};
  margin-right: 1.5px;
`;

///

const MessageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
  margin-top: ${(props) => (props.isUserMessage ? '8px' : '0')};
  justify-content: ${(props) =>
    props.isUserMessage ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUserMessage ? '#47B97A' : '#EBEBEB')};
  border-radius: 16px;
  border-top-right-radius: ${(props) => (props.isUserMessage ? '0px' : '16px')};
  border-top-left-radius: ${(props) => (!props.isUserMessage ? '0px' : '16px')};
  padding: 16px;

  margin-left: ${(props) =>
    !props.showAvatar && !props.isUserMessage
      ? '42px'
      : props.showAvatar && !props.isUserMessage
        ? '-60px'
        : '0px'};

  max-width: 400px;
`;

const MessageText = styled.Text`
  color: ${(props) => (props.isUserMessage ? '#FFF' : '#1A1A1B')};
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.isUserMessage ? '700' : '500')};
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const SelectButton = styled.TouchableOpacity`
  padding: 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  flex-direction: row;

  background-color: #fff;
  border-radius: 12px;
`;

const SelectButtonText = styled.Text`
  color: #141414;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.4px;

  text-align: center;
`;

const BottomTab = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const BottomTabObject = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BottomTabText = styled.Text`
  color: #76777f;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

const FileUploadBox = styled.TouchableOpacity`
  height: 150px;
  width: 166px;
  padding: 16px 27px;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  border-radius: 12px;
  border: 1px dashed #000;
  background: #f8f8f8;
`;

const FileUploadText = styled.Text`
  color: #1a1a1b;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-right: 4px;
`;

const SelectButtonWide = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background: #fff;

  align-items: center;
  justify-content: center;

  margin-top: 4px;
  margin-bottom: 4px;

  margin-left: 4px;
  margin-right: 4px;
`;
