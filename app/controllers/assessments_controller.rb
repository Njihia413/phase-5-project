class AssessmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET
    def index
      assessments = Assessment.all
      render json: assessments
    end
    # GET
    def show
      assessment = find_assessment
      render json: assessment
    end
    # PATCH 
    def update
      assessment = find_assessment
      assessment.update(assessment_params)
      render json: assessment
    end
    # DELETE
    def destroy
      assessment = find_assessment
      assessment.destroy
      head :no_content
    end

    private
    def find_assessment
      Assessment.find(params[:id])
    end

    def assessment_params
      params.permit(:assessment_name, :date, :questions, :user_id)
    end
    def render_not_found_response
      render json: { error: "Assessment not found" }, status: :not_found
    end
end
