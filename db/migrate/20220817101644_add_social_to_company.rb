class AddSocialToCompany < ActiveRecord::Migration[7.0]
  def change
    add_reference :socials, :companies, null: true, foreign_key: true
    rename_column :socials, :companies_id, :company_id
  end
end
