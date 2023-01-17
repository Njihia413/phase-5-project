class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :choices, :answer, :assessment_id
end
