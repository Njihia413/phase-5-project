Rails.application.routes.draw do
  
  devise_for :users,controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  get '/member_details' => 'members#index'


  namespace :api do
    namespace :v1 do 
       post 'password/forgot', to: 'password#forgot'
       post 'password/reset', to: 'password#reset'
      resources :courses, :videos, :books, :reviews 
    end
  end
end 
