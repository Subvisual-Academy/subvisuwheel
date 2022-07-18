class PrizesController < ApplicationController
    def create
        prize = Prize.create(prize_params)
        render json: prize
    end

    private

    def prize_params
        params.require(:prize).permit(:name, :percentage, :image)
    end
end
