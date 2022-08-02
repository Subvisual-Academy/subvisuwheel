# frozen_string_literal: true

class Prize < ApplicationRecord
  validates :name, presence: true
  validates :percentage, presence: true
  validates :image, presence: true
  has_many :leads
end
