class CourseBookVideoSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_many :videos
  has_many :books
end
