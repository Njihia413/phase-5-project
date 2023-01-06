class ApplicationController < ActionController::API
    include ActionController::Cookies 

    rescue_from CanCan::AccessDenied  do |exception|
        render json: { warning: exception, status: 'authorization_failed' }
    end
end
