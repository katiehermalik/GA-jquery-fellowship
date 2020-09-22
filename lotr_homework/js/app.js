console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============

const makeMiddleEarth = () => {
  const $middleEarth = $('<section id="middle-earth" />');
  $('body').append($middleEarth);
  for (let i = 0; i < lands.length; i++) {
    $('#middle-earth').append(`<article id="${lands[i]}"><h1>${lands[i]}</h1></article>`);
  }
};

// ============
// Chapter 2
// ============

const makeHobbits = () => {
  const $hobbitsList = $('<ul />');
  $('#The-Shire').append($hobbitsList);
  for (let i = 0; i < hobbits.length; i++) {
    $hobbitsList.append(`<li class="hobbit">${hobbits[i]}</li>`); 
  }
};

// ============
// Chapter 3
// ============

const keepItSecretKeepItSafe = () => {
  const $theRing = $('<div id="the-ring" />');
  console.log($theRing);
  ($('.hobbit').eq(0)).append($theRing);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

const makeBaddies = () => {
  const $baddiesList = $('<ul />');
  $('#Mordor').append($baddiesList);
  for (let i = 0; i < baddies.length; i++) {
    $baddiesList.append(`<li class="baddy">${baddies[i]}</li>`); 
  }
};

// ============
// Chapter 5
// ============

const makeBuddies = () => {
  const $buddiesAside = $('<aside />');
  $('#middle-earth').append($buddiesAside);
  const $buddiesList = $('<ul />');
  $buddiesAside.append($buddiesList);
  for (let i = 0; i < buddies.length; i++) {
    $buddiesList.append(`<li class="buddy">${buddies[i]}</li>`); 
  }
};

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  $('#Rivendell').append($('#The-Shire').children().eq(1));
};

// ============
// Chapter 7
// ============

const beautifulStranger = () => {
  $('aside').find('li').eq(3).text("Aragorn");
};

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const $theFellowship = $('<div id="the-fellowship"><h1>"The Fellowship"</h1></div>');
  $('#middle-earth').append($theFellowship);
  $('#the-fellowship').append($('#Rivendell').children().eq(1));
  $('#the-fellowship').append($('aside').children());
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  console.log('The Balrog');
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  console.log('Horn of Gordon');

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  console.log('Dangerous');
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  console.log('we wants it');
  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  console.log('there and back again');
  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
