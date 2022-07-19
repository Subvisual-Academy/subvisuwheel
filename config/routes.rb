Rails.application.routes.draw do
  get '/wheel', to: 'wheels#show'

  scope '/wheel' do
    get '/prizes', to: 'prizes#index'
    get '/configurations', to: 'wheel_configurations#index'
  end
end
