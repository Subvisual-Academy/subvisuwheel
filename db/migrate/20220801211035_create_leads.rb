class CreateLeads < ActiveRecord::Migration[7.0]
  def change
    create_table :leads do |t|
      t.string :name
      t.string :email, unique: true
      t.string :interests
      t.boolean :data_proc_consent, default: false
      t.boolean :delivered, default: false

      t.timestamps
    end
  end
end
