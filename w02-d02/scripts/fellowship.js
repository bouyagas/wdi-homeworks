console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using jQuery selector for <body>
var $body = $('body');


// Part 1
function makeMiddleEarth() {

  // Create a <section> tag with id of 'middle-earth'
  var $middleEarthSection = $("<section id='middle-earth'></section>");

  // Loop through lands array, for each land create a new <article> tag
  // and append an <h1> tag with text set to the land name
  for (var i = 0; i < lands.length; i++) {
    $middleEarthSection.append($('<article></article>').append($('<h1></h1>').text(lands[i])));
  }

  // Append Middle-Earth to your document body
  $body.append($middleEarthSection);
}
makeMiddleEarth();


// Part 2
function makeHobbits() {
  // create a new unordered list of hobbits in the shire.
  var $hobbitsInShire = $("<ul id='the-hobbits'></ul>");
  $('article').eq(0).append($hobbitsInShire);

//   // make new list items with hobbit names and append them to the ul
  for (var i = 0; i < hobbits.length; i++) {
    var $hobbitOnList = $("<li class='hobbit'></li>").html(hobbits[i]);

    //each list item should also have a class equal to hobbit
    $hobbitsInShire.append($hobbitOnList);
  };
}

makeHobbits();



// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  var $ring = $("<div id='the-ring' class='magic-imbued-jewelry'></div>");

  // add the ring as a child of Frodo
  $('.hobbit').eq(0).append($ring);
}

keepItSecretKeepItSafe();


// // Part 4
function makeBuddies() {
  // create an aside tag
  var $asideTag = $('<aside>');

  // attach an unordered list of each 'buddy' in the aside
  var $listOfBuddies = $('<ul>');
  $asideTag.append($listOfBuddies);

  for (var i = 0; i < buddies.length; i++) {
    var $bud = $('<li>').html(buddies[i]);
    $listOfBuddies.append($bud);
  }

// insert your aside as a child element of rivendell
  $('article').eq(1).append($asideTag);
}

makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('li').eq(7).html('Aragorn');
}

beautifulStranger();



// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // how does appendChild work on an element that already exists on the page?
  $('article').eq(1).append($('#the-hobbits'));
}

leaveTheShire();



// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  var $fellowship = $("<div id='the-fellowship'></div>");

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  for (var i = 0; i < (buddies.length + hobbits.length); i++) {
    var $fellow = $('li').eq(0);
    $fellowship.append($fellow);

    if ($fellow.html() === 'Frodo Baggins<div id="the-ring" class="magic-imbued-jewelry"></div>') {
      alert('Frodo Baggins has joined your party!');
    } else {
      alert($fellow.html() + ' has joined your party!');
    }
  }

  // append the fellowship div to rivendell
  $('article').eq(1).append($fellowship);
}

forgeTheFellowShip();



// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // add a gray 3px border
  // use documentation if you're unsure how to add style with javascript!
  $('li').eq(0).html('Gandolf the White').css('border', '3px solid gray');
}

theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown!');

  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  $('li').eq(4).remove();
}

hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var $frodo = $('li').eq(4);
  var $sam = $('li').eq(5);

  $('article').eq(2).append($frodo);
  $('article').eq(2).append($sam);

  // add a div with an id of 'mount-doom' to Mordor
  var $mountDoom = $("<div id='mount-doom'></div>");
  $('article').eq(2).append($mountDoom);
}

itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var $gollum = $("<div id='gollum'></div>");
  $('article').eq(2).append($gollum);

  // Remove the ring from Frodo and give it to Gollum
  $gollum.append($('#the-ring'));

  // Move Gollum into Mount Doom
  $('#mount-doom').append($gollum);
}

weWantsIt();



// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $('#gollum').remove();

  // Move all the hobbits back to the shire
  for (var i = 0; i < hobbits.length; i++) {
    $('article').eq(0).append($('li').eq(4));
  }

}

thereAndBackAgain();



