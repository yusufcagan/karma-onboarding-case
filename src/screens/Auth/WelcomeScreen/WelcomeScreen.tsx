import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { getFontFamily } from '../../../constants/fonts';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={{ fontFamily: getFontFamily('bold') }}>WelcomeScreen</Text>
    </SafeAreaView>
  );
}
