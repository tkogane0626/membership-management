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

ActiveRecord::Schema[8.0].define(version: 2024_12_28_170636) do
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

  create_table "memberships", comment: "会員の情報を管理するテーブル", force: :cascade do |t|
    t.bigint "dojang_id", null: false, comment: "道場ID"
    t.bigint "course_id", null: false, comment: "コースID"
    t.bigint "gender_id", null: false, comment: "ジェンダーID"
    t.date "membership_start_date", comment: "入会年月日"
    t.date "membership_end_date", comment: "退会年月日"
    t.string "name", null: false, comment: "名前"
    t.string "name_kana", null: false, comment: "名前カナ"
    t.string "abbreviation", comment: "略称"
    t.date "date_of_birth", comment: "生年月日"
    t.string "postal_code", comment: "郵便番号"
    t.string "address1", comment: "住所1"
    t.string "address2", comment: "住所2"
    t.string "telephone_number", comment: "電話番号"
    t.string "occupation", comment: "職業"
    t.string "parents", comment: "保護者"
    t.string "parents_telephone_number", comment: "保護者電話番号"
    t.boolean "status_flg", default: true, null: false, comment: "ステータスフラグ"
    t.integer "created_by", comment: "作成ユーザーID"
    t.integer "updated_by", comment: "更新ユーザーID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_memberships_on_course_id"
    t.index ["dojang_id"], name: "index_memberships_on_dojang_id"
    t.index ["gender_id"], name: "index_memberships_on_gender_id"
  end

  add_foreign_key "memberships", "courses"
  add_foreign_key "memberships", "dojangs"
  add_foreign_key "memberships", "genders"
end
