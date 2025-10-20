import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../assets/theme/Colors';
import { moderateScale, verticalScale } from '../../helper/Metrics';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
  subTitle: {
    fontSize: moderateScale(14),
    color: '#000000B2',
    marginTop: verticalScale(5),
    textAlign: 'center',
  },
  uploadContainer: {
    backgroundColor: '#0000000D',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
    borderColor: '#D3D4D3',
    borderWidth: verticalScale(1),
    borderStyle: 'dashed',
    borderRadius: verticalScale(8),
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
    backgroundColor: Colors.Black10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  describeText: {
    fontSize: moderateScale(14),
    color: Colors.Black,
    fontWeight: '700',
    marginTop: verticalScale(15),
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#0000000D',
    borderRadius: 8,
    marginTop: verticalScale(10),
    paddingHorizontal: 15,
    height: verticalScale(100),
    borderColor: '#D3D4D3',
    borderWidth: 1,
    fontSize: moderateScale(13),
    paddingVertical: verticalScale(15),
  },
  generateButton: {
    backgroundColor: Colors.Primary,
    borderRadius: 230,
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
  },
  generateButtonText: {
    color: Colors.White,
    fontSize: moderateScale(16),
    fontWeight: '800',
  },
  resultTitle: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    marginTop: verticalScale(30),
  },
  resultImage: {
    width: '48%',
    height: width / 2,
    borderRadius: 8,
    margin: 3,
  },
});
