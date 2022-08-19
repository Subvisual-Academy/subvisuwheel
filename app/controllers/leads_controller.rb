# frozen_string_literal: true

# Controller that manages leads
class LeadsController < ApiController
  def index
    render json: Lead.all
  end

  def create
    lead = Lead.find_by(email: leads_params[:email])
    if lead
      lead.update(leads_params)
    else
      lead = Lead.create(leads_params)
      render json: lead
    end
  end

  def leads_params
    params.require(:lead).permit(:name, :email, [interests: []], :job_consent)
  end
end
