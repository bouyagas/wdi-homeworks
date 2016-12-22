// Enter your solutions for hw-w01-d04 here!
// Make sure to reference the readme.md for detailed instructions

// Part 1 - Objects
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

// 1. console.log Bobby's nickname
console.log(bobby.nickname);

// 2. console.log Bobby's age
console.log(bobby.age);

// 3. console.log Bobby's favorite movie
console.log(bobby.favoriteThings.movie);

// 4. console.log Bobby's first hobby
console.log(bobby.hobbies[0]);


// Part 2 - Functions
// When you finish writing the functions, uncomment the function
// call to see the result

// 1.
function multiply(a, b) {
  return a * b
}
// multiply(3, 4);
console.log(multiply(3, 4));

// 2.
function maxOfThree(a, b, c) {
  if ((a > b) && (a > c)) {
    return a;
  } else if ((b > a) && (b > c)) {
    return b;
  } else {
  return c;
  };
};
console.log(maxOfThree(3, 4, 5));

// 3.
function howMuchCoffeeWillEndMe(weight) {
  var killerAmount = (weight/100)*6000;
  var numberCups = Math.ceil(killerAmount/95);
  return numberCups;
}
console.log(howMuchCoffeeWillEndMe(200));

// 4(a)
// 7
// The function foo creates a new variable x that is local to foo.
// When console.log calls 'x' it is calling the global x variable so 7 will print.


// 4(b)
// 3
// In this case, calling the function foo REASSIGNS x, rather than creating a
// local variable as it did in 4(a). Since foo is a function, it will be
// hoisted to the top and x will be reassigned before console.log(x) is called.


// 4(c)
// 7
// Since x is a parameter of foo, when x is being set equal to 3 within the function
// it does not need to look outside of the scope. The parameter 'x' is considered
// a local variable of the foo scope. The var x = 7 is in the global scopre and will
// therefore not be reassigned. When we call console.log(x) it will not be able to
// look inside of the foo scope and will instead used the global variable x.


// 5
// 40
// undefined 17 undefinted

// Function foo has a "side effect" and prints 40 (10 + 30), but has no return
// value so x will remain undefined.
// Function bar has a return value of 7 + 10 and returns 17 so y is assigned the
// valye of 17.
// Function baz returns nothing so z will also be undefinted.


// Part 3 - DOM

// 1. Change the background-color to blue
document.body.style.backgroundColor = "blue";

// 2. Append a new <li> with the text 'Fix cars' to Dom's Favorite Things
var li = document.createElement('li');
li.innerHTML = "Fix cars";
document.querySelector('ul').appendChild(li);

// 3. Remove the last <li> from Dom's Favorite Things
var staring = document.querySelector('ul li:nth-child(6)');
var list = document.querySelector('ul');
list.removeChild(staring);


