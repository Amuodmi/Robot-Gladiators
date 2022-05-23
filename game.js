var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

//for(var i = 0; i < enemyNames.length; i++){
   // console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index ");
//}

  // Alert players that they are starting the round
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

  // check enemy's health
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
     window.alert(playerName + " has died!");
     break;
   }

   else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
   }

 
  } //end of while loop
 }; //end of fight function

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
