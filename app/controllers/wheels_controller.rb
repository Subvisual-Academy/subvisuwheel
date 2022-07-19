class WheelsController < ApplicationController
  def index
    wheels = Wheel.all.map do |wheel|
      serialized_wheel(wheel)
    end

    render json: wheels
  end

  def show
    wheel = Wheel.find(params[:id])
    render json: serialized_wheel(wheel)
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

  def serialized_wheel(wheel)
    serialized_prizes = wheel.prizes.map do |prize|
      prize.slice(:id, :name, :percentage, :image)
    end

    wheel
      .slice(:id, :name, :logo)
      .merge(
        prizes: serialized_prizes,
        config: wheel.wheel_configuration.slice(:id, :main_color, :secondary_color)
      )
  end
end
