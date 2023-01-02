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

const generateQuote = function () {
  const quotes = [
    {
      quote: "You fool! German science is the greatest in the world!"
    },
    {
      quote: "Never tell me the odds!"
    },
    {
      quote: "Wario time!"
    },
    {
      quote: "wanna be the cookie"
    },
    {
      quote: "The ability to speak does not make you intelligent."
    },
    {
      quote: "Sorry lady. I don’t understand frog."
    }
  ]; 
  
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
}

window.onload = function () {
  generateQuote();
  document.getElementById("generate").addEventListener('click', generateQuote);
}
