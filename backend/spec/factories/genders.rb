FactoryBot.define do
  factory :gender do
    name { 'MyString' }
    code { 'MyString' }
    status_flg { false }
    created_by { 1 }
    updated_by { 1 }
  end
end
