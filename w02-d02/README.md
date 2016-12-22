![](https://i.imgflip.com/1bdbpk.jpg)

# Return of the Fellowship: jQuery Style!
Now that you guys know jQuery, we're going to revisit our favorite homework assignment. This time around we're going to refactor your functions with jQuery!

- You will need to use loops in your functions to do things like dynamically adding or removing list items from an unordered list.  
- Always keep in mind the parent/child node relationship on the DOM. This is key for understanding and manipulating objects on the DOM.

## Setup
- Do not overwrite your previous LOTR homework with jQuery solutions. Make sure you're working in the hw-w02-d02 repository!
- Everything within this directory should be linked properly. jQuery has already been included in index.html via the Google CDN. Simply open index.html in Chrome and access the developer console to begin work.
- You should see the word "fellowship.js" at the top of the console.
- Do all of your work in the included `fellowship.js` file in the scripts folder. No need to touch `index` or `css`.
- Test early and often! Be sure to INVOKE your function.
- You'll notice the solution to Part 1 is provided with helpful comments. Study this solution and use it as a reference as you work on the other parts.

## Completion
There are 12 steps to the homework. A complete homework requires Parts 1 through 9. If you finish Part 9 early, shoot for all 12! The extra reps and practice are only going to help you improve.

After each step is completed, remember to `git add .` and to `git commit -m "meaningful commit"`!

The assignment is due tonight at **11:59PM**. When you're finished, make sure you `git push origin master` to your repo and submit your assignment on Schoology with a link to your repo.

## Resources
- [About jQuery](https://learn.jquery.com/about-jquery/)
- [Using jQuery](https://learn.jquery.com/using-jquery-core/)

## Assignment

#### 1

```javascript
function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    // add each land as an article tag (add them one by one in a loop)
    // inside each article tag include an h1 with the name of the land
    // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
    // append middle-earth to your document body
}
```

#### 2

```javascript
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // each hobbit should be a list item, with text showing their name
  // give each hobbit a class of hobbit
}
```

#### 3

```javascript
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
}
```

#### 4

```javascript
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of each 'buddy' in the aside
  // insert your aside as a child element of rivendell
}
```

#### 5

```javascript
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}
```

#### 6

```javascript
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // how does appendChild work on an element that already exists on the page?
}
```

#### 7

```javascript
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
}
```

#### 8

```javascript
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // add a gray 3px border
  // use documentation if you're unsure how to add style with javascript!
}
```

#### 9

```javascript
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
}
```

#### 10

```javascript
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
```

#### 11

```javascript
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
```

#### 12

```javascript
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
```
