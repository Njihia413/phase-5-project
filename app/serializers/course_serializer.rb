class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :videos, :books
  has_one :review, serializer: CourseReviewSerializer
end
