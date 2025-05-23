// Note that this example might not work locally in Chrome (it works on a web server).
// In other browsers, you may get a prompt that allows you to share location data.
// It may take the browser a while to determine your location (his demonstrates why you should not depend on this information before loading the entire page).

var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Yeah, none of our orbital cannons can trace your location, sorry.';    // No location msg

if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<h3>Hey, look at that! You are in orbital delivery drop range!</h3>' // Yap nonsense
  msg += '<h4>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</h4>';               // Add longitude
  msg += '<h4>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</h4>';                // Add latitude
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show error message
  console.log(msg.code);                                    // Log the error
}