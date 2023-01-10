class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :author, :description, :image_url, :course_id
  attributes :id, :title, :category, :author, :description, :image_url 
end
