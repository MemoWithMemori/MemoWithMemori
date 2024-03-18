import React from 'react';
import { View, Text } from 'react-native';
import PreviewHome from './PreviewHome';
import styled from 'styled-components/native';
import Header from '@/components/Header';
import { Dimensions } from 'react-native';
import TabBar from '@/components/TabBar';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      {/* <PreviewHome /> */}
      <TabBar />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.View`
  display: flex;
  background-color: #f5f5f5;
  width: ${Dimensions.get('window').width}px;
  flex: 1;
`;
