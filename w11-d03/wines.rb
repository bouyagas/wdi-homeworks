wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

# 1. Create a variable called saved_for_special_occasion. Assign it the third hash from the wine_cellar array (a Sauvignon Blanc from Wairau River).
saved_for_special_occasion = wine_cellar[2]

# 2. Create a variable called swill. Assign it the fourth hash from the wine_cellar array (a Merlot from Tangley Oaks).
swill = wine_cellar[3]

# 3. Your client misentered his data! Change the color of the Rutherford Hill Chardonney from "red" to "white".
wine_cellar[0][:color] = "white"

# 4. Add a wine of your choice to the back of the cellar. Structure this wine as a hash, with key-value pairs for :color, :type, and :label.
wine_cellar.push({:label => "Titus Andromedon", :type => "Pinot Noir", :color => "red"})

# 5. Write a method, retrieves_random_wine_for_party which removes a random wine from the cellar. Then use it several times, until you feel that the people upstairs are having a good time.
wine_cellar.delete_at(rand(wine_cellar.length))

