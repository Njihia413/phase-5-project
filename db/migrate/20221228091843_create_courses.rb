class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :videos, array:true, default: []
      t.string :books,array:true, default: []

      t.timestamps
    end
  end
end
