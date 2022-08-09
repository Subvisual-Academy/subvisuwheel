# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# bin/rails c    OR   rake db:reset AND bin/rails db:seed
# rake db:drop db:create db:migrate db:seed

6.times do |prize|
  Prize.create(name: "Tshirt #{prize + 1}", percentage: 10, image: "assets/svgs/prizes/t-shirt.svg", prize_type: 'Merch', description: 'This is a merch item', identifier: 'merch')
  Prize.create!(name: "NFT #{prize + 1}", percentage: 10, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
end

Lead.create(name: "test", email: "test@subvisual.com", interests: "Development", data_proc_consent: true)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?