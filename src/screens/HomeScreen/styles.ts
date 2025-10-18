import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../assets/theme/Colors';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: '#000000B2',
    marginTop: 5,
    textAlign: 'center',
  },
  uploadContainer: {
    backgroundColor: '#0000000D',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#D3D4D3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 10,
    width: 170,
    height: 170,
  },
  previewContainer: {
    width: 170,
    height: 170,
    borderRadius: 8,
  },
  cameraOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000001A',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  describeText: {
    fontSize: 14,
    color: Colors.Black,
    fontWeight: '700',
    marginTop: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#0000000D',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 15,
    height: 100,
    borderColor: '#D3D4D3',
    borderWidth: 1,
    fontSize: 13,
    paddingVertical: 15,
  },
  generateButton: {
    backgroundColor: Colors.Primary,
    borderRadius: 230,
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  generateButtonText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '800',
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
  },
  resultImage: {
    width: '48%',
    height: width / 2,
    borderRadius: 8,
    margin: 3,
  },
});
