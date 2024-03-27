import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import PreviewHome from './PreviewHome';
import styled, { css } from 'styled-components/native';
import Header from '@/components/Header';
import { Dimensions } from 'react-native';
import TabBar from '@/components/TabBar';
import SearchBar from '@/components/common/SearchBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LandingHome from './LandingHome';
import EndingNote from './EndingNote';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './Chat';

import { useNavigation } from '@react-navigation/native';
import MainTabNavigator from '@/components/navigation/MainTabNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  const navigation: any = useNavigation();
  const [isHome, setIsHome] = useState<boolean>(false);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsHome(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [opacity]);

  return (
    <>
      <AnimatedContainer style={{ opacity }}>
        <HomeContainer>
          <Header isLogo={true} />
          <LandingHome />
        </HomeContainer>
      </AnimatedContainer>
      {/* {isHome ? (
        <AnimatedContainer style={{ opacity }}>
          <HomeContainer>
            <Header />
            <LandingHome />
          </HomeContainer>
        </AnimatedContainer>
      ) : (
        <AnimatedContainer
          style={{
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0], // 반대로 페이드 아웃
            }),
            zIndex: 999,
          }}
        >
          <PreviewHome />
        </AnimatedContainer>
      )} */}
    </>
  );
};

export default Home;

const HomeContainer = styled.View`
  display: flex;
  background-color: #f5f5f5;
  width: ${Dimensions.get('window').width}px;
  flex: 1;
`;

const AnimatedContainer = styled(
  Animated.createAnimatedComponent(Animated.View),
)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
