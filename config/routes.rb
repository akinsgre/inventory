Inventory::Application.routes.draw do
  resources :items
  resources :inventory
  resources :categories
  resources :products

end
