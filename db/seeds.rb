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
h2 = Habit.create(user_id: u1.id, goal: "Drink 8 glasses of water", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 1, category_id: c3.id)
h3 = Habit.create(user_id: u1.id, goal: "Yoga", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 5, category_id: c2.id)
h4 = Habit.create(user_id: u1.id, goal: "Wake up at 7am", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 0, category_id: c1.id)
h5 = Habit.create(user_id: u1.id, goal: "Go to bed at 11am", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 10, category_id: c1.id)
h6 = Habit.create(user_id: u1.id, goal: "Brush your teeth", frequency_num: 7, frequency_denominator: "week", start_date: 02/20/2023, display_order: 9, category_id: c1.id)

puts "Seeding Habit Completion data..."

hc1a = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-19')
hc1b = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-20')
hc1c = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-22')
hc1d = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-23')
hc1e = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-24')
hc1f = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-25')
hc1g = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-26')
hc1h = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-27')
hc1i = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-02-28')
hc1j = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-01')
hc1k = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-02')
hc1l = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-03')
hc1m = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-04')
hc1n = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-05')
hc1o = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-06')
hc1p = HabitCompletion.create!(habit_id: h1.id, created_at: '2023-03-07')


hc2a = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-19')
hc2b = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-20')
hc2c = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-21')
hc2d = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-22')
hc2e = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-23')
hc2f = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-24')
hc2g = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-25')
hc2h = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-26')
hc2i = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-27')
hc2j = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-02-28')
hc2k = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-01')
hc2l = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-02')
hc2m = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-03')
hc2n = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-04')
hc2o = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-05')
# hc2p = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-06')
# hc2q = HabitCompletion.create!(habit_id: h2.id, created_at: '2023-03-07')


hc3a = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-19')
hc3b = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-20')
hc3c = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-21')
hc3d = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-22')
hc3e = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-23')
hc3f = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-24')
hc3g = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-25')
hc3h = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-02-27')
hc3i = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-01')
hc3j = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-02')
hc3k = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-03')
hc3l = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-04')
hc3m = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-05')
# hc3n = HabitCompletion.create!(habit_id: h3.id, created_at: '2023-03-07')


hc4a = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-19')
hc4b = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-22')
hc4c = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-23')
hc4d = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-24')
hc4e = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-26')
hc4f = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-02-28')
hc4g = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-03-01')
hc4h = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-03-02')
hc4i = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-03-04')
hc4j = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-03-05')
hc4k = HabitCompletion.create!(habit_id: h4.id, created_at: '2023-03-07')


hc5a = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-19')
hc5b = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-20')
hc5c = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-21')
hc5d = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-24')
hc5e = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-26')
hc5f = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-02-28')
hc5g = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-01')
hc5h = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-02')
hc5i = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-03')
hc5j = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-04')
hc5k = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-05')
# hc5l = HabitCompletion.create!(habit_id: h5.id, created_at: '2023-03-06')


hc6a = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-19')
hc6b = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-20')
hc6c = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-21')
hc6d = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-22')
hc6e = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-23')
hc6f = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-24')
hc6g = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-25')
hc6h = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-26')
hc6i = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-27')
hc6j = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-02-28')
hc6k = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-01')
hc6l = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-02')
hc6m = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-03')
hc6n = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-04')
hc6o = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-05')
# hc6p = HabitCompletion.create!(habit_id: h6.id, created_at: '2023-03-06')




puts "Done seeding!"