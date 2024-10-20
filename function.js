const leaderboard = document.getElementById("level");
const overlayWhite = document.querySelector(".overlay2");
const noEnergy = document.querySelector(".noEnergy");
const overlay = document.querySelector(".overlay");
const ogBalance = document.getElementById("ogBalance");
const leaderboardLimit = document.getElementById("maxBalance");
const balance = document.getElementById("balance");
const energyBar = document.getElementById("energyBarMain1"); // This shows max energy
const energy = document.getElementById("energyBar"); // This tracks current usable energy
const tap = document.getElementById("mineBtn");
const resetBtn = document.getElementById("claim");
// const rectangle2 = document.querySelector(".rectangle-2")// Assuming this is your second rectangle
const rectangleContainer = document.querySelector(".rectangle-container"); // Parent container for rectangles

const stone = "stone";
const iron = "iron";
const bronze = "bronze";
const silver = "silver";
const gold = "gold";
const diamond = "diamond";
const platinum = "platinum";
const god = "god";
// const grandMaster = " master";
// const lord = "lord";
// const creator = "creator";

// Initialize variables
leaderboardLimit.textContent = 100;
let energyCount = 500; // Set initial usable energy to max energy
let maxEnergy = 500; // Maximum energy that refills on level up
let profitMultiplier = 1; // Profit multiplier for each tap
let lastLevel = ""; // Store the last level the user was at
let currentBalance = 0; // Track current balance

// Load balance from localStorage if it exists
let storedBalance = localStorage.getItem("balance");
if (storedBalance) {
    currentBalance = parseInt(storedBalance);
    balance.textContent = currentBalance;
} else {
    balance.textContent = 0;
}

// Load energy from localStorage if it exists
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

// Reset game function
function resetGame() {
    // Reset localStorage values
    localStorage.removeItem("balance");
    localStorage.removeItem("energy");
    localStorage.removeItem("level");
    localStorage.removeItem("maxBalance");
    localStorage.removeItem("multiplier");

    // Reset all displayed values
    currentBalance = 0;
    balance.textContent = currentBalance;
    energyCount = 500; // Reset energy count to initial value
    energy.textContent = energyCount; // Update energy display
    leaderboard.textContent = "Wood"; // Reset to starting level
    leaderboardLimit.textContent = 100; // Reset leaderboard limit
    profitMultiplier = 1; // Reset profit multiplier
    maxEnergy = 500; // Reset max energy
    energyBar.textContent = maxEnergy; // Reset energy bar display

    // Reset rectangle fill
    // rectangle2.style.width = "0%"; // Reset rectangle-2 fill
}

// Add event listener for reset button
resetBtn.addEventListener("click", resetGame);

// Refill energy by +1 every 5 seconds, but not beyond the maxEnergy
setInterval(function () {
    if (energyCount < maxEnergy) {
        energyCount += 10;
        energy.textContent = energyCount; // Update remaining energy
        localStorage.setItem("energy", energyCount); // Save the updated energy to localStorage
    }
}, 500); // Refill by 10 every 5 seconds

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
        currentBalance += profitMultiplier; // Increase balance
        balance.textContent = currentBalance; // Update balance display
        energy.textContent = energyCount; // Display remaining energy logically

        // Save balance and energy to localStorage
        localStorage.setItem("balance", currentBalance);
        localStorage.setItem("energy", energyCount);

        checkBalance(); // Check if level needs to be updated
        updateRectangleFill(); // Update the filling of rectangle-2
    } else {
        console.log("Not enough energy!");
        noEnergy.classList.remove("hidden");
        overlayWhite.classList.remove("hidden");
    }
}

// Check and update the user's level based on their balance
function checkBalance() {
    if (currentBalance < 100) return; // Skip if balance is less than 100

    // Check balance and level up accordingly
    if (currentBalance >= 100 && currentBalance < 1000 && lastLevel !== stone) {
        levelUp(stone, 1000, 2);  // "1K" = 1000 balance limit
    } else if (currentBalance >= 1000 && currentBalance < 10000 && lastLevel !== iron) {
        levelUp(iron, 10000, 3);  // "10K" = 10000 balance limit
    } else if (currentBalance >= 10000 && currentBalance < 100000 && lastLevel !== bronze) {
        levelUp(bronze, 100000, 5); // "100K" = 100000 balance limit
    } else if (currentBalance >= 100000 && currentBalance < 1000000 && lastLevel !== silver) {
        levelUp(silver, 1000000, 10); // "1M" = 1000000 balance limit
    } else if (currentBalance >= 1000000 && currentBalance < 5000000 && lastLevel !== gold) {
        levelUp(gold, 5000000, 20);  // "5M" = 5000000 balance limit
    } else if (currentBalance >= 5000000 && currentBalance < 10000000 && lastLevel !== diamond) {
        levelUp(diamond, 10000000, 50);  // "10M" = 10000000 balance limit
    } else if (currentBalance >= 10000000 && currentBalance < 50000000 && lastLevel !== platinum) {
        levelUp(platinum, 50000000, 100); // "50M" = 50000000 balance limit
    } else if (currentBalance >= 50000000 && currentBalance < 100000000 && lastLevel !== master) {
        levelUp(god, "50B", 200); // "100M" = 100000000 balance limit
    } else if (currentBalance >= 100000000 && currentBalance < 1000000000 && lastLevel !== grandMaster) {
        levelUp(grandMaster, 1000000000, 500); // "1B" = 1000000000 balance limit
    } else if (currentBalance >= 1000000000 && currentBalance < 20000000000 && lastLevel !== lord) {
        levelUp(lord, 20000000000, 1000); // "20B" = 20000000000 balance limit
    } else if (currentBalance >= 20000000000 && lastLevel !== creator) {
        levelUp(creator, Number.MAX_SAFE_INTEGER, 5000); // No further limit beyond creator
    }
}

// Function to handle leveling up
function levelUp(levelName, nextLimit, newMultiplier) {
    // Update leaderboard with new level
    leaderboard.textContent = levelName;
    leaderboardLimit.textContent = formatNumber(nextLimit); // Update leaderboard limit
    profitMultiplier = newMultiplier; // Increase profit multiplier

    // Increment max energy and usable energy by 250 (only once per level-up)
    maxEnergy += 250; // Increase max energy by 250
    energyCount = maxEnergy; // Refilling usable energy to new max

    // Update energy and energy bar displays
    energy.textContent = energyCount; // Update the displayed usable energy
    energyBar.textContent = maxEnergy; // Update the maximum energy display

    // Save new level and limits to localStorage
    localStorage.setItem("level", levelName);
    localStorage.setItem("maxBalance", nextLimit);
    localStorage.setItem("multiplier", newMultiplier);
    localStorage.setItem("maxEnergy", maxEnergy); // Save updated max energy

    console.log(`Level up! New level: ${levelName}, Max balance: ${nextLimit}, Multiplier: ${newMultiplier}`);
}

// Function to format numbers (e.g., 1000 to 1K)
function formatNumber(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1) + "T"; // Trillions
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"; // Billions
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"; // Millions
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"; // Thousands
    return num;
}

// Function to update the filling of rectangle-2
function updateRectangleFill() {
    // Logic for updating rectangle-2 filling based on current balance
    const fillPercentage = Math.min((currentBalance / parseInt(leaderboardLimit.textContent)) * 100, 100); // Calculate fill percentage
    rectangle2.style.width = `${fillPercentage}%`; // Update the fill of rectangle-2
}

// Add any additional logic or event listeners as needed
