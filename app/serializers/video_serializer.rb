class VideoSerializer < ActiveModel::Serializer
  attributes :id, :name, :video_url, :course_id
  attributes :id, :name, :video_url
end
