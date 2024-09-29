const leaderboard = document.getElementById("level");
const noEnergy = document.querySelector(".noEnergy");
const overlayWhite = document.querySelector(".overlay2");
const overlay = document.querySelector(".overlay");

const leaderboardLimit = document.getElementById("maxBalance");
const balance = document.getElementById("balance");
const energyBar = document.getElementById("energyBarMain1");
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

// Initialize variables
leaderboardLimit.textContent = 100;
let energyCount = 5;
let maxEnergy = 500; // Maximum energy that refills on level up
let profitMultiplier = 1; // Profit multiplier for each tap
let lastLevel = ""; // Store the last level the user was at

// Initialize display values
balance.textContent = 0;
energy.textContent = energyCount;

// Refill energy by +1 every second, but not beyond the maxEnergy
setInterval(function () {
  if (energyCount < maxEnergy) {
    energyCount += 1;
    energy.textContent = energyCount;// Update energy bar with the current energy
  }
}, 10000); // Refill by 1 every second

// Event listener for the tap button
tap.addEventListener("click", function () {
  if (energyCount >= profitMultiplier) {  // Ensure enough energy to proceed
    energyCount -= profitMultiplier;  // Deduct energy based on the profit multiplier
    balance.textContent = parseInt(balance.textContent) + profitMultiplier; // Increase balance
    energy.textContent = energyCount;// Update energy bar
    console.log(energyCount);

    checkBalance(); // Check if level needs to be updated
  } else {
    console.log("Not enough !");
    noEnergy.classList.remove("hidden");
    overlayWhite.classList.remove("hidden");
  }
});

// Check and update the user's level based on their balance
function checkBalance() {
  const currentBalance = parseInt(balance.textContent);

  if (currentBalance >= 100 && currentBalance < 1000 && lastLevel !== stone) {
    levelUp(stone, "1K", 2);
  } else if (currentBalance >= 1000 && currentBalance < 10000 && lastLevel !== iron) {
    levelUp(iron, "10K", 3);
  } else if (currentBalance >= 10000 && currentBalance < 100000 && lastLevel !== bronze) {
    levelUp(bronze, "100K", 5);
  } else if (currentBalance >= 100000 && currentBalance < 1000000 && lastLevel !== silver) {
    levelUp(silver, "1M", 10);
  } else if (currentBalance >= 1000000 && currentBalance < 5000000 && lastLevel !== gold) {
    levelUp(gold, "5M", 20);
  } else if (currentBalance >= 5000000 && currentBalance < 10000000 && lastLevel !== diamond) {
    levelUp(diamond, "10M", 50);
  } else if (currentBalance >= 10000000 && currentBalance < 50000000 && lastLevel !== platinum) {
    levelUp(platinum, "50M", 100);
  } else if (currentBalance >= 50000000 && currentBalance < 100000000 && lastLevel !== master) {
    levelUp(master, "100M", 200);
  } else if (currentBalance >= 100000000 && currentBalance < 1000000000 && lastLevel !== grandMaster) {
    levelUp(grandMaster, "1B", 500);
  } else if (currentBalance >= 1000000000 && currentBalance < 20000000000 && lastLevel !== lord) {
    levelUp(lord, "Max level", 1000);
  } else if (currentBalance >= 20000000000 && lastLevel !== creator) {
    levelUp(creator, "Max level", 5000);
  }
}

// Function to handle leveling up
function levelUp(levelName, nextLimit, newMultiplier) {
  // Update leaderboard and energy count upon leveling up
  leaderboard.textContent = levelName;
  leaderboardLimit.textContent = nextLimit;
  profitMultiplier = newMultiplier; // Set the profit and energy cost per tap
  
  // Refill energy fully upon leveling up and update maxEnergy
  maxEnergy += 250;  // Increase the max energy capacity
  energyCount = maxEnergy; // Refill energy fully on level up
  energy.textContent = energyCount;
  energyBar.textContent = energyCount; // Update energy bar
  
  // Show overlay message only once for each level
  overlay.classList.remove("hidden");
  overlayWhite.classList.remove("hidden");

  // Store the current level
  lastLevel = levelName;
}

// Hide the overlay when clicked
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  overlayWhite.classList.add("hidden");
});

overlayWhite.addEventListener("click", function () {
  overlay.classList.add("hidden");
  overlayWhite.classList.add("hidden");
});

// Show overlay when energy reaches 0
if (energyCount === 0) {
  overlay.classList.remove("hidden");
  overlayWhite.classList.remove("hidden");
}
