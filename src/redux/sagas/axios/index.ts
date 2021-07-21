import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import

const BASE_URL = process.env.NODE_ENV === 'development' 
				 ? process.env.REACT_APP_BASE_URL_DEV
				 : process.env.REACT_APP_BASE_URL;

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
