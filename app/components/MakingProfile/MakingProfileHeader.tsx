import React, { useCallback } from 'react';
import Container from '../common/Container';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import IconArrowLeft from '@assets/common/icon-arrow-left-gray.svg';

const MakingProfileHeader = ({ isShown }: { isShown?: boolean }) => {
  const navigation: any = useNavigation();
  const goBack = useCallback(
    () => navigation.navigate('장수사진'),
    [navigation],
  );

  return (
    <Container
      backgroundColor="#f5f5f5"
      width="100%"
      height="60px"
      justifyContent="space-between"
      flexDirection="row"
      marginBottom="16px"
      paddingLeft="10px"
      paddingRight="10px"
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{ marginRight: 16, display: `${isShown ? 'none' : 'flex'}` }}
        >
          <IconArrowLeft />
        </View>
        <Title>{isShown ? '장수사진 만들기' : '장수사진 완성'}</Title>
      </View>
      <Title color="#898989" onPress={goBack}>
        {isShown ? '나가기' : '공유하기'}
      </Title>
    </Container>
  );
};

export default MakingProfileHeader;

const Title = styled.Text`
  color: ${(props) => props.color || '#3e3e40'};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
