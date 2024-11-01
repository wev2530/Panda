const frenPg = document.querySelector(".frenEl");
const body = document.querySelector("body");
const firstFooter = document.querySelector(".footer0")
const boostBtn = document.querySelector(".boost")

frenPg.addEventListener("click", function(){
    body.classList.add("frenPg");
    console.log("ha ha fren was clicked");
    firstFooter.classList.add("none")
    boostBtn.classList.add("none")
})

