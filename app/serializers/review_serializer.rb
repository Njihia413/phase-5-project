class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description
end
