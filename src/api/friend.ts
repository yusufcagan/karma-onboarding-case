import { useAuthStore } from '../store/authStore';
import apiClient from './apiClient';

const token = useAuthStore.getState().token;

export const getFriend = async () => {
  try {
    const response = await apiClient.get(`/friend`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('getFriend:', error.response.data.message);
    } else {
      console.error('getFriend:', error.message);
    }
    throw error;
  }
};

export const requestFriend = async (targetUserId: string) => {
  try {
    const response = await apiClient.post(
      '/friend/request',
      { targetUserId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('requestFriend err', error.response.data.message);
    } else {
      console.error('requestFriend err:', error.message);
    }
    throw error;
  }
};

export const deleteFriend = async (friendId: string) => {
  try {
    const response = await apiClient.delete('/friend/delete', {
      data: { friendId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('deleteFriend err:', error.response.data.message);
    } else {
      console.error('deleteFriend err:', error.message);
    }
    throw error;
  }
};

export const acceptFriend = async (friendId: string) => {
  try {
    const response = await apiClient.post(
      '/friend/accept',
      { friendId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('acceptFriend err', error.response.data.message);
    } else {
      console.error('acceptFriend err:', error.message);
    }
    throw error;
  }
};
