import React, { useState } from 'react';
import Container from '../common/Container';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Modal from '../common/Modal';

const ChatHeader = (props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { title } = props;

  return (
    <>
      {isModalOpen && <Modal />}
      <Container
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="#F5F5F5"
      >
        <ChatHeaderText>{title}</ChatHeaderText>
      </Container>
    </>
  );
};

export default ChatHeader;

const ChatHeaderText = styled.Text`
  color: #1a1a1b;
  font-size: 20px;
  line-height: 30px;
`;

const ChatSubText = styled.Text`
  color: #47b97a;
  font-size: 16px;
  font-weight: 700;
  margin-right: -20px;
`;
