import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/Colors';

export const styles = StyleSheet.create({
  logo: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.Black,
    marginLeft: 10,
  },
  aiTex: {
    color: Colors.Primary,
  },
  cameraText: {
    fontSize: 24,
  },
  cameraContainer: {
    backgroundColor: Colors.Primary,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hedaerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#A0A0A0',
  },
  creditContainer: {
    backgroundColor: '#0000000D',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
  },
  countText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.Black,
    marginHorizontal: 5,
  },
});
