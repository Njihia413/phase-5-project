class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self,
         :authentication_keys => {email: true, login: false}


    
         validates :username, presence: true, uniqueness: { case_sensitive: false } 
       
         
         
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
  
end
