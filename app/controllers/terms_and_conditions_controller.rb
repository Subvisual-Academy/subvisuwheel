# frozen_string_literal: true

# Controller that manages terms and conditions
class TermsAndConditionsController < ApiController
    def index
      render json: TermsAndCondition.find(1).slice(:link)
    end
end