import React, { useState } from 'react';
import Container from './common/Container';
import { Text, TouchableOpacity, View } from 'react-native';
import IconTabCalculate from '@assets/TabBar/icon-tab-calculate.svg';
import IconTabHome from '@assets/TabBar/icon-tab-home.svg';
import IconTabNote from '@assets/TabBar/icon-tab-note.svg';
import IconTabPhoto from '@assets/TabBar/icon-tab-photo.svg';
import styled from 'styled-components/native';

const MENUS = [
  {
    Icon: IconTabHome,
    title: '홈',
    key: 'home',
    route: '/',
  },
  {
    Icon: IconTabNote,
    title: '엔딩노트',
    key: 'note',
    route: 'endingnote',
  },
  {
    Icon: IconTabCalculate,
    title: '재산 계산',
    key: 'calculate',
    route: 'calculate',
  },
  {
    Icon: IconTabPhoto,
    title: '장수 사진',
    key: 'photo',
    route: '/photo',
  },
];

const TabBar = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  return (
    <TabBarContainer>
      {MENUS.map(({ Icon, title, key }) => {
        return (
          <TabBarObjectContainer key={key} onPress={() => setSelectedMenu(key)}>
            <Icon fill={selectedMenu === key ? '#FFFFFF' : '#727078'} />
            <TabBarObjectText
              style={{
                color: `${selectedMenu === key ? '#FFFFFF' : '#727078'}`,
              }}
            >
              {title}
            </TabBarObjectText>
          </TabBarObjectContainer>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;

const TabBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 13px;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 80px;

  background-color: #303030;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const TabBarObjectContainer = styled.View`
  display: flex;
  align-items: center;
  margin-right: 26px;
  margin-left: 26px;
`;

const TabBarObjectText = styled.Text`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14.76px;
  letter-spacing: -0.3px;

  margin-top: 4px;
`;
