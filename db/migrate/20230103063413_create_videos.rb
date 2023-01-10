class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :video_url
      t.integer :course_id

      t.timestamps
    end
  end
end
