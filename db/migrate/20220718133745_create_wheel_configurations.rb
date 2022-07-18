class CreateWheelConfigurations < ActiveRecord::Migration[7.0]
  def change
    create_table :wheel_configurations do |t|
      t.string :color_1
      t.string :color_2
      t.references :wheel

      t.timestamps
    end
  end
end
