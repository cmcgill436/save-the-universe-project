/* Project Specs
-6 alien ships (factory poss)
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
-- refer to dom manipulation assignment for math random quotes. Can possibly use it for random alien functions
-- Breakdwn of Math.Random
    *Using Math.random and Math.floor to create random whole integer number in a set range*
      - Math.floor(Math.random() * (max - min + 1)) + min;
        - random integer between 3 and 6 ie [3, 4, 5, 6] (min=3 max=6)
          - Math.floor(Math.random() * 4) + 3;
           - Math.random returns a number between 0 inclusive and 1 exclusive
              - Math.random(); // returns # between 0-0.9999999999999999...
           - Shifts range of numbers from 0-0.9999 to 0-3.999999 (6-3+1)=4 
              -Math.random() * 4; // returns # between 0-3.9999999...
        - Math.floor() Changes to whole integers ie 0, 1, 2, 3 removes .9999... part
          - Math.floor(Math.random() * 4); // returns whole integer between 0-3
          - Shifts range of number to match by adding min (integers) ie 3, 4, 5, 6
            - Math.floor(Math.random() * 4) + 3; // returns whole integer between 3-6

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
//***REMEMBER TO INVOKE/CALL THE FUNCTIONS!!**

/*if offer response is yes, the USS Assembly ship and the 1st Alienship will 'generate'. 

1. USS Assembly will 'attack' (1st).
  - player will be giving the option to attack or "retreat" at each round
//   */

/*  - if retreat is selected, game is over & USS loses.
        -use this for retreat: alert("This may be the end of humanity as we know it.....")
  */

/*
2, if attacking, compare the two ships accuracy. If Uss Assembly's accuracy is greater than the Alienship's accuracy, then its a direct hit. 
  -Alienships w/ a 'hull < 5 ' will be automatically terminated.
  -If not, need to compute difference in alienship hull after the attack (hull - firePower) and then take their shot.


3. Again, accuracy will be compared to determine if the attack hits the ship
   -If sto, their attack value will be deducted from Uss Assembly's hull. 
      - if USS Assembly's hull > 0, proceed to another round.
        -if current alienship still has hull remaining from the prior round, it will remain in the battle.
          -if not, the next ship will be generated
            -either way, will need to return to step 1
              -If all 6 ships are destroyed, the player wins. 

  *need to track ship hull throughout game
*/

//factory for all of the ships
class Ship {
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
  attack(alien) {
    if (this.hull >= 0) {
      if (alien.name === alienShip[0].name)
        if (Math.floor(Math.random() * 3 + 0.6) / 10 <= this.accuracy) {
          alert("You hit their ship!");
          console.log(alien.hull - this.firePower);
        } else if (Math.floor(Math.random() * 3 + 0.6) / 10 > this.accuracy) {
          alert("You missed");
        }
    }
  }
  retreat() {
    if (input === R) {
      gameOver; //create code to similate the game ending/restart
      alert("This may be the end of humanity as we know it.....");
      // UssAssmbly loses
    } else {
      UssAssembly.attack;
    }
  }
}
// let alienAcc = Math.floor(Math.random() * 3 + 0.6) / 10;
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }
let Captain = new Ship("USS Assembly", 20, 5, 0.7);
console.log(Captain);

//ALIEN SHIP
// let AlienShip = ShipFactory("Aliens");

class Alien extends Ship {
  constructor(hull, firepower, accuracy) {
    super((this.ships = []));
    this.hull = Math.floor(Math.random() * 4) + 3; //range 3-6
    this.firePower = Math.floor(Math.random() * 3) + 2; //range 2-4
    this.accuracy = Math.floor(Math.random() * 3 + 0.6) / 10;
  }
  attack() {
    if (this.accuracy >= UssAssembly.accuracy) {
      alert("You hit their ship!");
      return true;
    } else {
      alert("You missed");
      return false;
    }
  }
}

function mission() {
  alert(
    "Captain, we are under attack! A fleet of alien ships are invading Earth!"
  );

  alert(
    "You are our best chance at survival. We need you to lead us in battle!"
  );
  let offer = prompt("Are you willing to help? (type yes or no)");
  if (offer === "yes") {
    alert("Great! Lets kick some alien butt!!");
    retreat();
  } else if (offer === "no") {
    alert("This may be the end of humanity as we know it.....");
    UssAssembly.retreat();
  }
}
mission();

function retreat() {
  alert(
    "Alright Captain, the USS Assembly is ready for battle! Are you ready to attack or would you like to retreat?"
  );
  let response = prompt("Type A for Attack or R for retreat");
  if (response === "r" || "R") {
    UssAssembly.retreat();
  } else if (response === "a" || "A") {
    UssAssembly.attack();
  }
}
// document.addEventListener("click", attack);
