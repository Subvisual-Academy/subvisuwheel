# frozen_string_literal: true

ActiveAdmin.register Social do
  permit_params :name, :url, :company_id
end
