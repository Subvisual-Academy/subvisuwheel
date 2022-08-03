class AddTypeToPrizes < ActiveRecord::Migration[7.0]
  def change
    add_column :prizes, :prize_type, :string
  end
end
