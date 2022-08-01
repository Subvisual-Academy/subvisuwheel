class Prize < ApplicationRecord
  validates :name, presence: true
  validates :percentage, presence: true, numericality: { less_than_or_equal_to: 100, only_integer: true }
  validates :image, presence: true
end
