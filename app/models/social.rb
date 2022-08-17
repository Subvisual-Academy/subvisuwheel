# frozen_string_literal: true

class Social < ApplicationRecord
  validates :name, :url, presence: true

  belongs_to :company
end
