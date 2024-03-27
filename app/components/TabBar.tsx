// TabBar.js
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import IconTabHome from '@assets/TabBar/icon-tab-home.svg';
import IconTabNote from '@assets/TabBar/icon-tab-note.svg';
import IconTabPhoto from '@assets/TabBar/icon-tab-photo.svg';
import IconTabCalculate from '@assets/TabBar/icon-tab-calculate.svg';

const TabBar = ({ state, descriptors, navigation }) => {
  const getIconForRoute = (routeName) => {
    switch (routeName) {
      case '홈':
        return IconTabHome;
      case '엔딩노트':
        return IconTabNote;
      case '재산계산':
        return IconTabCalculate;
      case '장수사진':
        return IconTabPhoto;
      default:
        return IconTabHome; // 기본값
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        backgroundColor: '#303030',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const Icon = getIconForRoute(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon fill={isFocused ? '#FFFFFF' : '#727078'} />
            <Text
              style={{ color: isFocused ? '#ffffff' : '#727078', marginTop: 4 }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
