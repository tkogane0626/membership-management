import axios from 'axios';
import type { Membership } from '../types/membership';

const apiBaseUrl = 'http://localhost:3000/api/v1';

const callApi = async (url: string): Promise<Membership[]> => {
  try {
    console.log('url', `${apiBaseUrl}${url}`);
    const response = await axios.get(`${apiBaseUrl}${url}`);
    console.log('response', response);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('Axios error:', error.message);
    } else {
      console.log('Unknown error:', error);
    }
    return [];
  }
};

export const fetchMembership = async (): Promise<Membership[]> => {
  return await callApi('/memberships');
};
