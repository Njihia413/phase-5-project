class Api::V1::QuestionsController < ApplicationController
    load_and_authorize_resource
 
  before_action :find_question, only: [:show,  :update, :destroy]

  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET
    def index
      questions = Question.all
      render json: questions
    end
    # GET
    def show
      question = find_question
      render json: question
    end
    # PATCH 
    def update
      question = find_question
      question.update(question_params)
      render json: question
    end
    # DELETE
    def destroy
      question = find_question
      question.destroy
      head :no_content
    end

    private
    def find_question
      Question.find(params[:id])
    end

    def question_params
      params.permit(:question, :choices, :answer, :assessment_id)
    end
    def render_not_found_response
      render json: { error: "Question not found" }, status: :not_found
    end
end
