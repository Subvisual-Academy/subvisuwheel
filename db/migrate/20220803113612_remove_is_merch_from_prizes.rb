class RemoveIsMerchFromPrizes < ActiveRecord::Migration[7.0]
  def change
    remove_column :prizes, :is_merch, :boolean
  end
end
