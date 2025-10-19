import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { styles } from './styles/modal.styles';
import Colors from '../../assets/theme/Colors';

interface ModalComponentProps {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  title: string;
  description?: string;
  buttonText: string;
  onpress?: () => void;
  onpress2?: () => void;
  multiButton?: boolean;
  buttonText2?: string;
}
const ModalComponent = ({
  isModalVisible,
  setModalVisible,
  title,
  description,
  buttonText,
  buttonText2,
  onpress,
  onpress2,
  multiButton,
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
          {multiButton ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <TouchableOpacity
                style={[
                  styles.miniButton,
                  {
                    backgroundColor: Colors.White,
                    borderWidth: 1,
                    borderColor: '#0000001A',
                  },
                ]}
                onPress={onpress ? onpress : toggleModal}
              >
                <Text style={[styles.modalButtonText, { color: '#15192080' }]}>
                  {buttonText}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.miniButton}
                onPress={onpress2 ? onpress2 : toggleModal}
              >
                <Text style={styles.modalButtonText}>{buttonText2}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.modalButton}
              onPress={onpress ? onpress : toggleModal}
            >
              <Text style={styles.modalButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
