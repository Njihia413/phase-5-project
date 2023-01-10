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

  resources :reviews
  resources :books
  resources :videos
  resources :courses
  resources :assessments, only:[:show, :index, :update, :destroy]
  resources :roles, only: [:show, :create]
  #resources :users
  #resources :teachers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # route to test your configuration
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
