# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

prizes = []
# bin/rails c    OR   rake db:reset AND bin/rails db:seed
# rake db:drop db:create db:migrate
10.times do |prize|
    prizes[prize] = Prize.create(name: "Prize #{prize+1}", percentage: 10, image: "Logo  #{prize+1}")  
end

Wheel.create( name: "Subvisual", logo: "Logo", prizes: prizes, wheelConfiguration: WheelConfiguration.create(color_1: "#0000FF", color_2: "#FFFFFF"))
