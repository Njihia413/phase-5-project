class RolesController < ApplicationController

     # POST /roles
  def create
    role = Role.create(role_params)
    render json: role, status: :created
  end

  # GET /roles/:id
  def show
    role = find_role
    render json: role
  end

  private

  def find_role
    Role.find(params[:id])
  end

  def role_params
    params.permit(:category )
  end

  def render_not_found_response
    render json: { error: "Role not found" }, status: :not_found
  end
end
