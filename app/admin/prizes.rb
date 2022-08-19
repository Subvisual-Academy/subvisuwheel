# frozen_string_literal: true

ActiveAdmin.register Prize do
  permit_params :name, :percentage, :image, :description, :identifier, :prize_type

  controller do
    def create
      total_prizes_percentages = Prize.pluck(:percentage).sum
      if total_prizes_percentages + params[:prize][:percentage].to_i > 100
        render json: 'Error! The total percentage is greater than 100%!'
      else
        Prize.create(prize_params)
        redirect_to '/admin/prizes'
      end
    end

    def update
      prize_info = Prize.find_by(id: params[:id])
      total_prizes_percentages = Prize.pluck(:percentage).sum - prize_info.percentage

      if total_prizes_percentages + params[:prize][:percentage].to_i > 100
        render json: 'Error! The total percentage is greater than 100%!'
      else
        super
      end
    end

    private

    def prize_params
      params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier)
    end
  end
end
