class Api::V1::ReviewsController < ApplicationController

  load_and_authorize_resource
  
    before_action :find_review, only: [:show,  :update, :destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET
    def index
      @reviews = Review.all
      render json: @reviews
    end
    # POST
    def create
      @review = Review.create(review_params)
      render json: @review, status: :created
    end
     # GET
  def show
     @review = find_review
     render json: @review
  end
    # PATCH
    def update
      @review = find_review
      review.update(review_params)
      render json: @review
    end
    # DELETE
    def destroy
      @review = find_review
      @review.destroy
      head :no_content
    end
    private
    def find_review
      Review.find(params[:id])
    end
    def review_params
      params.permit(:rating, :description, :book_id)
    end
    def render_not_found_response
      render json: { error: "Review not found" }, status: :not_found
    end
end
