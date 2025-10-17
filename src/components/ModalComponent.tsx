import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { styles } from './styles/modal.styles';

interface ModalComponentProps {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  title: string;
  description?: string;
  buttonText: string;
  onpress?: () => void;
}
const ModalComponent = ({
  isModalVisible,
  setModalVisible,
  title,
  description,
  buttonText,
  onpress,
}: ModalComponentProps) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          {description && (
            <Text style={styles.modalDescription}>{description}</Text>
          )}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={onpress ? onpress : toggleModal}
          >
            <Text style={styles.modalButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
