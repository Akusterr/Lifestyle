class CreateHabitCompletions < ActiveRecord::Migration[7.0]
  def change
    create_table :habit_completions do |t|
      t.integer :habit_id

      t.timestamps
    end
  end
end
