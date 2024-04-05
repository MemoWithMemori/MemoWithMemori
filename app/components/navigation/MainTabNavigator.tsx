import EndingNote from '@/screens/EndingNote';
import Home from '@/screens/Home';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculateWealth from '@/screens/CalculateWealth';
import MakingProfile from '@/screens/MakingProfile';
import TabBar from '../TabBar';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="홈" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="엔딩노트"
        component={EndingNote}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="변호사 상담"
        component={CalculateWealth}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="장수사진"
        component={MakingProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
