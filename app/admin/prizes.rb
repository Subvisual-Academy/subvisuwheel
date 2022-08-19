# frozen_string_literal: true

ActiveAdmin.register Prize do
  permit_params :name, :percentage, :image, :description, :identifier, :prize_type

  controller do
    def create
      total_prizes_percentages = Prize.pluck(:percentage).sum + params[:prize][:percentage].to_i
      total_prizes_percentages > 100 ? (render json: 'Error! The total percentage is greater than 100%!') : super
    end

    def update
      total_prizes_percentages = (Prize.pluck(:percentage).sum - Prize.find_by(id: params[:id]).percentage) +
                                 params[:prize][:percentage].to_i
      total_prizes_percentages > 100 ? (render json: 'Error! The total percentage is greater than 100%!') : super
    end

    def destroy
      if Lead.find_by(prize_id: params[:id])
        Prize.find_by(id: params[:id]).update(percentage: 0)
        render json: 'You can\'t destroy this prize, because you\'ll destroy that prize on Leads records!
                      So the prize percentage will be changed to 0! Go back to the Prizes List and refresh the page!'
      else
        super
      end
    end
  end
end
