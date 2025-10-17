import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/Colors';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 25,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    fontWeight: '200',
    color: '#151920',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: Colors.Primary,
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  modalButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '700',
  },
});
