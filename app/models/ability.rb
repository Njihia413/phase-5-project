# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    if user.teacher?
      can :manage, :all
    elsif  user.student?
       can :read, :all
       
    end
    
   
  end
end
