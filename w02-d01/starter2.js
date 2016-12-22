console.log('starter2.js linked');

// Create randomized array
var arrayOfZones = ['zone-2', 'zone-4', 'zone-1', 'zone-3']

// Store a reference to the div nodelist
var div = document.querySelectorAll('.zone');

// Set initial condition of counter
var count = 0;

// Create function to check if div matches target div
// If id of div matches item in random array, set background color to green
// If div does not match, set background color to red
function checkZones(e) {
  if (e.target.id === arrayOfZones[count]) {
    e.target.style.backgroundColor = 'green';
  } else {
    e.target.style.backgroundColor = 'red';
  }
}

// Create function to clear out div background color
function clearZone(e) {
  e.target.style.backgroundColor = 'white';
}

// Create function to save the div once you find the right one
// Increase counter by one so you can move on to next item in array
function saveZones(e) {
  if (e.target.id === arrayOfZones[count]) {
    e.target.removeEventListener('mouseover', checkZones);
    e.target.removeEventListener('mouseout', clearZone);
    count++;
  }
  if (count === 4) {
    console.log('Congrats! You won part 2!');
  }
}

for (var i = 0; i < div.length; i++) {
  div[i].addEventListener('mouseover', checkZones);
  div[i].addEventListener('mouseout', clearZone);
  div[i].addEventListener('click', saveZones);
}


