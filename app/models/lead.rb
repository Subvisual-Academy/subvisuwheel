# frozen_string_literal: true

# Class that holds lead information
class Lead < ApplicationRecord
  validates :name, :email, presence: true
  belongs_to :prize, optional: true

  def assign_prize(prize_won)
    update!(prize: prize_won)
  end
end
