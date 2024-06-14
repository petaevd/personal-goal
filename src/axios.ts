import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api'
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;