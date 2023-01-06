class VideoSerializer < ActiveModel::Serializer
  attributes :id, :name, :video_url, :course_id
end
