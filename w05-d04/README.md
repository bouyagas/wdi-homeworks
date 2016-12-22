# Homework - Vampires!

![Interview with the Vampire](https://mischiefmanagedsite.files.wordpress.com/2014/05/3.gif)

### Setup

1. Create a `monsters` mongo database.
2. Create your `vampires` collection
3. Create a markdown file called `selectVampires.md` to record all of your answers.

### Completion
Do through the end of part 6. Remember, more is better, healthy living is best.


### Part 0
#### Solve Jason's Special Deluxe Problems
##### I believe in you

Create a separate JS file for this problem.  In that file, copy-paste this array and solve the following problems:

```
let burrito = [23, 18, 9, 3, 87, 12, 5, 22, 14]
```


* Use high level functions (i.e. map, reduce, filter) to return an __array__ of only the even numbers from the original array.
* Again, using high level functions, output the sum of the even numbers array.


### Part 1
#### Seeding your database

In your terminal:
- Access the mongo REPL using the `mongo` command
- Create a monsters database the `use monsters` command 
- Create a `vampires` collection by using the `db.createCollection("vampires")`
- Exit the mongo REPL with control + c
- Import the json to this collection using the commands `mongoimport --db monsters --collection vampires --drop --file populateVampires.json --jsonArray`   (what are these chained commands?  what are they doing?)



***For the following parts, write mongo queries in your CLI, and when you figure out the right answer, copy the correct mongo queries into a `selectVampires.md` file that you should make in today's `homework` directory.***

### Part 2
#### Select by comparison

Select all the vampires that:
- have greater than 500 victims
- have fewer than or equal to 150 victims
- have a victim count is not equal to 210234
- have greater than 150 AND fewer than 500 victims

### Part 3
#### Select by exists or does not exist
Select all the vampires that:
- have a title property
- do not have a victims property
- have a title AND no victims
- have victims AND the victims they have are greater than 1000

### Part 4
#### Select objects that match one of several values
Select all the vampires that:
- love either `frilly shirtsleeves` or `frilly collars`
- love `brooding`
- love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
- love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
\* *Hint-You will also have to use $nin* \*

### Part 5
#### Select with OR
Select all the vampires that:
- are from `New York, New York, US` or `New Orleans, Louisiana, US`
- love `brooding` or `being tragic`
- have more than 1000 victims or love `marshmallows`
- have red hair or green eyes

### Part 6
#### Negative Selection
Select all vampires that:
- love `ribbons` but do not have blonde hair
- are not from Rome
- do not love any of the following:
[`fancy cloaks`, `frilly shirtsleeves`, `appearing innocent`, `being tragic`, `brooding`]
- have not killed more than 200 people

### Bonus
#### For you crazy people that want to integrate DB's into your express apps.  Be warned, this is entirely new content, and we will be covering this in class tomorrow.  However, some of you are insane and might be inclined to get ahead.  This is for you:

### Part 7
#### Accessing the database through a node/express app
Using what you learned today:
- initalize a node app
- require `express`
- require `mongodb`
- establish a `MongoClient` connection with your `monsters` database and `vampires` collection
- render the list of vampires with their name, hair_color, eye_color, dob, loves, location, and gender to the DOM using `ejs` when the user goes to `'/'`

### Part 8
Modify `'/'` to only show a list of the vampires' names, each of which is a link that goes to a page that shows that vampire's name, plus their name, hair_color, eye_color, dob, loves, location, and gender.

- Prompt the user to enter in the following vampire information:
- Name
- DOB
- Hair Color
- Eye Color
- Loves (this can be a single value for this for this case).
- Location
- Gender
- Victims
- Title
- If you can't think of good names you can try this website to - generate them: [vampire generate](http://vampire.namegeneratorfun.com/)
- Enter your new vampires into your `vampire` collection
- BONUS BONUS: At the end of the prompt, ask if the user wants to enter in another vampire and if yes, repeat the prompt.
