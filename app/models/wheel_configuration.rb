class WheelConfiguration < ApplicationRecord
  belongs_to :wheel

  validates :main_color, presence: true
  validates :secondary_color, presence: true
end
