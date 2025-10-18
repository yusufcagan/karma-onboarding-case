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
import { useAuthStore } from './src/store/authStore';
import { useEffect } from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import { useCreditStore } from './src/store/useCreditStore';

function App() {
  const loadToken = useAuthStore(state => state.loadToken);
  const authToken = useAuthStore(state => state.token);
  const loadCredit = useCreditStore(state => state.loadCredit);

  console.log('Auth Token:', authToken);

  useEffect(() => {
    loadToken();
    loadCredit();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        {authToken ? <BottomNavigation /> : <AuthStackNavigation />}
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
