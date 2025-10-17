import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/Colors';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.Black,
    marginHorizontal: 35,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: Colors.Primary,
    marginHorizontal: 35,
    height: 40,
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    color: Colors.Black,
    fontSize: 14,
  },
  inputText: {
    fontSize: 14,
    color: Colors.Black,
  },
  continueButton: {
    backgroundColor: Colors.Primary,
    marginHorizontal: 35,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    color: Colors.White,
    fontSize: 14,
    fontWeight: '600',
  },
});
