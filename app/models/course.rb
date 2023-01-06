class Course < ApplicationRecord
  belongs_to :user
  has_many :videos
  has_many  :books

  validates :name, presence: true, uniqueness: true
  validates :image_url,  presence: true
end
