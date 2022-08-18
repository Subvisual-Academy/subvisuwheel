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

Lead.create(name: "test", email: "geral.subvisual@gmail.com", interests: "Development", job_consent: true)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

Company.create(name: "Subvisual", website: "https://subvisual.com", selected: true)

Social.create(name: "Twitter", url: "https://twitter.com/subvisual", company_id: 1)
Social.create(name: "Instagram", url: "https://instagram.com/wearesubvisual", company_id: 1)
Social.create(name: "LinkedIn", url: "https://linkedin.com/subvisual", company_id: 1)
Social.create(name: "Facebook", url: "https://facebook.com/subvisual.co", company_id: 1)

Email.create(email_type: 'Merch', subject: '🤑 You won a Merch Prize at Subvisual\'s wheel of fortune!', 
  body: '<img src="<%= @server_url %>logo-wheel.png" alt="Logo Wheel">

  <p>Hi <%= @lead_name %>,</p>

  <p>Congratulations for winning <%= @prize_name %>!</p>

  <p>
    Ready to claim it? 🚀 <br />
    show the subvisual staff this code: <%= @code_to_claim %> and receive your prize right away.
  </p>

  <p>
    Can\'t do it now? 🤔 <br />
    That\'s a bummer, but you can still get your prize. <br />
    All you need to do is answer this email and we will get back to you as soon as we can! (name, address, phone number)
  </p>

  <br />

  <p>
    Thank you for playing with Subvisual - the place where digital products and ventures go further. <br />
    Would you like to get to know us better? <br />
    <a href="<%= @url %>" target="_blank">Let\'s talk now.</a>
  </p>')

Email.create(email_type: 'NFT', subject: '🤑 You won an NFT Prize at Subvisual\'s wheel of fortune!',
  body: '<img src="<%= @server_url %>logo-wheel.png" alt="Logo Wheel">

  <p>Hi <%= @lead_name %>,</p>

  <p>Congratulations for winning <%= @prize_name %>!</p>

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
    Thank you for playing with Subvisual - the place where digital products and ventures go further. <br />
    Would you like to get to know us better? <br />
    <a href="<%= @url %>" target="_blank">Let\'s talk now.</a>
  </p>')
