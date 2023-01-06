class Api::V1::CoursesController < ApplicationController
   
    before_action :set_course, only: [:show,  :update, :destroy]

    def index
        @courses = Course.all
        #@courses = current_user.courses
        render json: @courses, status: :ok
    end

    def show
        @course = set_course
        render json: @course,status: :ok, serializer: CourseBookVideoSerializer
    end
     

    def  create
        @course = Course.new(course_params)
        #@course = current_user.courses.new(course_params)
        
        if @course.save
            render json: @course, status: :ok
        else
            render json: {data:  @course.errors.full_messages, status: 'failed'}, status: :unprocessable_entity 
        end
    end 

    def update 
        if @course.update(course_params)
            render json: @course, status: :ok
        else
            render json: {data:  @course.errors.full_messages, status: 'failed'}, status: :unprocessable_entity 
        end
         
    end  

    def destroy
        if @course.destroy
           render json: { data: 'Course was successfully destroyed.' , status: 'success'}, status: :ok 
        else 
            render json: { data: 'something went wrong', status: 'failed'}
        end
    end
     
    private
    def set_course
        @course = Course.find(params[:id])
        #@course = current_user.courses.find(params[:id])
    rescue ActiveRecord::RecordNotFound => error
          render json: error.message, status: :unauthorized
    end
    
    def course_params
        params.require(:course).permit(:name, :image_url, :user_id)
    end
end
