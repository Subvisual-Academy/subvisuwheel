# frozen_string_literal: true

# Controller that manages prizes
class PrizesController < ApplicationController
  def index
    render json: Prize.all
  end

  def create
    prize = Prize.create(prize_params)
    render json: prize
  end

  def win_prize
    won_prize = sort_prize
    name_lead = assign_prize_to_lead(won_prize)
    send_email(name_lead, won_prize)

    render json: Prize.find_by(name: won_prize)
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
      ApplicationMailer.with(email: params[:email], lead_name: name_lead, prize_name: prize_won, code_to_claim: '23345')
                       .win_merch_prize_email
                       .deliver_now
    else
      ApplicationMailer.with(email: params[:email], lead_name: name_lead, prize_name: prize_won)
                       .win_nft_prize_email
                       .deliver_now
    end
  end
end
