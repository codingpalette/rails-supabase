
Rails.application.routes.draw do
    devise_for :users
  # get 'abouts/index'
  # get 'abouts/show'
  # get 'abouts/new'
  # get 'abouts/edit'
  # get '/posts', to: 'posts#index'
  # get 'posts/index'
  # get 'posts/show'
  # get 'posts/new'
  # get 'posts/edit'
  get 'pages/home'
  root "articles#index"

  resources :articles
end
