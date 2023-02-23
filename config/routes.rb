Rails.application.routes.draw do
  resources :habits
  resources :habit_completions
  resources :categories
  resources :users


  # Login route, goes to sessions#create because creating a new session with each login
  post "/login", to: "sessions#create"

  #Logout route
  delete "/logout", to: "sessions#destroy"

  # Signup route
  post "/signup", to: "users#create"

  #Allows users to stay logged in by showing just that on user
  get "/me", to: "users#show"

  #Create a new goal
  post "/goals", to: "habits#create"




  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
