class ApplicationController < ActionController::API 
    #include ActionController::Cookies 
    before_action :authenticate_user!
    
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from CanCan::AccessDenied  do |exception|
        render json: { warning: exception, status: 'authorization_failed' }
    end 

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :encrypted_password, :password_confirmation]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
    
end
