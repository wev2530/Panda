const frenEl = document.querySelector(".fren");

const friendsPage = document.getElementById("friendsPage")

const mainPage = document.getElementById("mainPage")

frenEl.addEventListener('click', function() {

  var stylesheet = document.getElementById('stylesheet');

  // Change the href attribute to point to a different CSS file
  stylesheet.href = "/friends.css";
  friendsPage.classList.remove("hidden")
  mainPage.classList.add("hidden")
})
;

mineEl.addEventListener('click', function() {



  var stylesheet = document.getElementById('stylesheet');

  // Change the href attribute to point to a different CSS file
  stylesheet.href = "/index.css";
  friendsPage.classList.add("hidden")
  mainPage.classList.remove("hidden")
})
;
const mineEl = document.querySelectorAll(".mineEl");
const taskEl = document.querySelectorAll(".taskEl");
const aDrop = document.querySelectorAll(".aDrop");

// JavaScript to handle click event and change the CSS file