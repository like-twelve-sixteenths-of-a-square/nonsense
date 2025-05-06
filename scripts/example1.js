var noteInput, noteName, textEntered, target;    // Declare variables

noteName = document.getElementById('noteName');  // Element that holds note
noteInput = document.getElementById('noteInput');// Input for writing the note

function writeLabel(e) {                         // Declare function
  if (!e) {                                      // If event object not present
    e = window.event;                            // Use IE5-8 fallback
  }
  target = e.target || e.srcElement;             // Get target of event
  textEntered = target.value;                    // Value of that element
  noteName.textContent = textEntered;            // Update note text
}

if (document.addEventListener) {                 // If event listener supported
  document.addEventListener('click', function(e) {// For any click document
    recorderControls(e);                         // Call recorderControls()
  }, false);                                     // Capture during bubble phase
  // If input event fires on noteInput input call writeLabel()
  noteInput.addEventListener('input', writeLabel, false); 
} else {                                         // Otherwise
  document.attachEvent('onclick', function(e) {  // IE fallback: any click
    recorderControls(e);                         // Calls recorderControls() 
  });
 // If keyup event fires on noteInput call writeLabel()
  noteInput.attachEvent('onkeyup', writeLabel);
}