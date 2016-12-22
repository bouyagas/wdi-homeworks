# Homework - JavaScript Challenge!

![Challenge Accepted](https://media.giphy.com/media/1zTqgW6bS2jWU/giphy.gif)

## Setup
Let's start by forking the homework (hw-w01-d04) to our own accounts and then
cloning the homework into ~/code/wdi/homeworks/. This should create an hw-w01-d04
folder. Inside, you will find a 'script.js' file. Please enter your answers into
this file.

## Part 1 - Objects
Given the following objects:
```javascript
var bobby = {
  name: "Bobby King",
  nickname: "The Boddy",
  age: 19,
  weight: 260,
  favoriteThings: {
    movie: "The Net",
    food: "Lasagna",
    website: "www.github.com",
    hat: "red hat"
  },
  hobbies: [
    "lacrosse",
    "coding",
    "whiteboarding"
  ]
}
```
1. `console.log` Bobby's nickname
> Hint: Use dot notation. Bobby's name is accessed with `bobby.name`

2. `console.log` Bobby's age

3. `console.log` Bobby's favorite movie

4. `console.log` Bobby's first hobby
> Hint: `hobbies` is an array. Elements in an array are accessed with bracket notation. `myArray[0]` gives the first element in the array.

5. Bobby has been eating a lot of Shake Shack recently and he's gained 5 lbs. Change Bobby's weight to reflect this and then `console.log` his new weight.

## Part 2 - Functions
Let's practice writing some functions.

1. Write a function called `multiply` that takes 2 numbers as parameters and returns the product of those 2 numbers.

2. Write a function called `maxOfThree` that takes 3 numbers as parameters and returns the largest number of the three.

3. Remember that Killer Caffeine problem from last night? Let's turn it into a function. Write a function called `howMuchCoffeeWillEndMe` that takes a single parameter, bodyweight, and returns how many cups of coffee will kill you.
4. Let's consider lexical scoping.
a) Given the following JavaScript snippet, what will output to the console and why? Write your answer as a comment.
```javascript
var x = 7;
function foo() {
  var x = 3;
}
foo();
console.log(x);
```
b)
What if we changed the snippet to this? What will output and why?
```javascript
var x = 7;
function foo() {
  x = 3;
}
foo();
console.log(x);
```
c) One last time, if we changed the snippet to this, what will output and why? Please write your answer as a JavaScript comment.
```javascript
var x = 7;
function foo(x) {
  x = 3;
}
foo(5);
console.log(x);
```
5. Given the following snippet

```javascript
function foo(a, b) {
  console.log(a + b);
}

function bar(a, b) {
  return a + b;
}

function baz(a, b) {
  var c = a + b;
  return;
}

var x = foo(10, 30);
var y = bar(7,10);
var z = baz(80,20);

console.log(x, y, z);
```
What is the output of this snippet?

## Part 3 - DOM
#### Time to play with the DOM!!
![DOM](http://i.giphy.com/uAo1LNpBnhhIc.gif)

#### DOM resources
- [DOM Reading](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [DOM Cheat Sheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)

Open the provided `index.html` in a browser. Get an idea of what it looks like. Let's see if we can manipulate the DOM with some JavaScript. Enter your answers in the same `script.js`.

1. Write a JavaScript statement that changes the background color to *blue*.

2. Dom decided he loves to 'Fix cars'. Write a statement that creates a new `<li>` with the text 'fix cars' and append it to Dom's Favorite Things.
>[appendChild()](http://www.w3schools.com/jsref/met_node_appendchild.asp)

3. Dom's had a change of heart about staring people down. Write a statement to remove the last `<li>` element from Dom's Favorite Things.
>[removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
> Hint: Query select the li element first and store it in a variable. Then query select the list and remove the previously selected `node`.

4. Some light reading!  Check out W3 Schools' excellent (and short) article on event listeners.  W3 Schools has their own native JS Fiddle-type emulator.  Open up interactive examples by clicking the bright green "Try it Yourself" button.  Once in that screen, run it by hitting the "Run" button in the upper left.  We won't be grading this part, but be sure to read the article.  It'll help you out for the work we're doing tomorrow and over the weekend.  Article here:  [Event Listener Reading](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

## Homework Submission
Please submit your assignment **tonight** by **11:59PM**

Follow the instructions in the homework submission how-to located [in our wiki](https://github.com/ga-students/wdi-nyc-purple-rain-students/wiki/Homework-Submission).
