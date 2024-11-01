// Select the required elements
const tapElement = document.querySelector(".tap");
const balanceElement = document.getElementById("blance"); // Corrected typo in "balance" to match your HTML
const energyElement = document.querySelector(".energy");

// Initialize the balance and energy values
let balance = parseFloat(balanceElement.textContent) || 0; // Convert text content to a number or default to 0
let energy = parseInt(energyElement.textContent) || 0; // Convert text content to an integer or default to 0
const maxEnergy = 50; // Define the maximum energy limit

// Function to handle tap event
function handleTap() {
  // Check if there is enough energy to tap
  if (energy > 0) {
    energy -= 1; // Deduct 1 energy per tap
    balance += 1; // Increase balance by 1 per tap

    // Update the energy and balance text content
    energyElement.textContent = energy; // Update energy display
    balanceElement.textContent = balance.toFixed(2); // Update balance display, showing 2 decimal places

    // Save the updated values to localStorage
    localStorage.setItem("energy", energy);
    localStorage.setItem("balance", balance);
  } else {
    console.log("Not enough energy to tap!");
  }
}

// Event listener for single-tap (click event)
tapElement.addEventListener("click", handleTap);

// Event listener for multi-touch (touchstart event)
tapElement.addEventListener("touchstart", function (event) {
  // Loop through each touch point and handle taps
  for (let i = 0; i < event.touches.length; i++) {
    handleTap();
  }
  event.preventDefault(); // Prevent default zoom/scroll behavior
});

// Function to increase energy by 1 every 10 seconds
setInterval(function () {
  if (energy < maxEnergy) { // Only increase energy if it's below the maximum limit
    energy += 1; // Increase energy by 1
    energyElement.textContent = energy; // Update energy display

    // Save the updated energy to localStorage
    localStorage.setItem("energy", energy);
  }
}, 10000); // 10,000 milliseconds = 10 seconds

// Load energy and balance from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  let storedEnergy = localStorage.getItem("energy");
  if (storedEnergy) {
    energy = parseInt(storedEnergy);
    energyElement.textContent = energy; // Load energy from localStorage
  }

  let storedBalance = localStorage.getItem("balance");
  if (storedBalance) {
    balance = parseFloat(storedBalance);
    balanceElement.textContent = balance.toFixed(2); // Load balance from localStorage, showing 2 decimal places
  }
});
