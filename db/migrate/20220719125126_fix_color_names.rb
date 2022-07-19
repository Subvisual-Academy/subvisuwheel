class FixColorNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :wheel_configurations, :color_1, :main_color
    rename_column :wheel_configurations, :color_2, :secondary_color
  end
end
