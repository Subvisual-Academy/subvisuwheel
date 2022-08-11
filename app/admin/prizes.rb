# frozen_string_literal: true

ActiveAdmin.register Prize do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :percentage, :image, :description, :identifier, :prize_type
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :percentage, :image, :description, :identifier, :prize_type]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
