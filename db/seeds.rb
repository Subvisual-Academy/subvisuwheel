# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# bin/rails c    OR   rake db:reset AND bin/rails db:seed
# rake db:drop db:create db:migrate db:seed

Prize.create(name: "T-shirt", percentage: 15, image: "assets/prizes/t-shirt.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "Mug", percentage: 15, image: "assets/prizes/mug.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "Pen", percentage: 15, image: "assets/prizes/pen.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "Hoodie", percentage: 15, image: "assets/prizes/hoodie.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "Keychain", percentage: 15, image: "assets/prizes/keychain.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "Tote Bag", percentage: 15, image: "assets/prizes/tote-bag.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch')
Prize.create(name: "CryptoPunks NFT", percentage: 2, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
Prize.create(name: "Moonbirds NFT", percentage: 2, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
Prize.create(name: "Pudgy Penguins NFT", percentage: 2, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
Prize.create(name: "Cool Cat NFT", percentage: 2, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
Prize.create(name: "Mutant Ape NFT", percentage: 1, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')
Prize.create(name: "Bored Ape NFT", percentage: 1, image: "assets/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT')

Lead.create(name: "test", email: "geral.subvisual@gmail.com", interests: "Development", data_proc_consent: true)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
