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

    pickup = Pickup.new(prizes_list)
    win_prize = pickup.pick

    lead = Lead.where(email: params[:email])
    prize_info = Prize.find_by(name: win_prize)
    lead.update(prize: prize_info)

    render json: Prize.find_by(name: win_prize)
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier)
  end
end
