import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CreditStore = {
  credit: number;
  setCredit: (credit: number) => Promise<void>;
  loadCredit: () => Promise<void>;
};

export const useCreditStore = create<CreditStore>(set => ({
  credit: 5,

  setCredit: async credit => {
    try {
      await AsyncStorage.setItem('credit', credit.toString());
      set({ credit });
    } catch (error) {
      console.error('Error saving credit to AsyncStorage:', error);
    }
  },

  loadCredit: async () => {
    try {
      const savedCredit = await AsyncStorage.getItem('credit');
      if (savedCredit !== null) {
        set({ credit: Number(savedCredit) });
      } else {
        await AsyncStorage.setItem('credit', '5');
        set({ credit: 5 });
      }
    } catch (error) {
      console.error('Error loading credit from AsyncStorage:', error);
    }
  },
}));
