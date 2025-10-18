import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function DiscoverScreen() {
  return (
    <SafeAreaView style={styles.flex}>
      <Text>DiscoverScreen</Text>
    </SafeAreaView>
  );
}
