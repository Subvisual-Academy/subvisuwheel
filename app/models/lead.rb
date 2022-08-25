# frozen_string_literal: true

# Class that holds lead information
class Lead < ApplicationRecord
  validates :name, :email, presence: true
  belongs_to :prize, optional: true
end
