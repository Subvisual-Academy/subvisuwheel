# frozen_string_literal: true

class TermsAndCondition < ApplicationRecord
  validates :link, presence: true
end
