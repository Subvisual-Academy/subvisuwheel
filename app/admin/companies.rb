# frozen_string_literal: true

ActiveAdmin.register Company do
  permit_params :name, :website, :selected

  index do
    selectable_column
    id_column
    column :name
    column :website
    column :selected
    column :created_at
    column :updated_at
    actions
  end

  controller do
    def destroy
      Social.where(company_id: params[:id]).destroy_all
      super
    end
  end
end
