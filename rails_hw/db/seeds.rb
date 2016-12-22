# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

entry_list = [
  ["Trevoog", "Today Irwikiwaki touch bright hot energy.  Can not explain so we invent Thor.  Thor invent 'fire'."],
  [ "Irwikiwaki", "Today I observed it takes 4 rocks and 2 sticks to sink duck.  How do Irwikiwaki and Trevoog make large duck to ride?"],
  ["Trevoog", "9 ducks will not float 1 Trevoog.  On positive side, Trevoog invented towel that dry Trevoog nicely."],
  ["Irwikiwaki", "Today I chase ducks with Thor flame. Ducks hate Thor flame.  Slow ducks become fast ducks."],
  ["Irwikiwaki", "45-duck-boat carries 1 Irwikiwaki and a Trevoog.  0-60 in 4 hours!  Success."],
  ["Trevoog", "We chase 45-duck-boat with 3-log-Thor-flame.  Duck boat much fast now."],
  ["Trevoog", "Duck boat complete.  Next mission - invent purple."]
]

entry_list.each do |name, entry|
  Entry.create( name: name, entry: entry)
  puts "#{name} created."
end
