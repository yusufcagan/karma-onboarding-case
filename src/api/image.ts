import { useAuthStore } from '../store/authStore';
import apiClient from './apiClient';

const token = useAuthStore.getState().token;

export const uploadImage = async (
  imageUri: string,
  latitude: string,
  longitude: string,
  prompt: string,
) => {
  try {
    const formData = new FormData();

    formData.append('file', {
      uri: imageUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('prompt', prompt);

    const response = await apiClient.post('image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Upload successful:', response.data);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('Upload error:', error.response.data.message);
    } else {
      console.error('Upload error:', error.message);
    }
    throw error;
  }
};

export const getImage = async () => {
  try {
    const response = await apiClient.get('/image', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('getImage error:', error.response.data.message);
    } else {
      console.error('getImage error:', error.message);
    }
    throw error;
  }
};
