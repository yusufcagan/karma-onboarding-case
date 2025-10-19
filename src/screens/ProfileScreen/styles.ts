import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/Colors';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
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
    marginLeft: 10,
    borderColor: '#0000001A',
  },
  userContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  userIcon: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#0000001A',
  },
  username: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.Black,
  },
  mailContainer: {
    backgroundColor: '#E8DAFF',
    borderRadius: 10,
    marginTop: 5,
  },
  mailText: {
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#0000001A',
    marginTop: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#F3F6FD',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#0000001A',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCard: {
    backgroundColor: Colors.White,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#0000001A',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userTextContainer: {
    marginLeft: 20,
  },
  userCardUsername: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Black,
  },
  lastSeen: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.Gray,
    marginTop: 2,
  },
});
