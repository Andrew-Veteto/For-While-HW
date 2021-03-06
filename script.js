var wrap = document.body.querySelector(".wrapper");
var fight = document.body.querySelector(".dragonFight");
var Ddead = document.body.querySelector(".deadDragon");
var tie = document.body.querySelector(".none");
var setUp = document.body.querySelector(".tooMany");

var noWin = true;

var hits = prompt("How man times do you want to hit the dragon(1-5)? ");

  while(hits > 5){
    window.alert("YOU CAN ONLY CHOOSE A NUMBER BETWEEN 1 - 5");
    hits = prompt("How man times do you want to hit the dragon(1-5)? ");
  }


var playerHelth = 5;
var dragonHelth = 10;

wrap.innerHTML = "You will try to hit the dragon " + hits + " times!";

for (var i = hits; i >= 1; i--) {
  
  var playerHit = Math.floor(Math.random() * 7) + 1;

  if (playerHit > 5) {
    playerHit = 1;
  }

  dragonHelth = dragonHelth - playerHit;

  var dragonHit = Math.floor(Math.random() * 2) + 1;

  playerHelth = playerHelth - dragonHit;

  if (dragonHelth >= 1) {
    if (playerHelth >= 1) {
      fight.innerHTML += "The dragon Has " + dragonHelth + " HP left! You have " + playerHelth + " HP left! <br>";
    } else {
      Ddead.innerHTML += "The dragon Has WON! You have been Slain. <br><br>";
      noWin = false;
      i = i - i;
    }
  } else {
    Ddead.innerHTML += "The dragon Has Fallen! You are THE DRAGON SLAYOR!!! <br>";
     noWin = false;
     i = i - i;
  }


}

if(noWin){
  tie.innerHTML = "There is no winner! You both run for your life!";
}