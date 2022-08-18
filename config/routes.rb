# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get '/prizes', to: 'prizes#index'
  post '/prizes', to: 'prizes#create'
  get '/socials', to: 'socials#show'
  post '/win-prize', to: 'prizes#win_prize'
  get '/leads', to: 'leads#index'
  post '/leads', to: 'leads#create'
  get '/emails', to: 'emails#index'
  get '/terms', to: 'terms_and_conditions#index'
end
