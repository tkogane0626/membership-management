import axios from 'axios';
import type { Membership } from '../types/membership';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const fetchMembership = async (): Promise<Membership[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/memberships`);

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

export const deleteMembership = async (id: number): Promise<Membership[]> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/memberships/${id}/delete_membership`);

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
