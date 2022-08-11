# frozen_string_literal: true

class Lead < ApplicationRecord
  validates :name, :email, presence: true
  belongs_to :prize, optional: true
end
