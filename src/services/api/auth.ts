import apiCall from '../apiCall';
import { AUTH } from '@/config/endpoint';

export const RegisterService = async (payload: any) => {
  const res = await apiCall.post(AUTH.REGISTER, payload);
  return res.data;
};

export const LoginService = async (payload: any) => {
  const res = await apiCall.post(AUTH.LOGIN, payload);
  return res.data;
};
