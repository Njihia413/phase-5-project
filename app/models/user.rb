class User < ApplicationRecord
    has_secure_password 
    has_many :assessments  
    enum role: [:student, :teacher]
end
