class BookReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :author, :description, :image_url 

  has_many :reviews
end
