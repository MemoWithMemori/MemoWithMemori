import React, { useState } from 'react';
import Container from './Container';
import IconSearch from '@assets/common/icon-search.svg';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;

// 화면 너비에서 20을 뺀 값을 계산
const calculatedWidth = screenWidth - 32;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();

  return (
    <Container
      flexDirection="row"
      width={calculatedWidth + 'px'}
      height="54px"
      backgroundColor="#e9e9e9"
      alignItems="center"
      paddingLeft={'16px'}
      marginLeft="16px"
      borderBottomRightRadius="16px"
      borderBottomLeftRadius="16px"
      borderTopLeftRadius="16px"
      borderTopRightRadius="16px"
    >
      <IconSearch />
      <SearchBarTextInput
        placeholder="홍길동님, 궁금하신게 있으신가요?"
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </Container>
  );
};

export default SearchBar;

const SearchBarTextInput = styled.TextInput`
  margin-left: 19px;
  width: 270px;
  height: 24px;

  color: #a6aaaf;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
