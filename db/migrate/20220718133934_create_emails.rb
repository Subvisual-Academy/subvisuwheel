class CreateEmails < ActiveRecord::Migration[7.0]
  def change
    create_table :emails do |t|
      t.string :email_type
      t.string :subject
      t.string :body

      t.timestamps
    end
  end
end
