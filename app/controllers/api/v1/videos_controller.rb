class Api::V1::VideosController < ApplicationController
  before_action :find_video, only: [:show,  :update, :destroy]
  load_and_authorize_resource

  before_action :find_video, only: [:show,  :update, :destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET
    def index
      @videos = Video.all
      render json: @videos
    end
    # POST
    def create
      @video = Video.create(video_params)
      render json: @video, status: :created
    end
     # GET
  def show
     @video = find_video
    render json: @video
  end
    # PATCH
    def update
      @video = find_video
      @video.update(video_params)
      render json: @video
    end
    # DELETE
    def destroy
      @video = find_video
      @video.destroy
      head :no_content
    end
    private
    def find_video
      Video.find(params[:id])
    end
    def video_params
      params.permit(:name, :video_url, :course_id)
    end
    def render_not_found_response
      render json: { error: "Video not found" }, status: :not_found
    end
end
