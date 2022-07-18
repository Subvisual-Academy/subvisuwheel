class WheelConfigurationsController < ApplicationController
    # Create Wheel Configuration
    def create
        wheelConfiguration = Wheel.create(wheelConfiguration_params)
        render json: wheelConfiguration
    end


    private

    # WheelConfiguration
    def wheelConfiguration_params
        params.require(:wheelConfiguration).permit(:color_1, :color_2)
    end
end
