class CreateWheels < ActiveRecord::Migration[7.0]
  def change
    create_table :wheels do |t|
      t.string :name, presence: true
      t.string :logo, presence: true

      t.timestamps
    end
  end
end
