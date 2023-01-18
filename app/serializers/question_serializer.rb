class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :prompt, :choices, :answer, :assessment_id
end
