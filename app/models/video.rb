class Video < ApplicationRecord
    belongs_to :course

  validates :name, presence: true, uniqueness: true
  validates :video_url,  presence: true
end
