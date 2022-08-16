# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get '/prizes', to: 'prizes#index'
  post '/prizes', to: 'prizes#create'
  post '/win-prize', to: 'prizes#win_prize'
  post '/leads', to: 'leads#create'
end
