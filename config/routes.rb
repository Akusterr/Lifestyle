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

  #Get all habits to render on DOM
  get "/habits", to: "habits#show"

  get "/users/:userId/habits", to: "users#userHabits"

  post "/habits/:habitId/habitCompletions", to: "habit_completions#create"

  patch "/updateUser/:id", to: "users#update"

  delete "/deleteUser/:id", to: "users#destroy"

end
