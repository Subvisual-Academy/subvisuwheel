module Wheels
  class ConfigurationsController < ApplicationController
    def index
      render json: WheelConfiguration.all
    end

    def create
      wheel_configuration = WheelConfiguration.create(wheel_configuration_params)
      render json: wheel_configuration
    end

    private

    def wheel_configuration_params
      params.require(:wheel_configuration).permit(:main_color, :secondary_color)
    end
  end
end
