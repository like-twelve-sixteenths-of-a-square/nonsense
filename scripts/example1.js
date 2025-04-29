var operator = 'chatter'; // Obligatory operator thing
var i = 1;                // Set counter to 1
var txtRng = Math.floor(Math.random()*25) + 2; //Pick a random number from 2 to 24, I believe
var msg = '';              // Message

if (operator === 'chatter') {
  // Flip a virtual coin, if heads, say Creature, if tails, say Feature, repeat that a randomized number of times
  while (i < txtRng) {
	var blabber = Math.floor(Math.random()*2)+1; //Virtual coin flip, literally just pick a random number between 1 and 2.
		if (blabber < 2) {
			msg += 'Creature '; //If 1, say Creature
			i++;	
		} else {
			msg += 'Feature '; //If not 1, say Feature
			i++;
		}
  }
}

// Spit out the randomized string of glorious nonsense
var el = document.getElementById('blabber');
el.innerHTML = msg;