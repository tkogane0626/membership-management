Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :memberships, only:[:index] do
        post 'delete_membership', on: :member
        post 'update_membership', on: :member
      end
    end
  end
end
