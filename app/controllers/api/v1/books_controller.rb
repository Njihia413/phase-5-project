class Api::V1::BooksController < ApplicationController
    before_action :find_book, only: [ :show,  :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET 
    def index
      @books = Book.all
      render json: @books
    end
  
    # POST 
    def create 
      @book = Book.create(boook_params)
      render json: @book, status: :created
    end
  
     # GET
  def show
     @book = find_book
    render json: @book, status: :ok, serializer: BookReviewSerializer
  end

   
    # DELETE 
    def destroy
      @book = find_book
      @book.destroy
      head :no_content
    end
  
    private
    def find_book
      Book.find(params[:id])
    end
  
    def book_params
      params.permit(:title, :category, :author,  :description, :image_url, :course_id)
    end

    def render_not_found_response
      render json: { error: "Book not found" }, status: :not_found
    end
end
