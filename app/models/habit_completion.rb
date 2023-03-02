class HabitCompletion < ApplicationRecord
    belongs_to :habit
    has_many :users, through: :habits 
    has_many :categories, through: :habits
end
