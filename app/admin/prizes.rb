# frozen_string_literal: true

ActiveAdmin.register Prize do
  permit_params :name, :percentage, :image, :description, :identifier, :prize_type
end
