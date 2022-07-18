Rails.application.routes.draw do
  # ----- Wheel Configuration ----- #
  get "/wheel", to: "wheels#index"
  get "/prizes", to: "prizes#index"
  get "/wheel-configurations", to: "wheel_configurations#index"
end
