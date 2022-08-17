# frozen_string_literal: true

# Controller that manages leads
class CompaniesController < ApiController
  def index
    render json: serialize_company(Company.find_by(selected: true))
  end

  def serialize_company(company)
    serialized_socials = Social.where(company_id: company.id).map do |social|
      social.slice(:name, :url)
    end

    company
      .slice(:name, :website)
      .merge(socials: serialized_socials)
  end
end
