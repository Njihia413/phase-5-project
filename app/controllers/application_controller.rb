class ApplicationController < ActionController::API
    include ActionController::Cookies 
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from CanCan::AccessDenied  do |exception|
        render json: { warning: exception, status: 'authorization_failed' }
    end 

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password, :password_confirmation])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password, ])
  end
    
end
