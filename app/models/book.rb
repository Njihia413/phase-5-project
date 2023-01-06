class Book < ApplicationRecord
    belongs_to :course
    has_many  :reviews
    validates :title, :author, presence: true, uniqueness: true
    validates :image_url, :description,  presence: true
end
