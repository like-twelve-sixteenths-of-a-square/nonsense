//Let's try adding this to cover the bases
	var first = 'Get one now! We only have ';
	var remaining = Math.floor(Math.random()*(299-100)*100);
	var last =' left, and they are going fast fast fast!';
	
	var chatterMessage = first + remaining + last;
	
	var el = document.getElementById('countit');
	el.textContent = chatterMessage;