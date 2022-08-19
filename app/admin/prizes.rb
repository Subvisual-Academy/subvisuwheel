# frozen_string_literal: true

ActiveAdmin.register Prize do
  permit_params :name, :percentage, :image, :description, :identifier, :prize_type

  controller do
    def create
      if Prize.pluck(:percentage).sum + params[:prize][:percentage].to_i > 100
        render json: 'Error! The total percentage is greater than 100%!'
      else
        Prize.create(params.require(:prize).permit(:name, :percentage, :image, :prize_type, :description, :identifier))
        redirect_to '/admin/prizes' end
    end

    def update
      if (Prize.pluck(:percentage).sum - Prize.find_by(id: params[:id]).percentage) +
         params[:prize][:percentage].to_i > 100
        render json: 'Error! The total percentage is greater than 100%!'
      else
        super end
    end

    def destroy
      if Lead.find_by(prize_id: params[:id])
        Prize.find_by(id: params[:id]).update(percentage: 0)
        render json: 'You can\'t destroy this prize, because you\'ll destroy that prize on Leads records!
                      So the prize percentage will be changed to 0! Go back to the Prizes List and refresh the page!'
      else
        super end
    end
  end
end
