class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

         has_many :courses

  def jwt_payload
     super
  end

        
         has_many :courses
         attribute :role, :string, default: 'student'
  
  ROLES = %w{teacher student}


  ROLES.each do |role_name|
    define_method "#{role_name}?"   do
       role == role_name
    end
  end
  
  def jwt_payload
     super
  end
    has_secure_password 
    has_many :assessments  
    enum role: [:student, :teacher]
end
