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
    prizes_list = Prize.all.each_with_object({}) do |prize, acc|
      acc[prize.name] = prize.percentage
    end

    prize_won = Pickup.new(prizes_list).pick
    lead = Lead.find_by(email: params[:email])
    prize = Prize.find_by(name: prize_won)
    lead.update(prize: prize)

    if prize.prize_type == "Merch"
      ApplicationMailer.with(email: lead.email, lead_name: lead.name, prize_name: prize_won, code_to_claim: '23345').win_merch_prize_email.deliver_now
    else
      ApplicationMailer.with(email: lead.email, lead_name: lead.name, prize_name: prize_won).win_nft_prize_email.deliver_now
    end

    render json: Prize.find_by(name: prize_won)
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier)
  end
end
