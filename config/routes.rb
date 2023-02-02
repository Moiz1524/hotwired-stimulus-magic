Rails.application.routes.draw do
  get 'welcome/index'
  root to: "events#index"
  
  resources :events do
    resources :likes
    # resources :reposts
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
