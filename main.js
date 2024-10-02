const leaderboard = document.getElementById("level");
const noEnergy = document.querySelector(".noEnergy");
const overlayWhite = document.querySelector(".overlay2");
const overlay = document.querySelector(".overlay");

const leaderboardLimit = document.getElementById("maxBalance");
const balance = document.getElementById("balance");
const energyBar = document.getElementById("energyBarMain1"); // This shows max energy
const energy = document.getElementById("energyBar"); // This tracks current usable energy
const tap = document.getElementById("mineBtn");
const resetBtn = document.getElementById("resetBtn");
const profilePic = document.getElementById("profilePic");
const username = document.getElementById("username");

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
let energyCount = 500; // Set initial usable energy to max energy
let maxEnergy = 500; // Maximum energy that refills on level up
let profitMultiplier = 9; // Profit multiplier for each tap
let lastLevel = ""; // Store the last level the user was at

// Load balance from localStorage if it exists
let storedBalance = localStorage.getItem("balance");
if (storedBalance) {
  balance.textContent = storedBalance;
} else {
  balance.textContent = 0;
}

// Load energy from localStorage if it exists
let localEnergyBar = localStorage.getItem("energyBar")
let storedEnergy = localStorage.getItem("energy");
if (storedEnergy) {
  energyCount = parseInt(storedEnergy);
  energy.textContent = energyCount; // This will track the remaining usable energy
} else {
  energy.textContent = energyCount;
}

// Load leaderboard level from localStorage if it exists
let storedLevel = localStorage.getItem("level");
if (storedLevel) {
  leaderboard.textContent = storedLevel;
  lastLevel = storedLevel; // Set the last level to the stored value
}

// Load leaderboard limit from localStorage if it exists
let storedLimit = localStorage.getItem("maxBalance");
if (storedLimit) {
  leaderboardLimit.textContent = storedLimit;
}

// Load profit multiplier from localStorage if it exists
let storedMultiplier = localStorage.getItem("multiplier");
if (storedMultiplier) {
  profitMultiplier = parseInt(storedMultiplier);
}

// Always display the maximum energy in the energy bar
energyBar.textContent = maxEnergy; // Show max energy in energy bar

// Display user profile information (replace with actual data)
function displayUserProfile() {
  const userId = "<TELEGRAM_USER_ID>"; // Replace with your logic to get the user's Telegram ID
  const userName = "User Name"; // Replace with the actual username
  const userProfilePicture = "https://via.placeholder.com/50"; // Replace with the actual profile picture URL

  profilePic.src = userProfilePicture; // Set the profile picture
  username.textContent = userName; // Set the username
}

// Call function to display user profile
displayUserProfile();

// Reset game function
function resetGame() {
  // Reset localStorage values
  localStorage.removeItem("balance");
  localStorage.removeItem("energy");
  localStorage.removeItem("level");
  localStorage.removeItem("maxBalance");
  localStorage.removeItem("multiplier");

  // Reset all displayed values
  balance.textContent = 0;
  energyCount = 500; // Reset energy count to initial value
  energy.textContent = energyCount; // Update energy display
  leaderboard.textContent = "Wood"; // Reset to starting level
  leaderboardLimit.textContent = 100; // Reset leaderboard limit
  profitMultiplier = 1; // Reset profit multiplier
  maxEnergy = 5; // Reset max energy
  energyBar.textContent = maxEnergy; // Reset energy bar display
}

// Add event listener for reset button
resetBtn.addEventListener("click", resetGame);

// Refill energy by +1 every 10 seconds, but not beyond the maxEnergy
setInterval(function () {
  if (energyCount < maxEnergy) {
    energyCount += 1;
    energy.textContent = energyCount; // Update remaining energy
    localStorage.setItem("energy", energyCount); // Save the updated energy to localStorage
  }
}, 1000); // Refill by 1 every 10 seconds

// Event listener for tapping (multi-touch and single-tap)
tap.addEventListener("click", handleTap);

tap.addEventListener("touchstart", function (event) {
  for (let i = 0; i < event.touches.length; i++) {
    handleTap();
  }
  event.preventDefault(); // Prevent default zoom/scroll
});

// Function to handle taps
function handleTap() {
  if (energyCount >= profitMultiplier) {  // Ensure enough energy to proceed
    energyCount -= profitMultiplier;  // Deduct energy logically
    let newBalance = parseInt(balance.textContent) + profitMultiplier; // Increase balance
    balance.textContent = newBalance; // Update balance display

    energy.textContent = energyCount; // Display remaining energy logically

    // Save balance and energy to localStorage
    localStorage.setItem("balance", newBalance);
    localStorage.setItem("energy", energyCount);

    checkBalance(); // Check if level needs to be updated
  } else {
    console.log("Not enough energy!");
    noEnergy.classList.remove("hidden");
    noEnergy.classList.add("animate")
    
    overlayWhite.classList.remove("hidden");
  }
}

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
  
  // Increase max energy by 250
  maxEnergy += 250;  
  energyCount = maxEnergy; // Set current energy to max energy
  energyBar.textContent = maxEnergy; // Update the energy bar to reflect the new max energy
  
  // Save updated values to localStorage
  localStorage.setItem("level", levelName);
  localStorage.setItem("maxBalance", nextLimit);
  localStorage.setItem("multiplier", newMultiplier);
  localStorage.setItem("energy", energyCount);

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
  noEnergy.classList.add("hidden")
});

overlayWhite.addEventListener("click", function () {
  overlay.classList.add("hidden");
  overlayWhite.classList.add("hidden");
  noEnergy.classList.add("hidden")
  noEnergy.classList.remove("animate")
});

noEnergy.addEventListener("click", function () {
  noEnergy.classList.add("hidden")
  noEnergy.classList.remove("animate")
})