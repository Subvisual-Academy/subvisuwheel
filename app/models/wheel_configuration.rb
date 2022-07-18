class WheelConfiguration < ApplicationRecord
    belongs_to :wheel
        validates :color_1, presence: true
        validates :color_2, presence: true
end
