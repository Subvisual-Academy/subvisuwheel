Rails.application.routes.draw do
  get "/prizes", to: "prizes#index"
  get "/configurations", to: "wheel_configurations#index"

  resources :wheels
end
