import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import IconMemo from '@assets/common/icon-memo.svg';
import IconNotification from '@assets/common/icon-notification.svg';
import IconProfileDefault from '@assets/common/icon-profile-default.svg';
import Container from './common/Container';

const Header = (props) => {
  const { isLogo } = props;
  return (
    <HeaderContainer>
      {isLogo ? (
        <IconMemo width={99} height={48} />
      ) : (
        <HeaderTitle>{'나만의 장수사진'}</HeaderTitle>
      )}
      <Container flexDirection="row" gap="8px" backgroundColor="#f5f5f5">
        <Circle>
          <IconNotification width={24} height={24} />
        </Circle>
        <IconProfileDefault />
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: #f5f5f5;

  padding: 0 16px;
`;

const HeaderTitle = styled.Text`
  color: #3e3e40;
  font-size: 25px;
  font-weight: 700;
  line-height: 37px;
`;

const Circle = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  border-radius: 22px;

  background-color: #fefefe;

  margin-right: 8px;
`;
