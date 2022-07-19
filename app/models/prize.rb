class Prize < ApplicationRecord
  belongs_to :wheel

  validates :name, presence: true
  validates :percentage, presence: true
  validates :image, presence: true
end
