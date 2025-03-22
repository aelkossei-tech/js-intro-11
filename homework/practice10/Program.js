const HeroPlayer = require("./HeroPlayer");
const Player = require("./Player");
const SuperPlayer = require("./SuperPlayer");


/*
Create 2 player objects with below information
player1 = { nickName: 'Player 1', score: 5 }
player2 = { nickName: 'Player 2', score: 5 }

Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }

Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/

const player1 = new Player('Player 1', 5); 
const player2 = new Player('Player 2', 5); 


const superPlayer = new SuperPlayer('Super Player', 3); 
const heroPlayer = new HeroPlayer('Hero Player', 10); 

/*
Execute the attack() method for player1 over player2
    -this will decrease player2's score by 1 and increase player1's score by 1
Execute the attack() method for player1 over superPlayer
    -this will decrease superPlayer's score by 1 and increase player1's score by 1
Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
    -this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 6
Execute the heal() method for heroPlayer over player1 and player2
    -this will increase player1 and player2's score by 1
Execute the attack() method for player1, player2 and heroPlayer over superPlayer
    -this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 1
Execute the damage() method for player1 and player2
    -this will decrease player1 and player2's score by 1
*/

// Execute the attack() method for player1 over player2 --> -this will decrease player2's score by 1 and increase player1's score by 1
player1.attack(player2); 
console.log(player1.getInfo());
console.log(player2.getInfo());

// Execute the attack() method for player1 over superPlayer
player1.attack(superPlayer); 

// Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);

// Execute the heal() method for heroPlayer over player1 and player2 --> this will increase player1 and player2's score by 1
heroPlayer.heal(player1); 
heroPlayer.heal(player2); 

// Execute the attack() method for player1, player2 and heroPlayer over superPlayer
player1.attack(superPlayer); 
player2.attack(superPlayer); 
heroPlayer.attack(superPlayer); 

// Execute the damage() method for player1 and player2
player1.damage(); 
player2.damage(); 


/*
Print information of all the players using getInfo() method

EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/
const players = [player1, player2, superPlayer, heroPlayer]; 

for(const player of players) {
    console.log(player.getInfo()); 
}
