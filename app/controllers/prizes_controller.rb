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
    render json: Prize.find_by(name: pickup.pick)
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :is_merch)
  end
end
