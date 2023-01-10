class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :description
      t.integer :book_id

      t.timestamps
    end
  end
end
