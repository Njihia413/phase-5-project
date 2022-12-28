class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :course_id
end
