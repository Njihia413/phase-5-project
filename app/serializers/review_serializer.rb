class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :book_id
  attributes :id, :rating, :description
end
