/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStackNavigation from './src/navigation/AuthStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <AuthStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
