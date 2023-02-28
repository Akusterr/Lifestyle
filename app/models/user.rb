class User < ApplicationRecord
    has_secure_password

    has_many :habits
    has_many :habit_completions, through: :habits 
    has_many :categories, through: :habits

    # validates :username, uniqueness: true, on: :create
    # validates :password, uniqueness: true, on: :create
end
