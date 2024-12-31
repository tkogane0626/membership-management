export const columns = [
  { label: '会員No', key: 'id' },
  { label: '名前', key: 'name' },
  { label: 'フリガナ', key: 'name_kana' },
  { label: '入会日', key: 'membership_start_date' },
  { label: '退会日', key: 'membership_end_date' },
  { label: '道場', key: 'dojang' },
  { label: 'コース', key: 'course' },
  { label: '略称', key: 'abbreviation' },
  { label: '性別', key: 'gender' },
  { label: '生年月日', key: 'date_of_birth' },
  { label: '郵便番号', key: 'postal_code' },
  { label: '住所1', key: 'address1' },
  { label: '住所2', key: 'address2' },
  { label: '電話番号', key: 'telephone_number' },
  { label: '保護者名', key: 'parents' },
  { label: '保護者電話番号', key: 'parents_telephone_number' },
  { label: '職業', key: 'occupation' },
] as const;

export type Column = (typeof columns)[number];
