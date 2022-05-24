var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
 
  // Alert players that they are starting the game
  window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
 
  while (playerHealth > 0 && enemyHealth > 0) {

  //Ask if player would like to Fight or Skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 5;
    console.log("playerMoney", playerMoney)
    break;
  }

  // if no (false), ask question again by running fight() again
  //else {
  //  fight();
   //}
  }

  //If player decides to fight
  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight"){
  
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemies health
 if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  break;
 } 
 else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
 }
  
  //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
   console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
   );

   //check player's health
   if (playerHealth <= 0){
     window.alert(playerName + " has died! Game over!");
     break;
   }

   else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
   }
 
  }//end of fight decision
 }//end of while loop
}; //end of fight loop


//fuction to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  //if player is still alive, player wins!
  if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert ("You've lost your robot in battle");
  }
  
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};
 

//function to start a new game
var startGame = function(){
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


  for (var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
      window.alert("Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);

     // if player is still alive and we're not at the last enemy in the array
     if (playerHealth > 0 && i < enemyNames.length - 1) {
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
    //if player is not alive, break out of the loop and let endGame function run
    } else {
      window.alert("You have lost your robot in battle. Game Over!");
      break;
    }
  }
} 
 
  // end the game function
  endGame();

};

//console log entering shop
var shop = function() {
  console.log("entered the shop");
 };


// start the game when the page loads
startGame();



