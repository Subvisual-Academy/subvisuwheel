# frozen_string_literal: true

class Lead < ApplicationRecord
  validates :name, :email, :interests, presence: true
end
