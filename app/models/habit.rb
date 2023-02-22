class Habit < ApplicationRecord
    belongs_to :user
    belongs_to :category 
    belongs_to :habit_completions
end
