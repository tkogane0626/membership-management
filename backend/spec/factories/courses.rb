FactoryBot.define do
  factory :course do
    name { 'MyString' }
    name_kana { 'MyString' }
    status_flg { false }
    created_by { 1 }
    updated_by { 1 }
  end
end
