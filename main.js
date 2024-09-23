const leaderboard = document.getElementById("level");

const leaderboardLimit = document.getElementById("maxBalance");

const balance = document.getElementById("balance");

const energyBar = document.getElementById("energyBarMain");

const energy = document.getElementById("energyBar");

const tap = document.getElementById("mineBtn");

const stone = "stone";

const iron = "iron"

const bronze = "bronze"

const silver = "silver"

const gold = "gold"

const diamond = "diamond"

const w1 = 

let energyCount = 500;
let mainBalance = 100;
balance.textContent = mainBalance;

energy.textContent = energyCount;

tap.addEventListener("click", function () {
  energyCount -=1;
  mainBalance +=1;
  balance.textContent = mainBalance;
  energy.textContent = energyCount;
  console.log(energyCount)
  })
  
  console.log(energyCount -5)
  
  if (balance => 100) {
    leaderboard.textContent = stone;
  }