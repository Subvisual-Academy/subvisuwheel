require 'pickup'

class PrizesController < ApplicationController
  def index
    render json: Prize.all
  end

  def create
    prize = Prize.create(prize_params)
    render json: prize
  end

  def win_prize
    object = Hash.new
    prizes = Prize.all.map do |prize|
      object[prize.name] = prize.percentage
    end
    
    pickup = Pickup.new(object)

    render json: Prize.where(name: pickup.pick)
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :is_token_based)
  end
end
