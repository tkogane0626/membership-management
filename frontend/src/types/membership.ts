export interface Membership {
  id: number;
  name: string;
  name_kana: string;
  membership_start_date: string;
  membership_end_date: string | null;
  dojang: string;
  course: string;
  abbreviation: string;
  gender: string;
  date_of_birth: string;
  postal_code: string;
  address1: string;
  address2: string;
  telephone_number: string;
  parents: string;
  parents_telephone_number: string;
  occupation: string;
}
