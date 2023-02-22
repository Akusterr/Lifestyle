class HabitCompletion < ApplicationRecord
    has_many :habits
    has_many :users, through: :habits 
    has_many :categories, through: :habits
end
