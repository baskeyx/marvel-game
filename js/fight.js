// fight
function fight(){
var markup = "";
var pf = 0;
var pa = 0;
var t = 0;

var villain = {
  "villains": [{
      "name": "Venom",
      "id": 1010788,
      "stats": {
        "durability": 6,
        "energy": 1,
        "fighting": 2,
        "intelligence": 2,
        "speed": 3,
        "strength": 7
      }
    },{
        "name": "Sabretooth",
        "id": 1009554,
        "stats": {
          "durability": 4,
          "energy": 1,
          "fighting": 7,
          "intelligence": 2,
          "speed": 2,
          "strength": 4
        }
      },{
        "name": "Doctor Octopus",
        "id": 1009276,
        "stats": {
          "durability": 2,
          "energy": 1,
          "fighting": 4,
          "intelligence": 6,
          "speed": 2,
          "strength": 2
        }
      },{
        "name": "Toad",
        "id": 1009673,
        "stats": {
          "durability": 4,
          "energy": 3,
          "fighting": 4,
          "intelligence": 5,
          "speed": 5,
          "strength": 5
        }
      },{
        "name": "Mystique",
        "id": 1009465,
        "stats": {
          "durability": 3,
          "energy": 1,
          "fighting": 5,
          "intelligence": 4,
          "speed": 2,
          "strength": 2
        }
      },{
          "name": "Lizard",
          "id": 1009404,
          "stats": {
            "durability": 5,
            "energy": 1,
            "fighting": 2,
            "intelligence": 5,
            "speed": 2,
            "strength": 4
          }
        }
  ]
  };

  var heroStats = {};

html.querySelector(".hub-challenges .hub-card").addEventListener("click", function(){
  // when challenge is selected pull details of selected character into a new object - temp hero and temp villain

  var customVillain = Math.floor((Math.random() * villain.villains.length));
  villainId = villain.villains[customVillain].id;

  heroStats = userState.cards[0];

  var heroCard = buildCard(userState.cards[0],"hero");
  var villainStats = returnStats(villainId,villain.villains);
  fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + villainId + "?apikey=" + apiKey, function(data) {
    charImg = data.data.results[0].thumbnail.path +  "." + data.data.results[0].thumbnail.extension;
    html.querySelector(".villain-wrapper img").src = charImg;
  });

  var villainCard = buildCard(villainStats,"villain");

  html.querySelector(".overlay").innerHTML = heroCard + "<div class='instructions'></div>" + villainCard;
  html.classList.add("fight");

  // start fight

  var playerTurn = 0;
  var gameProgress = 1;

  var r = Math.random();

  if (r < 0.5){
    cmptTurn();
    instructions("Computer Turn");
  }
  else{
    playerTurn = 1;
    instructions("Your Turn");
  }

  var attributes = html.querySelectorAll(".hero-wrapper .attrib");

  for (i=0;i<attributes.length;i++){
    attributes[i].addEventListener("click", function(){
      if (gameProgress == 1){
        if (playerTurn == 1){
          playerTurn = 0;
          if (this.className.indexOf("done")<0){
            var selected = this.dataset.val;
            var h = heroStats.stats[selected];
            var v = villainStats.stats[selected];

            compareStats(h,v,selected);
            cmptTurn();

          }
        }
        else{
          console.log("not your turn pal");
        }
      }
      else{
        console.log("game's finished bro");
      }
    });
  }

  function compareStats(h,v,key){
    if (h > v){
      pf++;
      console.log(heroStats.name);
      html.querySelector(".hero-wrapper ." + key).classList.add("won");
      html.querySelector(".villain-wrapper ." + key).classList.add("lost");
      html.querySelector(".villain-wrapper").classList.add("points-" + pf);
    }
    else if (h < v){
      pa++;
      console.log(villainStats.name);
      html.querySelector(".villain-wrapper ." + key).classList.add("won");
      html.querySelector(".hero-wrapper ." + key).classList.add("lost");
      html.querySelector(".hero-wrapper").classList.add("points-" + pa);
    }
    else{
      console.log("tie");
    }

    t++;

    if (t === 6 || pf === 3 || pa === 3){
      if (pf > pa){
        instructions(heroStats.name + " wins");
      }
      else if (pf < pa){
        instructions(villainStats.name + " wins");
      }
      else{
        instructions("it's a tie!");
      }
      gameProgress = 0;
    }
      delete heroStats.stats[key];
      delete villainStats.stats[key];
      for (j=0;j<html.querySelectorAll("." + key).length;j++){
        html.querySelectorAll("." + key)[j].classList.add("done");
      }
  }

  function instructions(message){
    var instructions = html.querySelector(".instructions");
    instructions.innerHTML = message;
  }

  function cmptTurn(){
    if (gameProgress == 1){
    instructions("Computer Turn");
      var s = 0;
      var k = "";
      for(var key in villainStats.stats) {
        var value = villainStats.stats[key];
        if (value > s){
          s = value;
          k = key;
        }
      }
      var h = heroStats.stats[k];
      var v = s;
      setTimeout(function(){
        instructions("Your Turn");
        compareStats(h,v,k);
        playerTurn = 1;
      },2000);
    }
  }


});
}
