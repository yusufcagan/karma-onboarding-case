import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStore = {
  token: string | null;
  user: any | null;
  setToken: (token: string) => void;
  setUser: (user: any) => Promise<void>;
  removeToken: () => void;
  loadToken: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>(set => ({
  token: null,
  user: null,
  setToken: async token => {
    await AsyncStorage.setItem('token', token);
    set({ token });
  },
  setUser: async (user: any) => {
    const filteredUser = {
      username: user.username,
      mail: user.mail,
      id: user._id,
      isPremium: user.isPremium,
    };

    await AsyncStorage.setItem('user', JSON.stringify(filteredUser));
    set({ user: filteredUser });
  },
  removeToken: async () => {
    await AsyncStorage.removeItem('token');
    set({ token: null });
  },
  loadToken: async () => {
    const [savedToken, savedUser] = await Promise.all([
      AsyncStorage.getItem('token'),
      AsyncStorage.getItem('user'),
    ]);

    if (savedToken) set({ token: savedToken });
    if (savedUser) set({ user: JSON.parse(savedUser) });
  },
}));
