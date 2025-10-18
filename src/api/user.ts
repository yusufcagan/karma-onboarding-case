import { useAuthStore } from '../store/authStore';
import apiClient from './apiClient';

const token = useAuthStore.getState().token;

export const userUpdate = async (
  username: string,
  mail: string,
  password: string,
) => {
  try {
    const response = await apiClient.post(
      '/user/update',
      { username, mail, password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('userUpdate error:', error.response.data.message);
    } else {
      console.error('userUpdate error:', error.message);
    }
    throw error;
  }
};

export const deleteUser = async () => {
  try {
    const response = await apiClient.delete('/user/delete', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('deleteUser err:', error.response.data.message);
    } else {
      console.error('deleteUser err:', error.message);
    }
    throw error;
  }
};

export const purchaseUser = async () => {
  try {
    const response = await apiClient.post(
      '/user/update',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('purchaseUser error:', error.response.data.message);
    } else {
      console.error('purchaseUser error:', error.message);
    }
    throw error;
  }
};
