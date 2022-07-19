class CreateWheelConfigurations < ActiveRecord::Migration[7.0]
  def change
    create_table :wheel_configurations do |t|
      t.references :wheel
      t.string :color_1
      t.string :color_2

      t.timestamps
    end
  end
end
