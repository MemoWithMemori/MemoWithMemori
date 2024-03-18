import React from 'react';
import { View, Image, Text } from 'react-native';
import IconMemo from '../assets/common/icon-memo.svg';
import styled from 'styled-components/native';

const PreviewHome = () => {
  return (
    <PreviewHomeContainer>
      <IconMemo width={128} height={62} />
    </PreviewHomeContainer>
  );
};

export default PreviewHome;

const PreviewHomeContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #303030;
`;
