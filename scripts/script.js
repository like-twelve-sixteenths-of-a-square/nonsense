//Hello :3
var greeting = "Hello- ";
var name = "wait, who are you? You shouldn't be here, this is classified.";

var welcomeMessage = greeting + name;

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

//Hamburbur menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}