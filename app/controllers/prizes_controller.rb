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

  private

  def prize_params
    params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier)
  end
end
