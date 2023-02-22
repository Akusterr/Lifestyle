class Category < ApplicationRecord
    has_many :habits
    has_many :users, through: :habits
    has_many :habit_completions, through: :habits
end
