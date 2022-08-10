class ChangeInterestsType < ActiveRecord::Migration[7.0]
  def change
    remove_column :leads, :interests, :string
    add_column :leads, :interests, :string, array: true, default: []
  end
end
