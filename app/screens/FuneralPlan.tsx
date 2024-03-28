import PlanningFuneralHeader from '@/components/PlanningFuneral/PlanningFuneralHeader';
import Container from '@/components/common/Container';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import IconCircleCheck from '@assets/MakeProfile/icon-circle-check.svg';
import IconStrokeLineWidth from '@assets/common/icon-stroke-line-width.svg';
import IconStrokeLineHeight from '@assets/common/icon-stroke-line-height.svg';
import IconSummarize from '@assets/FuneralPlan/icon-summarize.svg';
import IconMemo from '@assets/Chat/icon-mori.svg';
import { ScrollView } from 'react-native-gesture-handler';

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

  const increasePages = () => {
    setPages((page) => page + 1);
  };

  return (
    <ScrollView>
      {pages === 0 ? (
        <Container
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
      ) : (
        <Container
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
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                ></View>
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
            </>
          ) : (
            <Container>
              <Text>hi</Text>
            </Container>
          )}
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
  justify-content: ${(props) =>
    props.isUserMessage ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.View`
  background-color: ${(props) => (props.isUserMessage ? '#47B97A' : '#EBEBEB')};
  border-radius: 16px;
  border-top-right-radius: ${(props) => (props.isUserMessage ? '0px' : '20px')};
  border-top-left-radius: ${(props) => (!props.isUserMessage ? '0px' : '20px')};
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
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.4px;
`;

const SelectButton = styled.TouchableOpacity`
  padding: 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  background-color: #fff;
  border-radius: 12px;
`;

const SelectButtonText = styled.Text`
  color: #141414;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.4px;
`;
