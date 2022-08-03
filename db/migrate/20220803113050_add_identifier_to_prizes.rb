class AddIdentifierToPrizes < ActiveRecord::Migration[7.0]
  def change
    add_column :prizes, :identifier, :string
  end
end
