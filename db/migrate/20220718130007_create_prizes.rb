class CreatePrizes < ActiveRecord::Migration[7.0]
  def change
    create_table :prizes do |t|
      t.string :name
      t.integer :percentage
      t.string :image

      t.timestamps
    end
  end
end
