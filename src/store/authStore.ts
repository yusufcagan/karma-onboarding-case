import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStore = {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  loadToken: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>(set => ({
  token: null,
  setToken: async token => {
    await AsyncStorage.setItem('token', token);
    set({ token });
  },
  removeToken: async () => {
    await AsyncStorage.removeItem('token');
    set({ token: null });
  },
  loadToken: async () => {
    const savedToken = await AsyncStorage.getItem('token');
    if (savedToken) {
      set({ token: savedToken });
    }
  },
}));
