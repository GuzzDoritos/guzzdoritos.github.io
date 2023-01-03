// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

function newQuote() { 
  quotes = [
  "You fool! German science is the greatest in the world!",
  "Never tell me the odds!",
  "Wario time!",
  "wanna be the cookie",
  "The ability to speak does not make you intelligent.",
  "Sorry lady. I don’t understand frog.",
  "ゆっくりしていってね！！！"
];
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
} 

window.onload = function() {
  newQuote();
}
