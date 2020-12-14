import axios, { AxiosInstance, AxiosResponse } from 'axios';
// import
const BASE_URL = 'https://dev-exchanger-ii.herokuapp.com/v1';
const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token 66a283eabe76f5a73f98cd3ac45be2a9fdceeb4b`,
  },
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
