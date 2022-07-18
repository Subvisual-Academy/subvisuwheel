class Wheel < ApplicationRecord
    has_many :prizes
    has_one :wheel_configuration
        validates :name, presence: true
        validates :logo, presence: true
end
