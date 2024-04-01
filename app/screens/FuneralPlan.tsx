import PlanningFuneralHeader from '@/components/PlanningFuneral/PlanningFuneralHeader';
import Container from '@/components/common/Container';
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
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
  const initialText = '';
  const [text, setText] = useState(initialText);
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

  return (
    <ScrollView sytle={{ flex: 1 }}>
      {pages === 0 ? (
        <Container
          height="100%"
          backgroundColor="#f5f5f5"
          paddingLeft="16px"
          paddingRight="16px"
        >
          <PlanningFuneralHeader />
          <CategoriesContainer>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <CategoryText>{'01'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'장례형식'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 47, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'02'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'부고 범위'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 50, left: 253, zIndex: -1 }}>
              <IconStrokeLineHeight />
            </StrokeWidth>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <CategoryText>{'04'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'수의 선택'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 137, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'03'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'장례용품'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 137, left: 75, zIndex: -1 }}>
              <IconStrokeLineHeight />
            </StrokeWidth>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <CategoryText>{'05'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'부의금/화환'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 224, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'06'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'장례 이벤트'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 224, left: 253, zIndex: -1 }}>
              <IconStrokeLineHeight />
            </StrokeWidth>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <CategoryText>{'08'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'장사 방법'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 311, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'07'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'영정사진'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 311, left: 75, zIndex: -1 }}>
              <IconStrokeLineHeight />
            </StrokeWidth>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <CategoryText>{'09'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'장지 선택'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 398, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'10'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'본안당 형태'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 398, left: 253, zIndex: -1 }}>
              <IconStrokeLineHeight />
            </StrokeWidth>
            <CategoryContainer style={{ marginRight: 22 }}>
              <View>
                <IconSummarize />
                <CategoryText
                  style={{ color: '#1A1A1B', fontWeight: '700', marginTop: 8 }}
                >
                  {'최종 요약본 확인'}
                </CategoryText>
              </View>
            </CategoryContainer>
            <StrokeWidth style={{ top: 495, left: 150, zIndex: -1 }}>
              <IconStrokeLineWidth />
            </StrokeWidth>
            <CategoryContainer>
              <View>
                <CategoryText>{'11'}</CategoryText>
                <CategoryText style={{ color: '#1A1A1B', fontWeight: '700' }}>
                  {'묘비명/\n추도 방법'}
                </CategoryText>
              </View>
              <View>
                <IconCircleCheck />
              </View>
            </CategoryContainer>
          </CategoriesContainer>
          <ButtonCustom onPress={increasePages} marginTop="77px">
            <ButtonTitle>{'장례식 계획 시작하기'}</ButtonTitle>
          </ButtonCustom>
        </Container>
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
              <SelectButton>
                <SelectButtonText>{'지금 공유'}</SelectButtonText>
              </SelectButton>
              <SelectButton style={{ marginTop: 8 }}>
                <SelectButtonText>{'사망 후'}</SelectButtonText>
              </SelectButton>
              <SelectButton style={{ marginTop: 8 }}>
                <SelectButtonText>{'기타'}</SelectButtonText>
              </SelectButton>
              <SelectButton style={{ marginTop: 8 }}>
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
              <MessageBubble isUserMessage={true} showAvatar={true}>
                <MessageText isUserMessage={true}>{'병환 중'}</MessageText>
              </MessageBubble>
            </View>
          </MessageContainer>
          <ButtonCustom onPress={goNavigate} marginTop="77px">
            <ButtonTitle>{'최종 완료'}</ButtonTitle>
          </ButtonCustom>
        </Container>
      ) : (
        <Container
          width="100%"
          height={calculateHeight + 'px'}
          backgroundColor="#f5f5f5"
          paddingLeft="16px"
          paddingRight="16px"
        >
          <PlanningFuneralHeader />
          <PagesProgressBar>
            {Array(12)
              .fill(1)
              .map((i, index) => {
                return (
                  <PageBar key={index} backgroundColor={index === pages} />
                );
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
                  <SelectButton>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'네, 알겠습니다.'}
                    </MessageText>
                  </MessageBubble>
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
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'전통식'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'전통식'}</MessageText>
                  </MessageBubble>
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
                  <SelectButton>
                    <SelectButtonText>{'알리지 않음(무빈소)'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'직계가족'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'가까운 지인'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'가까운 지인'}
                    </MessageText>
                  </MessageBubble>
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
                  <SelectButton>
                    <SelectButtonText>{'기본식'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'일반형'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'일반형'}</MessageText>
                  </MessageBubble>
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
                  <SelectButton>
                    <SelectButtonText>{'전통 수의'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'수의를 구입해놨어요'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'전통 수의'}
                    </MessageText>
                  </MessageBubble>
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
                  <SelectButton>
                    <SelectButtonText>{'관례에 따라'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'가급적 제한'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'관례에 따라'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </>
          ) : pages === 7 ? (
            <ScrollView>
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
                  <SelectButton>
                    <SelectButtonText>
                      {'내가 선택한 음악 연주'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>
                      {'사진 전시 또는 영상 상영'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>
                      {'내가 좋아하는 꽃 장식'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'특별한 음식 대접'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'내가 선택한 음악 연주'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
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
                    onChangeText={setText}
                    value={text}
                    placeholder={'여기에 입력해주세요.'}
                  />
                  <SelectButton
                    style={{
                      marginTop: 8,
                      backgroundColor: '#47B97A',
                    }}
                  >
                    <SelectButtonText
                      style={{
                        color: '#fff',
                      }}
                    >
                      {'다 적었어요'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'다시 선택할래요'}</SelectButtonText>
                  </SelectButton>
                </MessageBubble>
              </MessageContainer>
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
                      {'추가로 진행하고 싶은 이벤트가 있나요?'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <SelectButton>
                    <SelectButtonText>
                      {'내가 선택한 음악 연주'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>
                      {'사진 전시 또는 영상 상영'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>
                      {'내가 좋아하는 꽃 장식'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'특별한 음식 대접'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'기타'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'없어요'}</SelectButtonText>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'없어요'}</MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </ScrollView>
          ) : pages === 8 ? (
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
                      <Text style={{ fontWeight: '700' }}>{'07. '}</Text>
                      {'장례식에 사용할 영정사진을\n첨부해 주세요.'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
              <MessageContainer>
                <MessageBubble isUserMessage={false} showAvatar={false}>
                  <FileUploadBox>
                    <FileUploadText>{'파일 선택'}</FileUploadText>
                    <IconUpload />
                  </FileUploadBox>
                  <SelectButton style={{ marginTop: 8 }}>
                    <SelectButtonText>{'사진 없음'}</SelectButtonText>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'네, 알겠습니다.'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </>
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
                  <SelectButton>
                    <SelectButtonText>{'화장'}</SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'화장'}</MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </>
          ) : pages === 10 ? (
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
                  <SelectButtonWide>
                    <SelectButtonText>{'봉안당'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide>
                    <SelectButtonText>{'봉안묘'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide>
                    <SelectButtonText>{'수목장'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide>
                    <SelectButtonText>{'해양장'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide>
                    <SelectButtonText>{'산골'}</SelectButtonText>
                  </SelectButtonWide>
                  <SelectButtonWide>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'봉안당'}</MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </>
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
                  <SelectButton>
                    <SelectButtonText>
                      {'개인함\n\n'}
                      <Text style={{ fontWeight: '500' }}>
                        {'유골함에 개인유골안치\n300만 ~ 900만'}
                      </Text>
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>{'개인함'}</MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </>
          ) : pages === 12 ? (
            <ScrollView>
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
                    onChangeText={setText}
                    value={text}
                    placeholder={'여기에 입력해주세요.'}
                  />
                  <SelectButton
                    style={{
                      marginTop: 8,
                      backgroundColor: '#47B97A',
                    }}
                  >
                    <SelectButtonText
                      style={{
                        color: '#fff',
                      }}
                    >
                      {'다 적었어요'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'다 적었어요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
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
                    onChangeText={setText}
                    value={text}
                    placeholder={'여기에 입력해주세요.'}
                  />
                  <SelectButton
                    style={{
                      marginTop: 8,
                      backgroundColor: '#47B97A',
                    }}
                  >
                    <SelectButtonText
                      style={{
                        color: '#fff',
                      }}
                    >
                      {'다 적었어요'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'안 적을래요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
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
                    onChangeText={setText}
                    value={text}
                    placeholder={'여기에 입력해주세요.'}
                  />
                  <SelectButton
                    style={{
                      marginTop: 8,
                      backgroundColor: '#47B97A',
                    }}
                  >
                    <SelectButtonText
                      style={{
                        color: '#fff',
                      }}
                    >
                      {'다 적었어요'}
                    </SelectButtonText>
                  </SelectButton>
                  <SelectButton style={{ marginTop: 8 }}>
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
                  <MessageBubble isUserMessage={true} showAvatar={true}>
                    <MessageText isUserMessage={true}>
                      {'안 적을래요'}
                    </MessageText>
                  </MessageBubble>
                </View>
              </MessageContainer>
            </ScrollView>
          ) : (
            <Container>
              <Text>not found</Text>
            </Container>
          )}
          <BottomTab>
            <BottomTabObject onPress={decreasePages}>
              <IconArrowLeft />
              <BottomTabText style={{ marginLeft: 8 }}>
                {'이전 질문'}
              </BottomTabText>
            </BottomTabObject>
            <BottomTabObject onPress={increasePages}>
              <BottomTabText style={{ color: '#1A1A1B', marginRight: 8 }}>
                {'다음 질문'}
              </BottomTabText>
              <IconArrowRight />
            </BottomTabObject>
          </BottomTab>
        </Container>
      )}
    </ScrollView>
  );
};

export default FuneralPlan;

const CategoriesContainer = styled.View`
  flex-direction: row;
  width: 328px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  width: 150px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 12px;
  border: 1px solid #47b97a;
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
  padding: 32px 16px;
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
