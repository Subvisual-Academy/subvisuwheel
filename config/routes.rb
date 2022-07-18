Rails.application.routes.draw do
  # ----- Wheel Configuration ----- #
  get "/wheel", to: "wheel#index"
end
