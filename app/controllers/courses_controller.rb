class CoursesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # GET /courses
    def index
      courses = Course.all
      render json: courses
    end
    # POST /courses
    def create
      course = Course.create(course_params)
      render json: course, status: :created
    end
    # GET /courses/:id
    def show
      course =  Course.find(params[:id])
      render json: course,status: :ok, serializer: CourseVideoBookSerializer
    end
    # PATCH /courses/:id
    def update
      course =  Course.find(params[:id])
      course.update(course_params)
      render json: course
    end
    # DELETE /courses/:id
    def destroy
      course =  Course.find(params[:id])
      course.destroy
      head :no_content
    end
    private
    def course_params
      params.permit(:name, :videos, :books)
    end
    def render_not_found_response
      render json: { error: "Course not found" }, status: :not_found
    end
end
