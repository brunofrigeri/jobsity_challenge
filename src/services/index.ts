import Config from 'react-native-config';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 50000,
});
