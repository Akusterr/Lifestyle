# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Begin Seeding data..."

User.destroy_all
Category.destroy_all
Habit.destroy_all
HabitCompletion.destroy_all



puts "Seeding users..."

u1 = User.create(username: "Lex", email: "lex@sparkle.com", password: "sparkle1")
u2 = User.create(username: "JerBear", email: "jer@sparkle.com", password: "sparkle2")
u3 = User.create(username: "MarBear", email: "mar@sparkle.com", password: "sparkle3")
u4 = User.create(username: "Chaz", email: "chaz@sparkle.com", password: "sparklebutt")
u5 = User.create(username: "Tor", email: "tor@sparkle.com", password: "sparklepaw")
u6 = User.create(username: "Frodo", email: "baggins@sparkle.com", password: "sparklering")

puts "Seeding Categories..."

c1 = Category.create(name: "Personal Health")
c2 = Category.create(name: "Fitness")
c3 = Category.create(name: "Diet")
c4 = Category.create(name: "Budget")
c5 = Category.create(name: "Relationships")
c6 = Category.create(name: "Misc")

puts "Seeding habits..."

h1 = Habit.create(user_id: u1.id, goal: "Take my vitamins", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 4, category_id: c1.id)
h2 = Habit.create(user_id: u1.id, goal: "Drink 8 glasses of water", frequency_num: 8, frequency_denominator: "week", start_date: 02/20/2023, display_order: 1, category_id: c3.id)
h3 = Habit.create(user_id: u1.id, goal: "Yoga", frequency_num: 1, frequency_denominator: "week", start_date: 02/20/2023, display_order: 5, category_id: c2.id)
h4 = Habit.create(user_id: u1.id, goal: "Wake up at 7am", frequency_num: 1, frequency_denominator: "week", start_date: 02/20/2023, display_order: 0, category_id: c1.id)
h5 = Habit.create(user_id: u1.id, goal: "Go to bed at 11am", frequency_num: 1, frequency_denominator: "week", start_date: 02/20/2023, display_order: 10, category_id: c1.id)
h6 = Habit.create(user_id: u1.id, goal: "Brush your teeth", frequency_num: 1, frequency_denominator: "week", start_date: 02/20/2023, display_order: 9, category_id: c1.id)

puts "Seeding Habit Completion data..."

hc1 = HabitCompletion.create(habit_id: h1.id)

puts "Done seeding!"