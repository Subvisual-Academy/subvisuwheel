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

ActiveRecord::Schema[7.0].define(version: 2022_07_18_133957) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "author"
    t.string "title"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prizes", force: :cascade do |t|
    t.bigint "wheel_id"
    t.string "name"
    t.integer "percentage"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["wheel_id"], name: "index_prizes_on_wheel_id"
  end

  create_table "wheel_configurations", force: :cascade do |t|
    t.bigint "wheel_id"
    t.string "color_1"
    t.string "color_2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["wheel_id"], name: "index_wheel_configurations_on_wheel_id"
  end

  create_table "wheels", force: :cascade do |t|
    t.string "name"
    t.string "logo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
