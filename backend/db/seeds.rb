Gender.create!([{ name: '男', code: 'M' }, { name: '女', code: 'F' }, { name: '未選択', code: 'N' }])

Dojang.create!(
  [
    {
      name: '府中',
      name_kana: 'フチュウ',
      person_in_charge: '府中太郎'
    },
    {
      name: '本宿',
      name_kana: 'ホンシュク',
      person_in_charge: '本宿二郎'
    }
  ]
)

Course.create!(
  [
    {
      name: '少年部',
      name_kana: 'ショウネンブ'
    },
    {
      name: '青年部',
      name_kana: 'セイネンブ'
    },
    {
      name: '準会員',
      name_kana: 'ジュンカイイン'
    }
  ]
)

Membership.create!(
  [
    {
      dojang_id: Dojang.second.id,
      course_id: Course.third.id,
      gender_id: Gender.first.id,
      membership_start_date: Date.new(1998, 4, 1),
      membership_end_date: nil,
      name: '東京一郎',
      name_kana: 'トウキョウイチロウ',
      abbreviation: '様',
      date_of_birth: Date.new(1994, 4, 1),
      postal_code: '1234567',
      address1: '東京都府中市美好町',
      address2: '1-1-1',
      telephone_number: '09011112222',
      occupation: '自由業',
      parents: nil,
      parents_telephone_number: nil,
      status_flg: true
    },
    {
      dojang_id: Dojang.first.id,
      course_id: Course.first.id,
      gender_id: Gender.first.id,
      membership_start_date: Date.new(1990, 4, 1),
      membership_end_date: Date.new(2000, 4, 1),
      name: '東京二郎',
      name_kana: 'トウキョウジロウ',
      abbreviation: '様',
      date_of_birth: Date.new(1970, 4, 1),
      postal_code: '1234567',
      address1: '東京都府中市宮西町',
      address2: '1-1-1',
      telephone_number: '09033334444',
      occupation: '会社員',
      parents: nil,
      parents_telephone_number: nil,
      status_flg: true
    },
    {
      dojang_id: Dojang.second.id,
      course_id: Course.second.id,
      gender_id: Gender.second.id,
      membership_start_date: Date.new(2000, 4, 1),
      membership_end_date: nil,
      name: '東京花子',
      name_kana: 'トウキョウハナコ',
      abbreviation: '様',
      date_of_birth: Date.new(1996, 4, 1),
      postal_code: '1234567',
      address1: '東京都府中市府中町',
      address2: '1-1-1',
      telephone_number: '08011112222',
      occupation: '学生',
      parents: '東京太郎',
      parents_telephone_number: '07033334444',
      status_flg: true
    }
  ]
)
