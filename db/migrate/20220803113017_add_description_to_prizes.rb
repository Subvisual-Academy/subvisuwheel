class AddDescriptionToPrizes < ActiveRecord::Migration[7.0]
  def change
    add_column :prizes, :description, :string
  end
end
