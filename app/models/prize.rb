class Prize < ApplicationRecord
  validates :name, presence: true
  validates :percentage, presence: true
  validates :image, presence: true
end
