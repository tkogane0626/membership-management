class CreateGenders < ActiveRecord::Migration[8.0]
  def change
    create_table(:genders, comment: 'ジェンダー情報を管理するテーブル') do |t|
      t.string(:name, null: false, comment: 'ジェンダー名')
      t.string(:code, null: false, comment: 'ジェンダーコード')
      t.boolean(:status_flg, null: false, default: true, comment: 'ステータスフラグ')
      t.integer(:created_by, null: true, comment: '作成ユーザーID')
      t.integer(:updated_by, null: true, comment: '更新ユーザーID')

      t.timestamps
    end
  end
end
