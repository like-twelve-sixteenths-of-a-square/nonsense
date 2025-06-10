(function(){ 
  var form = document.getElementById('login');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.username.value;          // Select username entered
    var msg      = 'Alright, alright, you are not on our records but we are gonna let this slide, not like you can try anything anyway. Welcome, ' + username + '. Look around, but do NOT touch anything, the paint is still wet.';            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());