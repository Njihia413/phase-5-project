Rails.application.routes.draw do

 
  devise_for :users,controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  get '/member_details' => 'members#index'
  namespace :api do
    namespace :v1 do 
      resources :courses, :videos, :books, :reviews, :assessments, :questions
    end
  end
end 

  

  
