import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/Colors';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 20,
    textAlign: 'center',
    color: Colors.Black,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  lottie: {
    width: '90%',
    height: 350,
  },
  aiTex: {
    color: Colors.Primary,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.Black,
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.Gray,
    textAlign: 'center',
    marginTop: 10,
  },
  signupBtn: {
    marginTop: 40,
    backgroundColor: Colors.Primary,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 30,
  },
  signBtnText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '800',
  },
  loginText: {
    marginTop: 20,
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
});
