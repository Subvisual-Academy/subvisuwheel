# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# bin/rails c    OR   rake db:reset AND bin/rails db:seed
# rake db:drop db:create db:migrate db:seed

prizesList = [
  {name: "T-shirt", percentage: 15, image: "assets/svgs/prizes/t-shirt.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "Pen", percentage: 15, image: "assets/svgs/prizes/pen.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "Hoodie", percentage: 15, image: "assets/svgs/prizes/hoodie.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "Keychain", percentage: 15, image: "assets/svgs/prizes/keychain.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "Tote Bag", percentage: 15, image: "assets/svgs/prizes/tote-bag.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "Hat", percentage: 15, image: "assets/svgs/prizes/hat.svg", prize_type: 'Merch', description: 'This is a Merch item', identifier: 'merch'},
  {name: "CryptoPunks NFT", percentage: 2, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'},
  {name: "Moonbirds NFT", percentage: 2, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'},
  {name: "Pudgy Penguins NFT", percentage: 2, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'},
  {name: "Cool Cat NFT", percentage: 2, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'},
  {name: "Mutant Ape NFT", percentage: 1, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'},
  {name: "Bored Ape NFT", percentage: 1, image: "assets/svgs/prizes/nft.svg", prize_type: 'NFT', description: 'This is a NFT item', identifier: 'NFT'}
]

prizesList.map { |prize| Prize.create!(prize) }

Lead.create(name: "test", email: "geral.subvisual@gmail.com", interests: "Development", job_consent: true)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

Company.create(name: "Subvisual", website: "https://subvisual.com", selected: true)

Social.create(name: "Twitter", url: "https://twitter.com/subvisual", company_id: 1)
Social.create(name: "Instagram", url: "https://instagram.com/wearesubvisual", company_id: 1)
Social.create(name: "LinkedIn", url: "https://linkedin.com/subvisual", company_id: 1)
Social.create(name: "Facebook", url: "https://facebook.com/subvisual.co", company_id: 1)

Email.create(email_type: 'Merch', subject: '🏆 You won a prize!', 
  body: '<img src="<%= @server_url %>logo-wheel.png" alt="Logo Wheel">

  <p>Hi <%= @lead_name %>,</p>

  <p>Congratulations on winning a <%= @prize_name %>!</p>

  <br />

  <p>
    Ready to claim it? 🚀 <br />
    show the subvisual staff this email and collect your prize right away.
  </p>

  <br />

  <p>
    Can\'t do it now? 🤔 <br />
    That\'s a bummer, but you can still get your prize. <br />
    Simply reply to this email with your <b>name</b> and <b>phone number</b> - and we will get back to you as soon as we can!
  </p>

  <br />

  <p>
    Thank you for playing with Subvisual - the place where digital products and ventures go further.
  </p>
    
  <br />
    
  <p>
    Would you like to get to know us better? <br />

    Let\'s talk now: <br />

    <b>
      <a href="<%= @blog %>" target="_blank">Blog</a> |
      <a href="<%= @contact %>" target="_blank" style="text-decoration: none;">contact@subvisual.com</a>
    </b>
  </p>')

Email.create(email_type: 'NFT', subject: '🏆 You won a prize!',
  body: '<img src="<%= @server_url %>logo-wheel.png" alt="Logo Wheel">

  <p>Hi <%= @lead_name %>,</p>

  <p>Congratulations on winning an <%= @prize_name %>!</p>

  <br />

  <p>
    Ready to claim it? 🚀 <br />
    <b>
      Insert your digital wallet address in this 
      <a href="<%= @form_link %>" target="_blank">form</a>
      to collect your prize.
    </b>
  </p>

  <br />

  <p>
    Thank you for playing with Subvisual - the place where digital products and ventures go further.
  </p>
    
  <br />
    
  <p>
    Would you like to get to know us better? <br />

    Let\'s talk now: <br />

    <b>
      <a href="<%= @blog %>" target="_blank">Blog</a> |
      <a href="<%= @contact %>" target="_blank" style="text-decoration: none;">contact@subvisual.com</a>
    </b>
  </p>')
