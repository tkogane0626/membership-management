FactoryBot.define do
  factory :membership do
    dojang { nil }
    course { nil }
    gender { nil }
    membership_start_date { '2024-12-28' }
    membership_end_date { '2024-12-28' }
    name { 'MyString' }
    name_kana { 'MyString' }
    abbreviation { 'MyString' }
    date_of_birth { '2024-12-28' }
    postal_code { 'MyString' }
    address1 { 'MyString' }
    address2 { 'MyString' }
    telephone_number { 'MyString' }
    occupation { 'MyString' }
    parents { 'MyString' }
    parents_telephone_number { 'MyString' }
    status_flg { false }
    created_by { 1 }
    updated_by { 1 }
  end
end
