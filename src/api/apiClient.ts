import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://onboarding.gokarma.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
