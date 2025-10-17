import apiClient from './apiClient';

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post(`/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('Error login:', error.response.data.message);
    } else {
      console.error('Error login:', error.message);
    }
    throw error;
  }
};

export const checkUsernameAvailability = async (username: string) => {
  try {
    const response = await apiClient.post(`/auth/check-username`, {
      username,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error(
        'Error checking username availability:',
        error.response.data.message,
      );
    } else {
      console.error('Error checking username availability:', error.message);
    }
    throw error;
  }
};

export const checkEmailAvailability = async (mail: string) => {
  try {
    const response = await apiClient.post(`/auth/check-mail`, {
      mail,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error(
        'Error checking email availability:',
        error.response.data.message,
      );
    } else {
      console.error('Error checking email availability:', error.message);
    }
    throw error;
  }
};

export const register = async (
  email: string,
  username: string,
  password: string,
  code: string,
) => {
  try {
    const response = await apiClient.post(`/auth/register`, {
      email,
      username,
      password,
      code,
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      console.error('Error registering:', error.response.data.message);
    } else {
      console.error('Error registering:', error.message);
    }
    throw error;
  }
};
