# frozen_string_literal: true

# Controller that manages leads
class CompaniesController < ApiController
  def index
    render json: serialize_company(Company.is_selected)
  end

  def serialize_company(company)
    serialized_socials = Social.where(company_id: company.id).all.each_with_object({}) do |social, acc|
      acc[social.name.downcase] = social.url
    end

    company
      .slice(:name, :website)
      .merge(socials: serialized_socials)
  end
end
