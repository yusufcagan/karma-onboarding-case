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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const loadToken = useAuthStore(state => state.loadToken);
  const authToken = useAuthStore(state => state.token);
  const loadCredit = useCreditStore(state => state.loadCredit);

  const queryClient = new QueryClient();

  useEffect(() => {
    loadToken();
    loadCredit();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar />
        <NavigationContainer>
          {authToken ? <BottomNavigation /> : <AuthStackNavigation />}
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
