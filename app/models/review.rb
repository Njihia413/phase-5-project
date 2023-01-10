class Review < ApplicationRecord
    belongs_to :book
    validates :rating,  :description, presence: true
end
