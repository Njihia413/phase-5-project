class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :choices
      t.string :answer
      t.integer :assessment_id

      t.timestamps
    end
  end
end
