# frozen_string_literal: true

ActiveAdmin.register Company do
  permit_params :name, :website, :selected

  controller do
    def destroy
      Social.where(company_id: params[:id]).destroy_all
      super
    end
  end
end
