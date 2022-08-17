# frozen_string_literal: true

# Controller that manages leads
class CompaniesController < ApiController
  def index
    render json: serialize_company(Company.selected)
  end

  def socials_from_company
    render json: serialize_socials_from_company(Company.selected)
  end

  def serialize_socials_from_company(company)
    company.socials.each_with_object({}) do |social, acc|
      acc[social.name.downcase] = social.url
    end
  end

  def serialize_company(company)
    serialized_socials = serialize_socials_from_company(company)
    company
      .slice(:name, :website)
      .merge(socials: serialized_socials)
  end
end
