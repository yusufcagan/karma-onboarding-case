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
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: verticalScale(20),
    color: Colors.Black,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: Colors.Primary,
    marginHorizontal: horizontalScale(35),
    height: verticalScale(40),
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    color: Colors.Black,
    fontSize: moderateScale(14),
  },
  inputText: {
    fontSize: moderateScale(14),
    color: Colors.Black,
  },
  continueButton: {
    backgroundColor: Colors.Primary,
    marginHorizontal: horizontalScale(35),
    height: verticalScale(40),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  continueText: {
    color: Colors.White,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});
