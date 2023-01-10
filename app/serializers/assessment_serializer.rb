class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :assessment_name, :date, :questions, :user_id
end
