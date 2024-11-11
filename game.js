//alert("This game is still under construction press OK to enter")

const frenPg = document.querySelector(".frenEl");
const taskpg = document.querySelector(".taskEl");
const adropg = document.querySelector(".adropEl");
const imgpg = document.querySelector(".levelUpImg");
const body = document.querySelector("body");
const firstFooter = document.querySelector(".footer0")
const boostBtn = document.querySelector(".boost")

taskpg.addEventListener("click", function(){
    body.classList.add("frenPg");
    console.log("ha ha fren was clicked");
    firstFooter.classList.add("none")
    boostBtn.classList.add("none")
})



frenPg.addEventListener("click", function(){
    body.classList.add("frenPg");
    console.log("ha ha fren was clicked");
    firstFooter.classList.add("none")
    boostBtn.classList.add("none")
})



adropg.addEventListener("click", function(){
    body.classList.add("frenPg");
    console.log("ha ha fren was clicked");
    firstFooter.classList.add("none")
    boostBtn.classList.add("none")
})



imgpg.addEventListener("click", function(){
    body.classList.add("levelPg");
    console.log("ha ha fren was clicked");
    firstFooter.classList.add("none")
    boostBtn.classList.add("none")
})

