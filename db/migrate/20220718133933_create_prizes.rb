class CreatePrizes < ActiveRecord::Migration[7.0]
  def change
    create_table :prizes do |t|
      t.string :name, presence: true
      t.integer :percentage, presence: true
      t.string :image, presence: true
      t.boolean :is_merch, default: false

      t.timestamps
    end
  end
end
