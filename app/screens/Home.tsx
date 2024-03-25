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
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [opacity]);

  return (
    <>
      {isHome ? (
        <AnimatedContainer style={{ opacity }}>
          <HomeContainer>
            <Header />
            <LandingHome />

            {/* <EndingNote /> */}
            {/* <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                  } else if (route.name === 'EndingNote') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  }

                  // 어떤 아이콘이든 사용할 수 있음
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              initialRouteName="Home"
            >
              <Tab.Screen name="Home" component={LandingHome} />
              <Tab.Screen name="EndingNote" component={EndingNote} />
            </Tab.Navigator> */}
            {/* <TabBar /> */}
          </HomeContainer>
        </AnimatedContainer>
      ) : (
        <AnimatedContainer
          style={{
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0], // 반대로 페이드 아웃
            }),
          }}
        >
          <PreviewHome />
        </AnimatedContainer>
      )}
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
