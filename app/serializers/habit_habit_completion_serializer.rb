class HabitHabitCompletionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :goal, :frequency_num, :frequency_denominator, :start_date, :display_order, :category_id

  has_many :habit_completion
end
