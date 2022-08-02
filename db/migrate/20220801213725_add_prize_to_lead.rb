class AddPrizeToLead < ActiveRecord::Migration[7.0]
  def change
    add_reference :leads, :prizes, null: true, foreign_key: true
  end
end
