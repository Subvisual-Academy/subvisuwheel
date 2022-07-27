class PrizesController < ApplicationController
  def index
    render json: Prize.all
  end

  def create
    prize = Prize.create(prize_params)
    render json: prize
  end

  def win_prize
    render json: Prize.where(image: 'Logo  2')
  end

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :is_token_based)
  end
end
