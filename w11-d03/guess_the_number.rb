SECRET_NUMBER = 7
# creates a new constant variable "SECRET_NUMBER" equal to 7
guessed = false
# creates a new variable "guessed" and sets it equal to false

puts('I\'m thinking of a number between 1 and 10. Can you guess it?')
# prints to the console "I'm thinking of a number between 1 and 10. Can you guess it?" with a new line at the end

while !guessed
  # while guessed is false
  guess = gets.chomp.to_i
  # get the user input, remove any trailing blank spaces/newlines at the end and convert the string into an integer
  if SECRET_NUMBER == guess
    # check to see if the new variable guess is equal to the SECRET_NUMBER defined above
    guessed = true
    # if the two are equal, assigned guessed a value of true
    # since guessed is no longer false, you will exit the loop
  else
    puts("#{guess}? Try again!")
    # if the new variable guess i not equal to SECRET_NUMBER, print to the console the guess that the user input along with try again!
  end
end

$stdout.puts('Great job!')
# print great job once the user has guessed the SECRET_NUMBER and exited the loop
