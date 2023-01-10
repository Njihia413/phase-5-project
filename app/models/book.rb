class Book < ApplicationRecord
    belongs_to :course
    has_many  :reviews
    validates :title, :image_url,:author, :description,  presence: true
    has_many :reviews
end
