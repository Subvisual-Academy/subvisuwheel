class Wheel < ApplicationRecord
    has_many :prizes
        validates :name, presence: true
        validates :logo, presence: true
        validates :wheelConfiguration, presence: true
end
