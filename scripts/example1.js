var operator = 'chatter'; // Type of calculation
var i = 1;                 // Set counter to 1
var txtRng = Math.floor(Math.random()*25) + 2;
var msg = '';              // Message

if (operator === 'chatter') {
  // Do addition
  while (i < txtRng) {
	var blabber = Math.floor(Math.random()*2)+1;
		if (blabber < 2) {
			msg += 'Creature ';
			i++;	
		} else {
			msg += 'Feature ';
			i++;
		}
  }
}

// Write the message into the page
var el = document.getElementById('blabber');
el.innerHTML = msg;