import React, { useCallback } from 'react';
import Container from '../common/Container';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const MakingProfileHeader = () => {
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
    >
      <Title>{'장수사진 만들기'}</Title>
      <Title color="#898989" onPress={goBack}>
        {'나가기'}
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
