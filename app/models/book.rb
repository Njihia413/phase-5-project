class Book < ApplicationRecord
    belongs_to :course
    has_many  :reviews
    validates :title, :author, presence: true, uniqueness: true
    validates :image_url, :description,  presence: true
    validates :title, :image_url,:author, :description,  presence: true
    has_many :reviews
end
