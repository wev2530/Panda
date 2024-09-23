const leaderboard = document.getElementById("level");

const leaderboardLimit = document.getElementById("maxBalance");

const balance = document.getElementById("balance");

const energyBar = document.getElementById("energyBarMain");

const energy = document.getElementById("energyBar");

const tap = document.getElementById("mineBtn");

const stone = "stone";

const iron = "iron";

const bronze = "bronze";

const silver = "silver";

const gold = "gold";

const diamond = "diamond";

const platinum = "platinum";

const master = "master";

const grandMaster = "grand master";

const lord = "lord";

const creator = "creator";

let energyCount = 500;
let mainBalance = 20000000000;
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
  
  if (mainBalance === 100) {
    leaderboard.textContent = stone;
  }
  else if (mainBalance === 1000) {
    leaderboard.textContent = iron;
  }
  else if (mainBalance === 10000) {
    leaderboard.textContent = bronze;
  }
  else if (mainBalance === 100000) {
    leaderboard.textContent = silver;
  }
  else if (mainBalance === 1000000) {
    leaderboard.textContent = gold;
  }
  else if (mainBalance === 5000000) {
    leaderboard.textContent = diamond;
  }
  else if (mainBalance === 10000000) {
    leaderboard.textContent = platinum;
  }
  else if (mainBalance === 50000000) {
    leaderboard.textContent = master;
  }
  else if (mainBalance === 100000000) {
    leaderboard.textContent = grandMaster;
  }
  else if (mainBalance === 1000000000) {
    leaderboard.textContent = lord;
  }
  else if (mainBalance =>20000000000) {
    leaderboard.textContent = creator;
  }