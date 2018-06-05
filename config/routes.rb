Rails.application.routes.draw do
  get 'all_products/index'

  get 'register/index'

  get 'login/index'

  get 'products/index'

  get 'all_products/index'

  root :to => "home#index"
  get "home" => "home#index"

  get "products" => "products#index"
  get "all_products" => "all_products#index"
  get "login" => "login#index"
  get "register" => "register#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
