# frozen_string_literal: true

class Email < ApplicationRecord
  validates :email_type, :subject, :body, presence: true
end
