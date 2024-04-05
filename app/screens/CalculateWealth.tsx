import Container from '@/components/common/Container';
import React from 'react';
import { Image, Dimensions } from 'react-native';
import imageScreen from '@assets/image-screen.png';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const CalculateWealth = () => {
  return (
    <Container width="100%" height="100%">
      <ScrollView style={{ flex: 1 }}>
        <Image
          source={imageScreen}
          style={{ width: screenWidth, height: 1039 }}
        />
      </ScrollView>
    </Container>
  );
};

export default CalculateWealth;
