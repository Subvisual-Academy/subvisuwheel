# frozen_string_literal: true

# Controller that manages leads
class LeadsController < ApplicationController
  def index
    render json: Lead.all
  end

  def create
    lead = Lead.create(leads_params)
    render json: lead
  end

  def leads_params
    params.require(:lead).permit(:name, :email, :interests, :data_proc_consent)
  end
end
