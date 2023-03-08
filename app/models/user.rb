class User < ApplicationRecord
    has_secure_password

    has_many :habits
    has_many :habit_completions, through: :habits 
    has_many :categories, through: :habits

    validates :email, uniqueness: true, on: :create
    validates :email, presence: true
    validates :password, length: { in: 6..20 }

    def username_unpermitted
        unless username.starts_with?(/\A[a-zA-Z ]+\z/)
            errors.add(:username_unpermitted, ": Sorry! We only alllow usernames to start with letters. Please try again.")
        end
    end
end
