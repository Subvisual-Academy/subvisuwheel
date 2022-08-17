# frozen_string_literal: true

ActiveAdmin.register Company do
  permit_params :name, :website, :selected
end
