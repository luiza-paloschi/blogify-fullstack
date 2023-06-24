import api from './api';

export async function signUp(body) {
  const response = await api.post('/sign-up', body);
  return response.data;
}