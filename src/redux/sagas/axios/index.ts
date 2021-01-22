import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import
const BASE_URL = 'https://api.cryptojumbo.org/v1';
const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
