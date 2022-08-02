class UpdatePrizeLeadForeignKey < ActiveRecord::Migration[7.0]
  def change
    rename_column :leads, :prizes_id, :prize_id
  end
end
