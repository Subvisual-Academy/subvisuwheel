class CreateWheelConfigurations < ActiveRecord::Migration[7.0]
  def change
    create_table :wheel_configurations do |t|
      t.references :wheel
      t.string :main_color
      t.string :secondary_color

      t.timestamps
    end
  end
end
