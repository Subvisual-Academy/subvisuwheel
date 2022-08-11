# frozen_string_literal: true

ActiveAdmin.register Lead do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #

  permit_params :name, :email, :data_proc_consent, :delivered, :prize_id, interests: []

  controller do
    def update
      params[:lead][:interests] = params[:lead][:interests].split(',')
      super
    end
  end
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :email, :data_proc_consent, :delivered, :prize_id, :interests]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
