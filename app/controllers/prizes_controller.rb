# frozen_string_literal: true

# Controller that manages prizes
class PrizesController < ApiController
  def index
    render json: Prize.all
  end

  def create
    total_prizes_percentages = Prize.pluck(:percentage).sum
    if total_prizes_percentages > 100 || total_prizes_percentages + params[:percentage] > 100
      render json: 'Error! The total percentage is greater than 100%!'
    else
      prize = Prize.create(prize_params)
      render json: prize
    end
  end

  def win_prize
    lead = Lead.find_by(email: params[:email])

    if lead.prize.nil?
      won_prize = sort_prize
      name_lead = assign_prize_to_lead(won_prize)
      send_email(name_lead, won_prize)

      render json: Prize.find_by(name: won_prize)
    else
      render json: lead.prize
    end
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier)
  end

  def sort_prize
    prizes_list = Prize.all.each_with_object({}) do |prize, acc|
      acc[prize.name] = prize.percentage
    end

    Pickup.new(prizes_list).pick
  end

  def assign_prize_to_lead(prize_won)
    lead = Lead.find_by(email: params[:email])
    prize_info = Prize.find_by(name: prize_won)
    lead.update(prize: prize_info)

    lead.name
  end

  def send_email(name_lead, prize_won)
    prize_info = Prize.find_by(name: prize_won)

    if prize_info.prize_type == 'Merch'
      send_email_merch(name_lead, prize_won)
    else
      send_email_nft(name_lead, prize_won)
    end
  end

  def send_email_merch(name_lead, prize_won)
    email_info = Email.find_by(email_type: 'Merch')

    ApplicationMailer.with(email: params[:email], lead_name: name_lead, prize_name: prize_won, code_to_claim: '23345',
                           email_subject: email_info.subject, email_body: email_info.body)
                     .win_merch_prize_email
                     .deliver_now
  end

  def send_email_nft(name_lead, prize_won)
    email_info = Email.find_by(email_type: 'NFT')

    ApplicationMailer.with(email: params[:email], lead_name: name_lead, prize_name: prize_won,
                           email_subject: email_info.subject, email_body: email_info.body)
                     .win_nft_prize_email
                     .deliver_now
  end
end
