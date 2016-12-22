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

// An example of using query selector
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section');
  $section.setAttribute("id", "Middle-Earth");

  var $article = document.createElement('article');
  var $shire = document.querySelectorAll('article')[0];

  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0 ; i < lands.length ; i++) {
   var $article = document.createElement('article');
   // inside each article tag include an h1 with the name of the land
   var $h1 = document.createElement('h1');
   $h1.textContent = lands[i];
   var nameinArray = lands[i].toLowerCase().split(" ")
   var nameNoSpace = nameinArray.join("-")

   // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
   $article.setAttribute("class", nameNoSpace)
   $article.appendChild($h1);
   $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
};

makeMiddleEarth();


// Part 2
function makeHobbits() {
  var $theShire = document.querySelector('.the-shire');

  // create a new unordered list of hobbits in the shire.
  var $hobbitsInShire = document.createElement('ul');
  $hobbitsInShire.setAttribute('id', 'the-hobbits');
  $theShire.appendChild($hobbitsInShire);

  // make new list items with hobbit names and append them to the ul
  for (var i = 0; i < hobbits.length; i++) {
    var $hobbitOnList = document.createElement('li');
    $hobbitOnList.textContent = hobbits[i];

    //each list item should also have a class equal to hobbit
    $hobbitOnList.setAttribute('class', 'hobbit');
    $hobbitsInShire.appendChild($hobbitOnList);
  };
};

makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create new div and add id of 'the-ring' and class of 'magic-imbued-jewelry'
  var $ring = document.createElement('div');
  $ring.setAttribute('id', 'the-ring');
  $ring.setAttribute('class', 'magic-imbued-jewelry');

  //Find Frodo and append the ring as a child of Frodo
  var $frodo = document.querySelector('.hobbit');
  $frodo.appendChild($ring);
}

keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  var $asideTag = document.createElement('aside');

  //create and unordered list and append it to my aside tag
  var $listOfBuddies = document.createElement('ul');
  $listOfBuddies.setAttribute('id', 'bestbuds');
  $asideTag.appendChild($listOfBuddies);

  // attach an unordered list of each 'buddy' in the aside
  for (var i = 0; i < buddies.length; i++) {
    var $bud = document.createElement('li');
    $bud.textContent = buddies[i];
    $listOfBuddies.appendChild($bud);
  };
  // insert your aside as a child element of rivendell
  var $rivendell = document.querySelector('.rivendell');
  $rivendell.appendChild($asideTag);
};

makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var $strider = document.querySelector('#bestbuds > li:nth-child(4)');
  $strider.textContent = 'Aragorn';
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // how does appendChild work on an element that already exists on the page?
  var $hobbitsAssembled = document.querySelector('.the-shire > ul');
  var $rivendell = document.querySelector('.rivendell');
  $rivendell.appendChild($hobbitsAssembled);
};

leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  var $fellowship = document.createElement('div');
  $fellowship.setAttribute('id', 'the-fellowship');

  // add each hobbit and buddy one at a time to 'the-fellowship'
   // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.querySelector('#bestbuds > li');
    $fellowship.appendChild(buddy);
    alert(buddy.innerHTML + ' has joined your party!');
  };

  for (var i = 0; i < hobbits.length; i++) {
    var fellow = document.querySelector('#the-hobbits > li');
    $fellowship.appendChild(fellow);

    if (fellow.innerHTML === 'Frodo Baggins<div id="the-ring" class="magic-imbued-jewelry"></div>') {
      alert('Frodo Baggins has joined your party!');
    } else {
    alert(fellow.innerHTML + ' has joined your party!');
    };
  };

  // append the fellowship div to rivendell
  var $rivendell = document.querySelector('.rivendell');
  $rivendell.appendChild($fellowship);
};

forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.querySelector('#the-fellowship').firstChild;
  gandalf.innerHTML = 'Gandalf the White';

  // apply style to the element, he's alredy white so why not blue?
  gandalf.style.color = 'blue';
  // add a gray 3px border
  gandalf.style.border = '3px solid gray';
};

theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown!');

  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  var fellowship = document.querySelector('#the-fellowship');
  var boromir = document.querySelector('#the-fellowship > li:nth-child(5)');
  fellowship.removeChild(boromir);
};

hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.querySelector('#the-fellowship > li:nth-child(5');
  var sam = document.querySelector('#the-fellowship > li:nth-child(6)');
  var mordor = document.querySelector('.mordor');

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  // add a div with an id of 'mount-doom' to Mordor
  var doom = document.createElement('div');
  doom.setAttribute('id', 'mount-doom');
  mordor.appendChild(doom);
};

itsDangerousToGoAlone();


// Part 11
function weWantsIt() {

  var mordor = document.querySelector('.mordor');
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  var ring = document.querySelector('#the-ring');
  gollum.appendChild(ring);

  // Move Gollum into Mount Doom
  var doom = document.querySelector('#mount-doom');
  doom.appendChild(gollum);
};

weWantsIt();


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var doom = document.querySelector('#mount-doom');
  var gollum = document.querySelector('#gollum');
  doom.removeChild(gollum);

  // Move all the hobbits back to the shire
  // var shire = document.querySelector('.the-shire');
  // var hobbitBoys = document.querySelectorAll('.hobbits');

  // for (var i = 0; i < hobbitBoys.length; i++) {
  //   var boy = hobbitBoys[i];
  //   shire.appendChild(boy);
  // };

  //Move hobbits from Mordor back to the shire
  var shire = document.querySelector('.the-shire');

  for (var i = 0; i < 2; i++) {
    var mordorHobbit = document.querySelector('.mordor > li');
    shire.appendChild(mordorHobbit);
  };

  for (var i = 0; i < 2; i++) {
    var rivendellHobbit = document.querySelector('#the-fellowship > li:nth-child(5)');
    shire.appendChild(rivendellHobbit);
  };
};

thereAndBackAgain();
