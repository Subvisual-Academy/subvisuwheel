# frozen_string_literal: true

Rails.application.routes.draw do
  get '/prizes', to: 'prizes#index'
  post '/win-prize', to: 'prizes#win_prize'
  get '/leads', to: 'leads#index'
  post '/leads', to: 'leads#create'
end
