class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :location
      t.string :ctype
      t.string :salary
      t.string :experience_level
      t.text :description
      t.text :additional_info

      t.timestamps
    end
  end
end
