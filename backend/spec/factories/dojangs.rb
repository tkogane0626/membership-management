FactoryBot.define do
  factory :dojang do
    name { 'MyString' }
    name_kana { 'MyString' }
    person_in_charge { 'MyString' }
    status_flg { false }
    created_by { 1 }
    updated_by { 1 }
  end
end
