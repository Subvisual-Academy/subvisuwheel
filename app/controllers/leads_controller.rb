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
    end
    render json: lead.slice(:id)
  end

  def update
    lead = Lead.find(params[:id])
    if lead.prize.nil?
      won_prize = sort_prize
      name_lead = assign_prize_to_lead(won_prize)
      send_email(name_lead, won_prize)
      prize = Prize.find_by(name: won_prize)
    else
      prize = lead.prize
    end
    render json: prize.slice(:name, :prize_type)
  end

  private

  def leads_params
    params.require(:lead).permit(:name, :email, [interests: []], :job_consent)
  end

  def sort_prize
    prizes_list = Prize.all.each_with_object({}) do |prize, acc|
      acc[prize.name] = prize.percentage
    end

    Pickup.new(prizes_list).pick
  end

  def assign_prize_to_lead(prize_won)
    lead = Lead.find(params[:id])
    prize_info = Prize.find_by(name: prize_won)
    lead.update(prize: prize_info)

    lead.name
  end

  def send_email(name_lead, prize_won)
    prize_info = Prize.find_by(name: prize_won)
    email_destination = Lead.find(params[:id]).email

    if prize_info.prize_type == 'Merch'
      send_email_merch(name_lead, prize_won, email_destination)
    else
      send_email_nft(name_lead, prize_won, email_destination)
    end
  end

  def send_email_merch(name_lead, prize_won, email_destination)
    email_info = Email.find_by(email_type: 'Merch')

    ApplicationMailer.with(email: email_destination, lead_name: name_lead, prize_name: prize_won,
                           email_subject: email_info.subject, email_body: email_info.body)
                     .win_merch_prize_email
                     .deliver_now
  end

  def send_email_nft(name_lead, prize_won, email_destination)
    email_info = Email.find_by(email_type: 'NFT')

    ApplicationMailer.with(email: email_destination, lead_name: name_lead, prize_name: prize_won,
                           email_subject: email_info.subject, email_body: email_info.body)
                     .win_nft_prize_email
                     .deliver_now
  end
end
