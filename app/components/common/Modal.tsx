import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {}, []);

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.textStyle}>화면을 출력하는 영역입니다~!</Text>
        <Pressable onPress={onPressModalOpen}>
          <Text style={styles.textStyle}>Modal Open!</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 400 }}>
        <Modal
          animationType="slide"
          visible={isModalVisible}
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalTextStyle}>
                  Modal이 출력되는 영역입니다.
                </Text>
              </View>
              <Pressable onPress={onPressModalClose}>
                <Text>Modal Close!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#17191c',
  },

  /**
   * 일반 화면 영역
   */
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400,
  },

  /**
   * 모달 화면 영역
   */
  modalView: {
    marginTop: 230,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },

  centeredView: {
    flex: 1,
    alignContent: 'center',
    textAlignVertical: 'center',
  },
});
