const frenEl = document.querySelector(".fren");

const taskEl = document.querySelector(".taskEl");


// const friendsPage = document.getElementById("friendsPage")

// const mainPage = document.getElementById("mainPage")

frenEl.addEventListener('click', function() {

    var friends = document.querySelector('body');
  
    // Change the href attribute to point to a different CSS file
    friends.classList.add("bodyFp")
  //   friendsPage.classList.remove("hidden")
  //   mainPage.classList.add("hidden")
  })
  ;

  taskEl.addEventListener('click', function() {

    var friends = document.querySelector('body');
  
    // Change the href attribute to point to a different CSS file
    friends.classList.add("bodyTp")
  //   friendsPage.classList.remove("hidden")
  //   mainPage.classList.add("hidden")
  })
  ;

  
frenEl.addEventListener('click', function() {

    var friends = document.querySelector('body');
  
    // Change the href attribute to point to a different CSS file
    friends.classList.add("bodyFp")
  //   friendsPage.classList.remove("hidden")
  //   mainPage.classList.add("hidden")
  })
  ;

  
frenEl.addEventListener('click', function() {

    var friends = document.querySelector('body');
  
    // Change the href attribute to point to a different CSS file
    friends.classList.add("bodyFp")
  //   friendsPage.classList.remove("hidden")
  //   mainPage.classList.add("hidden")
  })
//   ;
// const mineEl = document.querySelectorAll(".mineEl");
// const taskEl = document.querySelectorAll(".taskEl");
// const aDrop = document.querySelectorAll(".aDrop");

// // JavaScript to handle click event and change the CSS file

// const currentEnergyDisplay = document.getElementById("energy");
// const userBalanceDisplay = document.getElementById("userBalance");
// const mineEnergyBtn = document.getElementById("mineEnergyBtn");
// const claimRewardsBtn = document.getElementById("claimRewardsBtn");
// const energyRect1 = document.getElementById("energyRect1");
// const energyRect2 = document.getElementById("energyRect2");
// const maxUserBalanceDisplay = document.getElementById("maxUserBalance");
// const userLevelDisplay = document.getElementById("userLevelDisplay");
// const restartGameBtn = document.getElementById("restartGameBtn");

// let currentEnergy = 500; // Initial energy
// let maxEnergyLimit = 500; // Max energy before leveling up
// let userLevel = 1; // Current level
// let userBalance = 0; // Current balance

// // Function to update the energy bar display
// function updateEnergyBar() {
//     // Calculate the width for rectangle 1 and rectangle 2 based on energy
//     const energyRect1Width = (currentEnergy / maxEnergyLimit) * 100;
//     energyRect1.style.width = energyRect1Width + "%";

//     // Show/hide rectangles based on energy levels
//     if (currentEnergy < maxEnergyLimit) {
//         energyRect1.classList.remove("hidden");
//         energyRect2.classList.add("hidden");
//     } else {
//         energyRect1.classList.add("hidden");
//         energyRect2.classList.remove("hidden");
//         energyRect2.style.width = "100%"; // Fill rectangle2
//     }

//     // Update the displayed energy
//     currentEnergyDisplay.innerText = `${currentEnergy} / ${maxEnergyLimit}`; 
// }

// // Function to handle mining action
// function mine() {
//     if (currentEnergy > 0) {
//         userBalance += 10; // Increase balance for mining
//         userBalanceDisplay.innerText = userBalance;
//         currentEnergy -= 10; // Decrease energy by 50 for each mine
//         if (currentEnergy < 0) currentEnergy = 0; // Prevent negative energy
//         updateEnergyBar(); // Update energy bar after mining
//     } else {
//         alert("Not enough energy!"); // Alert if no energy is left
//     }
// }

// // Function to handle claiming rewards and leveling up
// function claim() {
//     userLevel++;
//     maxEnergyLimit += 250; // Increase max energy by 250 with each level up
//     currentEnergy = maxEnergyLimit; // Reset energy to max energy
//     updateEnergyBar(); // Update the energy bar to reflect new values
//     userLevelDisplay.innerText = "Level: " + userLevel; // Update the level display
// }

// // Function to reset the game to initial values
// function resetGame() {
//     currentEnergy = 500;
//     maxEnergyLimit = 500;
//     userLevel = 1;
//     userBalance = 0;

//     userBalanceDisplay.innerText = userBalance;
//     userLevelDisplay.innerText = "Level: " + userLevel;
//     updateEnergyBar(); // Reset the energy bar
// }

// // Event listeners for buttons
// mineEnergyBtn.addEventListener("click", mine);
// claimRewardsBtn.addEventListener("click", claim);
// restartGameBtn.addEventListener("click", resetGame);

// // Initial call to set up the energy bar
// updateEnergyBar()
;
import {leaderboard} from '../../function.js';



