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

let req = 100;
let energyCount = 500;

balance.textContent = 0; // Initialize balance
energy.textContent = energyCount;

tap.addEventListener("click", function () {
  energyCount -= 1;
  balance.textContent = parseInt(balance.textContent) + 1; // Update balance
  energy.textContent = energyCount;
  console.log(energyCount);

  checkBalance(); // Call function to update leaderboard
});

function checkBalance() {
  const currentBalance = parseInt(balance.textContent);

  if (currentBalance === 100) {
    leaderboard.textContent = stone;
  } else if (currentBalance === 1000) {
    leaderboard.textContent = iron;
  } else if (currentBalance === 10000) {
    leaderboard.textContent = bronze;
  } else if (currentBalance === 100000) {
    leaderboard.textContent = silver;
  } else if (currentBalance === 1000000) {
    leaderboard.textContent = gold;
  } else if (currentBalance === 5000000) {
    leaderboard.textContent = diamond;
  } else if (currentBalance === 10000000) {
    leaderboard.textContent = platinum;
  } else if (currentBalance === 50000000) {
    leaderboard.textContent = master;
  } else if (currentBalance === 100000000) {
    leaderboard.textContent = grandMaster;
  } else if (currentBalance === 1000000000) {
    leaderboard.textContent = lord;
  } else if (currentBalance === 20000000000 || currentBalance > 20000000000) {
    leaderboard.textContent = creator;
  }
}