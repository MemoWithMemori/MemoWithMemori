import PlanningFuneralHeader from '@/components/PlanningFuneral/PlanningFuneralHeader';
import Container from '@/components/common/Container';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import IconCircleCheck from '@assets/MakeProfile/icon-circle-check.svg';
import IconStrokeLineWidth from '@assets/common/icon-stroke-line-width.svg';
import IconStrokeLineHeight from '@assets/common/icon-stroke-line-height.svg';

const FuneralPlan = () => {
  return (
    <Container backgroundColor="#f5f5f5" paddingLeft="16px" paddingRight="16px">
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
        <StrokeWidth style={{ top: 47, left: 146 }}>
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
        <CategoryContainer>
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
      </CategoriesContainer>
    </Container>
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
