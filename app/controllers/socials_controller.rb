# frozen_string_literal: true

# Controller that manages socials
class SocialsController < ApiController
  def index
    render json: Social.all
  end

  def show
    render json: serialize_socials(Company.selected)
  end

  private

  def serialize_socials(company)
    company.socials.each_with_object({}) do |social, acc|
      acc[social.name.downcase] = social.url
    end
  end
end
