class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :book_id
end
