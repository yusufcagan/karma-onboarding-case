import { useAuthStore } from '../store/authStore';
import apiClient from './apiClient';

const token = useAuthStore.getState().token;

export const explore = async (
  range: string,
  latitude: string,
  longitude: string,
) => {
  try {
    const response = await apiClient.post(
      '/explore',
      { range, latitude, longitude },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('explore error:', error.response.data.message);
    } else {
      console.error('explore error:', error.message);
    }
    throw error;
  }
};
