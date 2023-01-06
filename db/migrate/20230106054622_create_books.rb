class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :category
      t.string :author
      t.string :description
      t.string :image_url
      t.integer :course_id

      t.timestamps
    end
  end
end
