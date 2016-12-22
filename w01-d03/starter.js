/********************************
*
* DO YOUR ASSIGNMENT IN THIS FILE
*
*********************************/

// TEST EARLY AND OFTEN - node starter.js in the terminal
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all four steps specified below - each step needs a console.log statement - and follow the homework submission process (check the wiki!).

// EXAMPLE - Try running node starter.js before working on any of the parts and see what happens in the terminal.
var givenVariable = 20;
var doubledVariable = givenVariable * 2;
var tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log("EXAMPLE","tripledVariable",tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )



// STEP A: Pythagorean Theorem

var a = 1;
var b = 2;

var c = Math.sqrt((a*a) + (b*b));
console.log("Part A Answer: " + c);


// STEP B: Basic Conversion

var pounds = 155;

var kilograms = pounds/2.21;
console.log("Part B Answer: " + kilograms);


// STEP C: Old Modems

var sizeInGB = 25;
var secToDownload = (sizeInGB*8000000)/56;
var hours = Math.floor(secToDownload/3600);
var mins = Math.floor((secToDownload%3600)/60);
var secs = Math.floor(secToDownload - ((hours*3600)+(mins*60)));

var timeToDownload = hours + ":" + mins + ":" + secs
console.log("Part C Answer: " + timeToDownload);



// STEP D: Killer Caffeine

var weightInPounds = 135;
var killerAmount = (weightInPounds/100)*6000;
var numberCups = Math.ceil(killerAmount/95);

console.log("Part D Answer: " + numberCups);


