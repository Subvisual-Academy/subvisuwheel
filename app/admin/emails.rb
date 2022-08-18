# frozen_string_literal: true

ActiveAdmin.register Email do
  permit_params :email_type, :subject, :body
end
