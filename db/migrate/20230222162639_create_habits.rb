class CreateHabits < ActiveRecord::Migration[7.0]
  def change
    create_table :habits do |t|
      t.integer :user_id
      t.string :goal
      t.integer :frequency_num
      t.string :frequency_denominator
      t.datetime :start_date
      t.integer :display_order
      t.integer :category_id

      t.timestamps
    end
  end
end
