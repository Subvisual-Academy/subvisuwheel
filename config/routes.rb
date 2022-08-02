# frozen_string_literal: true

Rails.application.routes.draw do
  get '/prizes', to: 'prizes#index'
  get '/win-prize', to: 'prizes#win_prize'
  post '/leads', to: 'leads#create'
end
