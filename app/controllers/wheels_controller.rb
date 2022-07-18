class WheelsController < ApplicationController
    def index
      render json: Wheel.all
    end

    def show
      render json: Wheel.find(params[:id])
    end

    def delete
        Wheel.delete(params[:id])
        render json: Wheel.delete(params[:id])
    end

    def create
        wheel = Wheel.create(wheel_params)
        render json: wheel
    end

    def update
        wheel = Wheel.find(params[:id])
        wheel.update(wheel_params)
        render json: wheel
    end


    private

    def wheel_params
        params.require(:wheel).permit(:name, :logo, :prizes, :wheel_configuration)
    end
end
