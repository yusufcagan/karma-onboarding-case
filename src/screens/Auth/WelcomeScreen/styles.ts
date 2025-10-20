import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../helper/Metrics';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },
  logo: {
    fontSize: moderateScale(28),
    fontWeight: '800',
    marginTop: verticalScale(20),
    textAlign: 'center',
    color: Colors.Black,
  },
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(80),
  },
  lottie: {
    width: '90%',
    height: verticalScale(320),
  },
  aiTex: {
    color: Colors.Primary,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.Black,
    textAlign: 'center',
  },
  desc: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: Colors.Gray,
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  signupBtn: {
    marginTop: verticalScale(40),
    backgroundColor: Colors.Primary,
    paddingVertical: verticalScale(20),
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
  signBtnText: {
    color: Colors.White,
    fontSize: moderateScale(16),
    fontWeight: '800',
  },
  loginText: {
    marginTop: verticalScale(40),
    color: Colors.Primary,
    fontSize: moderateScale(16),
    fontWeight: '800',
    textAlign: 'center',
  },
});
