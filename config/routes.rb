Rails.application.routes.draw do
  get '/wheels', to: 'wheels#show'

  namespace :wheels do
    get '/prizes', to: 'prizes#index'
    get '/configurations', to: 'configurations#index'
  end
end
