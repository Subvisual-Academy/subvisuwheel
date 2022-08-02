# frozen_string_literal: true

class Lead < ApplicationRecord
  validates :name, :email, :interests, presence: true
  belongs_to :prize, optional: true
end
