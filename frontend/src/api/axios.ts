import axios from 'axios';
import type { Membership } from '../types/membership';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const handleError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    console.log('Axios error:', error.message);
  } else {
    console.log('Unknown error:', error);
  }
};

export const fetchMembership = async (): Promise<Membership[]> => {
  try {
    const url = `${API_BASE_URL}/memberships`;
    const response = await axios.get(url);

    console.log('会員情報が取得されました。');

    return response.data;
  } catch (error: unknown) {
    handleError(error);

    return [];
  }
};

export const deleteMembership = async (
  id: number
): Promise<Membership[]> => {
  try {
    const url = `${API_BASE_URL}/memberships/${id}/delete_membership`;
    const response = await axios.post(url);

    console.log('会員情報が削除されました。');

    return response.data;
  } catch (error: unknown) {
    handleError(error);

    return [];
  }
};

export const updateMembership = async (
  id: number,
  updatedData: Partial<Membership>
): Promise<Membership[]> => {
  try {
    const url = `${API_BASE_URL}/memberships/${id}/update_membership`;
    const response = await axios.post(url, updatedData);

    console.log('会員情報が更新されました。');

    return response.data;
  } catch (error: unknown) {
    handleError(error);

    return [];
  }
};
