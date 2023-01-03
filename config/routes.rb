Rails.application.routes.draw do
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
