/* Project Specs
-6 alien ships (factory)
    -weakness-
        - can only attack 1 at a time
        - waits to see the outcome of the battle before deploying another alien ship
-player 1 - Captain of USS Assembly
    -strength- 
        - can attack first 
        - after a ship is destroyed, you have the option to make a hasty retreat**
    -weekness- 
        - no targeting lasers
        - can only attack the aliens in order (see game round details)
        - ** retreating ends the game

A game round would look like this:
    - You attack the first alien ship
    - If the ship survives, it attacks you
    - If you survive, you attack the ship again
    - If it survives, it attacks you again ... etc
    - If you destroy the ship, you have the option to attack the next ship or to retreat
    - If you retreat, the game is over, perhaps leaving the game open for further developments or options
    - You win the game if you destroy all of the aliens
    - You lose the game if you are destroyed

- Ship Properties
    - hull = hitpoints. 
        - If hull reaches 0 or less, the ship is destroyed
    - firepower is the amount of damage done to the hull of the target with a successful hit
    - accuracy is the chance between 0 and 1 that the ship will hit its target

- USS Assembly properties:
    - hull - 20
    - firepower - 5
    - accuracy - .7

- Alien ships properties (Ranged and determined randomly):
    - hull - between 3 and 6
    - firepower - between 2 and 4
    - accuracy - between .6 and .8
---------------------------------------------------------------------------------------------------
//Refer to verbiage from game round details to create in play code
-----------------------------------------------------------------------------------------------------------*/

/*  Notes: 
  * alert vs prompts
    -alert will provide details (conversation fillers)
    -prompts will need the user to make a decision/input

    if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}
-- math.random = decimal values btwn 0-1 '
-- battle - loop - boolean 
-- a given ships accuracy is static once its created 
-- refer to w3d3 notes

------------------------------------------------------------------------------------------------------------*/

/* received ok to put h1 in html file since it doesn't affect the formulas

const headerEl = document.createElement("header");
headerEl.classList.add("main-title");
headerEl.textContent = "Save the Universe";
const h1El = document.createElement("h1");
document.body.appendChild(headerEl);

let h1El = document.querySelector("h1");
h1El.style.textAlign = "center";
*/

//At beginning of the game, the player is prompted with the mission at hand
function Start() {
  alert(
    "Captain, we are under attack! A fleet of alien ships are invading Earth!"
  );

  alert(
    "You are our best chance at survival. We need you to lead us in battle!"
  );
  let offer = prompt("Are you willing to help?");
  if (offer === "yes") {
    alert("Great! Lets kick some alien butt!!");
  } else {
    alert("This may be the end of humanity as we know it..... ");
  }
}
Start(); //***REMEMBER TO INVOKE THE FUNCTIONS!!**

class UssAssembly {
  constructor(hull, firePower, accuracy) {
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = 0.7;
  }
  attack(alienShip) {
    if (Math.random() < alien[0].accuracy) {
      console.log("You have been hit!");
    }
  }
}

// // class alien {
// //   constructor(hull, firepower, accuracy) {
// //     this.hull = ["3", "4", "5", "6"];
// //     this.firePower = ["2", "3", "4", "5"];
//     this.accuracy = [".6", ".7", ".8"];
//   } //look into Math.random configuration, floor, ceiling, round
// }
