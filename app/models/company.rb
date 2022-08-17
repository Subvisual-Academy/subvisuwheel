# frozen_string_literal: true

# Model that allows storing companies
class Company < ApplicationRecord
  before_save :ensure_only_one_selected

  validates :name, :website, :selected, presence: true

  has_many :socials

  scope :selected, -> { find_by(selected: true) }

  private

  def ensure_only_one_selected
    self.class.update_all(selected: false)
  end
end
