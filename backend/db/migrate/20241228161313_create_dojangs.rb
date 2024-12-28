class CreateDojangs < ActiveRecord::Migration[8.0]
  def change
    create_table(:dojangs, comment: '道場の情報を管理するテーブル') do |t|
      t.string(:name, null: false, comment: '道場名')
      t.string(:name_kana, null: false, comment: '道場名カナ')
      t.string(:person_in_charge, null: true, comment: '道場責任者')
      t.boolean(:status_flg, null: false, default: true, comment: 'ステータスフラグ')
      t.integer(:created_by, null: true, comment: '作成ユーザーID')
      t.integer(:updated_by, null: true, comment: '更新ユーザーID')

      t.timestamps
    end
  end
end
