import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './screens/Chat';
import ChatHeader from './components/Chat/ChatHeader';
import IconArrowLeftDark from '@assets/common/icon-arrow-left-dark.svg';
import RememberCards from './screens/RememberCards';
import Loading from './screens/Loading';
import MainTabNavigator from './components/navigation/MainTabNavigator';
import MakingProfileDetail from './screens/MakingProfileDetail';
import LoadingPhotos from './screens/LoadingPhotos';
import FuneralPlan from './screens/FuneralPlan';
import FuneralPlanResultLoading from './screens/FuneralPlanResultLoading';
import FuneralPlanResult from './screens/FuneralPlanResult';
import RememberCardsList from './screens/RememberCardsList';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      <IconArrowLeftDark />
    </TouchableOpacity>
  );
};

const CustomBackAnotherButton = () => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{ marginLeft: 10 }}
    >
      <IconArrowLeftDark />
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <RecoilRoot>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainTabNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                  headerTitle: () => <ChatHeader title={'질문카드 작성'} />, // 커스텀 헤더 타이틀 컴포넌트
                  headerLeft: () => <CustomBackButton />,
                  headerTitleAlign: 'left',
                  headerStyle: {
                    backgroundColor: '#F5F5F5', // 헤더 배경 색상 설정
                    height: 60, // 헤더 높이 설정
                  },
                }}
              />
              <Stack.Screen
                name="Loading"
                component={Loading}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RememberCards"
                component={RememberCards}
                options={{
                  headerTitle: () => <ChatHeader title={'기억카드'} />, // 커스텀 헤더 타이틀 컴포넌트
                  headerLeft: () => <CustomBackAnotherButton />,
                  headerTitleAlign: 'left',
                  headerStyle: {
                    backgroundColor: '#F5F5F5', // 헤더 배경 색상 설정
                    height: 60, // 헤더 높이 설정
                  },
                }}
              />
              <Stack.Screen
                name="MakingProfileDetail"
                component={MakingProfileDetail}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LoadingPhotos"
                component={LoadingPhotos}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="FuneralPlan"
                component={FuneralPlan}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="FuneralPlanLoading"
                component={FuneralPlanResultLoading}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="FuneralPlanResult"
                component={FuneralPlanResult}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RememberCardsList"
                component={RememberCardsList}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </RecoilRoot>
  );
};

export default App;
