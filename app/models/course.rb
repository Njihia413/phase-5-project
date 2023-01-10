class Course < ApplicationRecord
   has_many :videos
   has_many  :books
end
