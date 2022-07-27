import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  login(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  validateToken(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
};
