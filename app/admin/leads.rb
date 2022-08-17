# frozen_string_literal: true

ActiveAdmin.register Lead do
  permit_params :name, :email, :data_proc_consent, :delivered, :prize_id, interests: []

  controller do
    def update
      params[:lead][:interests] = params[:lead][:interests].split(',')
      super
    end
  end
end
