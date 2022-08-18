class RenameDataProcConsent < ActiveRecord::Migration[7.0]
  def change
    rename_column :leads, :data_proc_consent, :job_consent
  end
end
