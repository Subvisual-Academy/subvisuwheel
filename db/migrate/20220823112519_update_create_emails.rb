class UpdateCreateEmails < ActiveRecord::Migration[7.0]
  def change
    change_column :emails, :body, :text
  end
end
