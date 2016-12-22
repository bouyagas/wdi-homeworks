console.log('starter1.js linked');

// Store a reference to the divs
var div = document.querySelectorAll('.zone');


// Create a function to change the color to green
function green(e) {
  e.target.style.backgroundColor = 'green';
}

// Create a function to change the color to black
function black(e) {
  e.target.style.backgroundColor = 'black';
}

// Create a function to remove previous mouseover event listener when
// the box is clicked
function removeMouseFunctions(e) {
  e.target.removeEventListener('mouseout', black);
  e.target.removeEventListener('mouseover', green);
}


//Log an alert in the console when all statments are checked green
function checkGreen() {
  var count = 0;
  for (var i = 0; i < div.length; i++) {
    if (div[i].style.backgroundColor === 'green') {
      count++;
    }
    if (count === 4) {
      console.log('Congrats! You won part 1!');
    }
  }
}


// Create loop to set up an event handler to listen for mouseover and mouseout
// which will fire the green function when the mouseover event occurs
// set up an event handler to listen for a click
// which will fire the green function and remove previous event listeners
for (var i = 0; i < div.length; i++) {
  div[i].addEventListener('mouseover', green);
  div[i].addEventListener('mouseout', black);
  div[i].addEventListener('click', green);
  div[i].addEventListener('click', removeMouseFunctions);
  div[i].addEventListener('click', checkGreen);
}



