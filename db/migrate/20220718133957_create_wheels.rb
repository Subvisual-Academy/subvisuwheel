class CreateWheels < ActiveRecord::Migration[7.0]
  def change
    create_table :wheels do |t|
      t.string :name
      t.string :logo
      t.references :prizes, null: false, foreign_key: true
      t.references :wheelConfigurations, null: false, foreign_key: true

      t.timestamps
    end
  end
end
