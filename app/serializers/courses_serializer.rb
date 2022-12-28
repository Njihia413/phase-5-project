class CoursesSerializer < ActiveModel::Serializer
  attributes :id, :name, :videos, :books
end
