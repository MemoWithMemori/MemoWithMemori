import React, { useCallback } from 'react';
import Container from '../common/Container';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import IconArrowLeftDark from '@assets/common/icon-arrow-left-dark.svg';

const RememberCardsHeader = ({ isShown }: { isShown?: boolean }) => {
  const navigation: any = useNavigation();
  const goBack = useCallback(
    () => navigation.navigate('엔딩노트'),
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
    >
      <View
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={goBack}
      >
        <IconArrowLeftDark />
        <Title marginLeft="16px">{'질문/기억 카드'}</Title>
      </View>
    </Container>
  );
};

export default RememberCardsHeader;

const Title = styled.Text`
  color: ${(props) => props.color || '#3e3e40'};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-left: ${(props) => props.marginLeft || '0px'};
`;
