class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :website
      t.boolean :selected

      t.timestamps
    end
  end
end
