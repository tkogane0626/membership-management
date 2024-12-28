class CreateMemberships < ActiveRecord::Migration[8.0]
  def change
    create_table(:memberships, comment: '会員の情報を管理するテーブル') do |t|
      t.references(:dojang, null: false, foreign_key: true, comment: '道場ID')
      t.references(:course, null: false, foreign_key: true, comment: 'コースID')
      t.references(:gender, null: false, foreign_key: true, comment: 'ジェンダーID')
      t.date(:membership_start_date, null: true, comment: '入会年月日')
      t.date(:membership_end_date, null: true, comment: '退会年月日')
      t.string(:name, null: false, comment: '名前')
      t.string(:name_kana, null: false, comment: '名前カナ')
      t.string(:abbreviation, null: true, comment: '略称')
      t.date(:date_of_birth, null: true, comment: '生年月日')
      t.string(:postal_code, null: true, comment: '郵便番号')
      t.string(:address1, null: true, comment: '住所1')
      t.string(:address2, null: true, comment: '住所2')
      t.string(:telephone_number, null: true, comment: '電話番号')
      t.string(:occupation, null: true, comment: '職業')
      t.string(:parents, null: true, comment: '保護者')
      t.string(:parents_telephone_number, null: true, comment: '保護者電話番号')
      t.boolean(:status_flg, null: false, default: true, comment: 'ステータスフラグ')
      t.integer(:created_by, null: true, comment: '作成ユーザーID')
      t.integer(:updated_by, null: true, comment: '更新ユーザーID')

      t.timestamps
    end
  end
end
