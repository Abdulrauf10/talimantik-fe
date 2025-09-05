import { BASE_URL } from '@/config/endpoint';
import axios, { AxiosHeaders, AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

const FetchToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return;

  return token;
};

apiClient.interceptors.request.use(
  async (request) => {
    // const token = getToken();

    // if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // if (token) {
    const token = await FetchToken();
    if (token) {
      (request.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
    (request.headers as AxiosHeaders).set('accept', `application/json`);
    // }
    return request;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

const apiCall = {
  get(resource: string, params?: any) {
    return apiClient.get(resource, params);
  },
  post(resource: string, params: any, config?: any) {
    return apiClient.post(resource, params, config);
  },
  put(resource: string, params: string) {
    return apiClient.put(resource, params);
  },
  patch(resource: string, params: any) {
    return apiClient.patch(resource, params);
  },
  delete(resource: string) {
    return apiClient.delete(resource);
  },
};

export default apiCall;
