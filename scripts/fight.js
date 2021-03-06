// fight
function fight() {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
      "name": "Nebula",
      "id": 1010365,
      "stats": {
        "durability": 3,
        "energy": 6,
        "fighting": 4,
        "intelligence": 4,
        "speed": 2,
        "strength": 4
      }
    }, {
      "name": "Ronan",
      "id": 1010344,
      "stats": {
        "durability": 7,
        "energy": 7,
        "fighting": 6,
        "intelligence": 4,
        "speed": 4,
        "strength": 6
      }
    }, {
      "name": "Magneto",
      "id": 1009417,
      "stats": {
        "durability": 6,
        "energy": 6,
        "fighting": 3,
        "intelligence": 6,
        "speed": 4,
        "strength": 2
      }
    },{
      "name": "Juggernaut",
      "id": 1009382,
      "stats": {
        "durability": 7,
        "energy": 1,
        "fighting": 3,
        "intelligence": 2,
        "speed": 4,
        "strength": 7
      }
    },{
      "name": "Ultron",
      "id": 1009685,
      "stats": {
        "durability": 7,
        "energy": 6,
        "fighting": 4,
        "intelligence": 4,
        "speed": 2,
        "strength": 6
      }
    },{
    //   "name": "Apocalypse",
    //   "id": 1009156,
    //   "stats": {
    //     "durability": 6,
    //     "energy": 7,
    //     "fighting": 7,
    //     "intelligence": 7,
    //     "speed": 7,
    //     "strength": 7
    //   }
    // },{
    //   "name": "Thanos",
    //   "id": 1009652,
    //   "stats": {
    //     "durability": 7,
    //     "energy": 7,
    //     "fighting": 7,
    //     "intelligence": 7,
    //     "speed": 6,
    //     "strength": 7
    //   }
    // },{
      "name": "Loki",
      "id": 1009407,
      "stats": {
        "durability": 4,
        "energy": 5,
        "fighting": 2,
        "intelligence": 4,
        "speed": 3,
        "strength": 5
      }
    },{
      "name": "Bullseye",
      "id": 1009212,
      "stats": {
        "durability": 2,
        "energy": 1,
        "fighting": 6,
        "intelligence": 2,
        "speed": 2,
        "strength": 2
      }
    },{
      "name": "Kingpin",
      "id": 1009389,
      "stats": {
        "durability": 3,
        "energy": 1,
        "fighting": 5,
        "intelligence": 4,
        "speed": 2,
        "strength": 3
      }
    },{
    //   "name": "Dracula",
    //   "id": 1010677,
    //   "stats": {
    //     "durability": 7,
    //     "energy": 7,
    //     "fighting": 7,
    //     "intelligence": 7,
    //     "speed": 7,
    //     "strength": 7
    //   }
    // },{
      "name": "Doctor Doom",
      "id": 1009281,
      "stats": {
        "durability": 6,
        "energy": 6,
        "fighting": 4,
        "intelligence": 6,
        "speed": 5,
        "strength": 6
      }
    },{
    //   "name": "Mephisto",
    //   "id": 1009440,
    //   "stats": {
    //     "durability": 7,
    //     "energy": 7,
    //     "fighting": 7,
    //     "intelligence": 6,
    //     "speed": 7,
    //     "strength": 7
    //   }
    // },{
      "name": "Moonstone",
      "id": 1010362,
      "stats": {
        "durability": 4,
        "energy": 5,
        "fighting": 4,
        "intelligence": 5,
        "speed": 5,
        "strength": 4
      }
    },{
      "name": "Medusa",
      "id": 1009438,
      "stats": {
        "durability": 4,
        "energy": 1,
        "fighting": 4,
        "intelligence": 6,
        "speed": 6,
        "strength": 2
      }
    },{
      "name": "Emma Frost",
      "id": 1009310,
      "stats": {
        "durability": 7,
        "energy": 7,
        "fighting": 6,
        "intelligence": 7,
        "speed": 4,
        "strength": 5
      }
    },{
      "name": "Toxin",
      "id": 1009692,
      "stats": {
        "durability": 5,
        "energy": 1,
        "fighting": 3,
        "intelligence": 5,
        "speed": 3,
        "strength": 6
      }
    },{
      "name": "Red Skull",
      "id": 1009535,
      "stats": {
        "durability": 3,
        "energy": 1,
        "fighting": 5,
        "intelligence": 4,
        "speed": 3,
        "strength": 3
      }
    }]
  };

  var heroStats = {};

  html.querySelector(".hub-challenges .hub-card").addEventListener("click", function() {
    // when challenge is selected pull details of selected character into a new object - temp hero and temp villain

    var customVillain = Math.floor((Math.random() * villain.villains.length));
    villainId = villain.villains[customVillain].id;

    // temp selection for time being
    heroStats = userState.cards[0];

    // build new temp for fight
    var tempHeroFight = buildTempObject(heroStats);
    var villainStats = returnStats(villainId, villain.villains);
    var tempVillainFight = buildTempObject(villainStats);

    var heroCard = buildCard(heroStats, "hero");

    fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + villainId + "?apikey=" + apiKey, function(data) {
      charImg = data.data.results[0].thumbnail.path + "." + data.data.results[0].thumbnail.extension;
      html.querySelector(".villain-wrapper img").src = charImg;
    });

    var villainCard = buildCard(villainStats, "villain");

    html.querySelector(".overlay").innerHTML = heroCard + "<div class='instructions'></div>" + villainCard;
    html.classList.add("fight");


    // start fight
    window.scrollTo(0, 0);
    var playerTurn = 0;
    var gameProgress = 1;

    var r = Math.random();

    if (r < 0.5) {
      cmptTurn();
      instructions("Computer Turn");
    } else {
      playerTurn = 1;
      instructions("Your Turn");
    }

    var attributes = html.querySelectorAll(".hero-wrapper .attrib");

    for (i = 0; i < attributes.length; i++) {
      attributes[i].addEventListener("click", function() {
        if (gameProgress == 1) {
          if (playerTurn == 1) {
            if (this.className.indexOf("done")===-1){
              playerTurn = 0;
              if (this.className.indexOf("done") < 0) {
                var selected = this.dataset.val;
                var h = tempHeroFight.stats[selected];
                var v = tempVillainFight.stats[selected];

                compareStats(h, v, selected);
                cmptTurn();

              }
            } else {
              //console.log("you've already picked that bud");
            }
          }
          else{
            //console.log("not your turn pal");
          }
        } else {
          //console.log("game's finished bro");
        }
      });
    }

    function compareStats(h, v, key) {
      if (h > v) {
        pf++;
        //console.log(tempHeroFight.name);
        html.querySelector(".hero-wrapper ." + key).classList.add("won");
        html.querySelector(".villain-wrapper ." + key).classList.add("lost");
        html.querySelector(".villain-wrapper").classList.add("points-" + pf);
      } else if (h < v) {
        pa++;
        //console.log(tempVillainFight.name);
        html.querySelector(".villain-wrapper ." + key).classList.add("won");
        html.querySelector(".hero-wrapper ." + key).classList.add("lost");
        html.querySelector(".hero-wrapper").classList.add("points-" + pa);
      } else {
        //console.log("tie");
      }

      t++;

      if (t === 6 || pf === 3 || pa === 3) {
        if (pf > pa) {
          instructions(tempHeroFight.name + " wins");
          userState.currency += 1;
          html.querySelector(".coins").innerHTML = userState.currency;
          html.querySelector(".hub-welcome p").innerHTML = "Nice one, You defeated " + tempVillainFight.name + "!";

        } else if (pf < pa) {
          instructions(tempVillainFight.name + " wins");
          html.querySelector(".hub-welcome p").innerHTML = "Oh snap, you were defeated by " + tempVillainFight.name + ". Why not try another challenge to redeem yourself?";
        } else {
          instructions("it's a tie!");
          html.querySelector(".hub-welcome p").innerHTML = "Woah, close.. the game with " + tempVillainFight.name + " was a tie. Why not try another challenge?";
        }
        gameProgress = 0;
        setTimeout(function(){
          html.classList.remove("fight");
        },3000);
        pf = 0;
        pa = 0;
        t = 0;
      }
      delete tempHeroFight.stats[key];
      delete tempVillainFight.stats[key];
      for (j = 0; j < html.querySelectorAll("." + key).length; j++) {
        html.querySelectorAll("." + key)[j].classList.add("done");
      }

    }

    function instructions(message) {
      var instructions = html.querySelector(".instructions");
      instructions.innerHTML = message;
    }

    function cmptTurn() {
      if (gameProgress == 1) {
        instructions("Computer Turn");
        var s = 0;
        var k = "";
        for (var key in tempVillainFight.stats) {
          var value = tempVillainFight.stats[key];
          if (value > s) {
            s = value;
            k = key;
          }
        }
        var h = tempHeroFight.stats[k];
        var v = s;
        setTimeout(function() {
          instructions("Your Turn");
          compareStats(h, v, k);
          playerTurn = 1;
        }, 2000);
      }
    }


  });
}
