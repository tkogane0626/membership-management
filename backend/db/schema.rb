# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_12_28_165350) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "courses", comment: "コースの情報を管理するテーブル", force: :cascade do |t|
    t.string "name", null: false, comment: "コース名"
    t.string "name_kana", null: false, comment: "コース名カナ"
    t.boolean "status_flg", default: true, null: false, comment: "ステータスフラグ"
    t.integer "created_by", comment: "作成ユーザーID"
    t.integer "updated_by", comment: "更新ユーザーID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dojangs", comment: "道場の情報を管理するテーブル", force: :cascade do |t|
    t.string "name", null: false, comment: "道場名"
    t.string "name_kana", null: false, comment: "道場名カナ"
    t.string "person_in_charge", comment: "道場責任者"
    t.boolean "status_flg", default: true, null: false, comment: "ステータスフラグ"
    t.integer "created_by", comment: "作成ユーザーID"
    t.integer "updated_by", comment: "更新ユーザーID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", comment: "ジェンダー情報を管理するテーブル", force: :cascade do |t|
    t.string "name", null: false, comment: "ジェンダー名"
    t.string "code", null: false, comment: "ジェンダーコード"
    t.boolean "status_flg", default: true, null: false, comment: "ステータスフラグ"
    t.integer "created_by", comment: "作成ユーザーID"
    t.integer "updated_by", comment: "更新ユーザーID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
