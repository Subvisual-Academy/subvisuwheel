# frozen_string_literal: true

# Class that holds prize information
class Prize < ApplicationRecord
  validates :name, presence: true
  validates :percentage, presence: true, numericality: { less_than_or_equal_to: 100, only_integer: true }
  validates :image, presence: true
  validates :prize_type, presence: true
  validates :description, presence: true
  validates :identifier, presence: true
  has_many :leads

  def self.random_select
    prizes_list = Prize.all.each_with_object({}) do |prize, acc|
      acc[prize.name] = prize.percentage
    end

    prize_name = Pickup.new(prizes_list).pick
    Prize.find_by(name: prize_name)
  end
end
