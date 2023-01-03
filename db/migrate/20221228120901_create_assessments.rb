class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.string :assessment_name
      t.string :date
      t.string :questions, array: true, default: []
      t.integer :user_id

      t.timestamps
    end
  end
end
