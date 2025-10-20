import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helper/Metrics';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: Colors.Black,
  },
  settings: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginLeft: horizontalScale(10),
    borderColor: Colors.Black10,
  },
  userContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  username: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: Colors.Black,
  },
  mailContainer: {
    backgroundColor: '#E8DAFF',
    borderRadius: 10,
    marginTop: verticalScale(5),
  },
  mailText: {
    color: Colors.Primary,
    fontSize: moderateScale(16),
    fontWeight: '500',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
  line: {
    borderTopWidth: 1,
    borderColor: Colors.Black10,
    marginTop: verticalScale(15),
  },
  content: {
    flex: 1,
    backgroundColor: '#F3F6FD',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.Black10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCard: {
    backgroundColor: Colors.White,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.Black10,
    marginTop: verticalScale(10),
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userTextContainer: {
    marginLeft: horizontalScale(10),
  },
  userCardUsername: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: Colors.Black,
  },
  lastSeen: {
    fontSize: moderateScale(13),
    fontWeight: '500',
    color: Colors.Gray,
    marginTop: verticalScale(2),
  },
});
