module Wheels
  class PrizesController < ApplicationController
    def index
      render json: Prize.all
    end

    def create
      prize = Prize.create(prize_params)
      render json: prize
    end

    private

    def prize_params
      params.require(:prize).permit(:name, :percentage, :image)
    end
  end
end
