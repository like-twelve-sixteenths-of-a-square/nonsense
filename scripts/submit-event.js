(function(){ 
  var form = document.getElementById('login');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.username.value;          // Select username entered
    var msg      = 'Yeah, you are not supposed to be here. Whatever, welcome, ' + username + '. Look around, but do NOT touch anything, the paint is still wet.';            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());