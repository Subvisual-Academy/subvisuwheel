Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  get '/prizes', to: 'prizes#index'
  get '/win-prize', to: 'prizes#win_prize'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
