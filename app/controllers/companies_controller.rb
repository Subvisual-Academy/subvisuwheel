# frozen_string_literal: true

# Controller that manages companies
class CompaniesController < ApiController
  def index
    render json: Company.all
  end

  def show
    render json: serialize_company(Company.selected)
  end

  private

  def serialize_company(company)
    company
      .slice(:name, :website)
  end
end
