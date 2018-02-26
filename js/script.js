var apiKey = "5bcbb3547b9551e6c40081b37dc2f1df";

var challenge = {
  challenges: [{
      name: "Mob Hit",
      description: "The Kingpin has put a hit out on you. Can you stop the deadly assassin Bullseye before it's too late?",
      level: 1,
      stages: [1009212,1009389],
      prizes: {
        currency: 1,
        hero: {
          id: 1010923,
          chance: 0.05
        },
        cardType: "normal"
      }
    }]
  };

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
    }]
  };

  var heroStats = {};

  html.querySelector(".hub-challenges .hub-card").addEventListener("click", function() {
    // when challenge is selected pull details of selected character into a new object - temp hero and temp villain

    var customVillain = Math.floor((Math.random() * villain.villains.length));
    villainId = villain.villains[customVillain].id;

    heroStats = userState.cards[0];

    var heroCard = buildCard(userState.cards[0], "hero");
    var villainStats = returnStats(villainId, villain.villains);
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
            playerTurn = 0;
            if (this.className.indexOf("done") < 0) {
              var selected = this.dataset.val;
              var h = heroStats.stats[selected];
              var v = villainStats.stats[selected];

              compareStats(h, v, selected);
              cmptTurn();

            }
          } else {
            console.log("not your turn pal");
          }
        } else {
          console.log("game's finished bro");
        }
      });
    }

    function compareStats(h, v, key) {
      if (h > v) {
        pf++;
        console.log(heroStats.name);
        html.querySelector(".hero-wrapper ." + key).classList.add("won");
        html.querySelector(".villain-wrapper ." + key).classList.add("lost");
        html.querySelector(".villain-wrapper").classList.add("points-" + pf);
      } else if (h < v) {
        pa++;
        console.log(villainStats.name);
        html.querySelector(".villain-wrapper ." + key).classList.add("won");
        html.querySelector(".hero-wrapper ." + key).classList.add("lost");
        html.querySelector(".hero-wrapper").classList.add("points-" + pa);
      } else {
        console.log("tie");
      }

      t++;

      if (t === 6 || pf === 3 || pa === 3) {
        if (pf > pa) {
          instructions(heroStats.name + " wins");
        } else if (pf < pa) {
          instructions(villainStats.name + " wins");
        } else {
          instructions("it's a tie!");
        }
        gameProgress = 0;
      }
      delete heroStats.stats[key];
      delete villainStats.stats[key];
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
        for (var key in villainStats.stats) {
          var value = villainStats.stats[key];
          if (value > s) {
            s = value;
            k = key;
          }
        }
        var h = heroStats.stats[k];
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

function loadHeros() {
  var hero = {
    "heros": [{
        "name": "Hawkeye",
        "id": 1009338,
        "stats": {
          "durability": 2,
          "energy": 2,
          "fighting": 7,
          "intelligence": 5,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Black Widow",
        "id": 1009189,
        "stats": {
          "durability": 3,
          "energy": 3,
          "fighting": 6,
          "intelligence": 3,
          "speed": 2,
          "strength": 3
        }
      }, {
        "name": "Falcon",
        "id": 1009297,
        "stats": {
          "durability": 3,
          "energy": 3,
          "fighting": 5,
          "intelligence": 3,
          "speed": 4,
          "strength": 3
        }
      },
      {
        "name": "Storm",
        "id": 1009629,
        "stats": {
          "durability": 3,
          "energy": 6,
          "fighting": 5,
          "intelligence": 5,
          "speed": 5,
          "strength": 2
        }
      },
      {
        "name": "Gambit",
        "id": 1009313,
        "stats": {
          "durability": 3,
          "energy": 5,
          "fighting": 4,
          "intelligence": 3,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Beast",
        "id": 1009175,
        "stats": {
          "durability": 4,
          "energy": 1,
          "fighting": 4,
          "intelligence": 6,
          "speed": 3,
          "strength": 4
        }
      },
      {
        "name": "Cyclops",
        "id": 1009257,
        "stats": {
          "durability": 4,
          "energy": 7,
          "fighting": 5,
          "intelligence": 5,
          "speed": 4,
          "strength": 4
        }
      },
      {
        "name": "Nightcrawler",
        "id": 1009472,
        "stats": {
          "durability": 5,
          "energy": 7,
          "fighting": 7,
          "intelligence": 5,
          "speed": 7,
          "strength": 5
        }
      },
      {
        "name": "Quicksilver",
        "id": 1009524,
        "stats": {
          "durability": 2,
          "energy": 2,
          "fighting": 4,
          "intelligence": 3,
          "speed": 7,
          "strength": 2
        }
      },
      {
        "name": "Rogue",
        "id": 1009546,
        "stats": {
          "durability": 7,
          "energy": 4,
          "fighting": 6,
          "intelligence": 3,
          "speed": 2,
          "strength": 7
        }
      },
      {
        "name": "Gamora",
        "id": 1010763,
        "stats": {
          "durability": 6,
          "energy": 1,
          "fighting": 7,
          "intelligence": 4,
          "speed": 5,
          "strength": 5
        }
      },
      {
        "name": "Wasp",
        "id": 1009707,
        "stats": {
          "durability": 3,
          "energy": 2,
          "fighting": 3,
          "intelligence": 4,
          "speed": 5,
          "strength": 4
        }
      },
      {
        "name": "War Machine",
        "id": 1010991,
        "stats": {
          "durability": 6,
          "energy": 6,
          "fighting": 4,
          "intelligence": 3,
          "speed": 5,
          "strength": 6
        }
      },
      {
        "name": "Scarlet Witch",
        "id": 1009562,
        "stats": {
          "durability": 3,
          "energy": 7,
          "fighting": 3,
          "intelligence": 3,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Kitty Pryde",
        "id": 1009508,
        "stats": {
          "durability": 3,
          "energy": 2,
          "fighting": 4,
          "intelligence": 4,
          "speed": 2,
          "strength": 2
        }
      },
      {
        "name": "Iceman",
        "id": 1009362,
        "stats": {
          "durability": 4,
          "energy": 5,
          "fighting": 3,
          "intelligence": 2,
          "speed": 4,
          "strength": 3
        }
      },
      {
        "name": "Drax",
        "id": 1010735,
        "stats": {
          "durability": 7,
          "energy": 2,
          "fighting": 6,
          "intelligence": 1,
          "speed": 4,
          "strength": 6
        }
      },
      {
        "name": "Rocket Racoon",
        "id": 1010744,
        "stats": {
          "durability": 2,
          "energy": 1,
          "fighting": 4,
          "intelligence": 4,
          "speed": 3,
          "strength": 1
        }
      },
      {
        "name": "Groot",
        "id": 1010743,
        "stats": {
          "durability": 5,
          "energy": 1,
          "fighting": 4,
          "intelligence": 6,
          "speed": 2,
          "strength": 5
        }
      },
      {
        "name": "Thing",
        "id": 1009662,
        "stats": {
          "durability": 6,
          "energy": 1,
          "fighting": 4,
          "intelligence": 2,
          "speed": 2,
          "strength": 6
        }
      },
      {
        "name": "Winter Soldier",
        "id": 1010740,
        "stats": {
          "durability": 3,
          "energy": 1,
          "fighting": 7,
          "intelligence": 3,
          "speed": 2,
          "strength": 3
        }
      },
      {
        "name": "The Punisher",
        "id": 1009515,
        "stats": {
          "durability": 6,
          "energy": 4,
          "fighting": 6,
          "intelligence": 5,
          "speed": 5,
          "strength": 6
        }
      },
      {
        "name": "Colossus",
        "id": 1009243,
        "stats": {
          "durability": 7,
          "energy": 5,
          "fighting": 5,
          "intelligence": 4,
          "speed": 4,
          "strength": 7
        }
      },
      {
        "name": "Havok",
        "id": 1009337,
        "stats": {
          "durability": 3,
          "energy": 6,
          "fighting": 3,
          "intelligence": 3,
          "speed": 2,
          "strength": 2
        }
      },
      {
        "name": "Ant Man",
        "id": 1010801,
        "stats": {
          "durability": 2,
          "energy": 4,
          "fighting": 2,
          "intelligence": 4,
          "speed": 2,
          "strength": 2
        }
      },
      {
        "name": "Jean Grey V1",
        "id": 1009327,
        "stats": {
          "durability": 3,
          "energy": 6,
          "fighting": 6,
          "intelligence": 4,
          "speed": 3,
          "strength": 2
        }
      },
      {
        "name": "Ghost Rider",
        "id": 1009318,
        "stats": {
          "durability": 7,
          "energy": 6,
          "fighting": 4,
          "intelligence": 3,
          "speed": 2,
          "strength": 4
        }
      },
      {
        "name": "Invisible Women",
        "id": 1009366,
        "stats": {
          "durability": 6,
          "energy": 7,
          "fighting": 5,
          "intelligence": 5,
          "speed": 5,
          "strength": 4
        }
      },
      {
        "name": "Mr. Fantastic",
        "id": 1009459,
        "stats": {
          "durability": 6,
          "energy": 1,
          "fighting": 2,
          "intelligence": 6,
          "speed": 2,
          "strength": 3
        }
      },
      {
        "name": "Archangel",
        "id": 1009159,
        "stats": {
          "durability": 4,
          "energy": 1,
          "fighting": 3,
          "intelligence": 3,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Vision",
        "id": 1009697,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 7,
          "speed": 7,
          "strength": 7
        }
      },
      {
        "name": "Psylocke",
        "id": 1009512,
        "stats": {
          "durability": 3,
          "energy": 6,
          "fighting": 6,
          "intelligence": 4,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Spiderman",
        "id": 1009610,
        "stats": {
          "durability": 3,
          "energy": 4,
          "fighting": 5,
          "intelligence": 4,
          "speed": 5,
          "strength": 4
        }
      },
      {
        "name": "Blade",
        "id": 1009191,
        "stats": {
          "durability": 5,
          "energy": 1,
          "fighting": 5,
          "intelligence": 4,
          "speed": 5,
          "strength": 5
        }
      },
      {
        "name": "Black Panther",
        "id": 1009187,
        "stats": {
          "durability": 3,
          "energy": 1,
          "fighting": 6,
          "intelligence": 5,
          "speed": 4,
          "strength": 4
        }
      },
      {
        "name": "Human Torch",
        "id": 1009356,
        "stats": {
          "durability": 4,
          "energy": 6,
          "fighting": 4,
          "intelligence": 4,
          "speed": 5,
          "strength": 4
        }
      },
      {
        "name": "Hulk",
        "id": 1009351,
        "stats": {
          "durability": 7,
          "energy": 1,
          "fighting": 5,
          "intelligence": 6,
          "speed": 7,
          "strength": 7
        }
      },
      {
        "name": "Iron Man",
        "id": 1009368,
        "stats": {
          "durability": 6,
          "energy": 6,
          "fighting": 3,
          "intelligence": 6,
          "speed": 5,
          "strength": 6
        }
      },
      {
        "name": "Captain America",
        "id": 1009220,
        "stats": {
          "durability": 3,
          "energy": 1,
          "fighting": 6,
          "intelligence": 4,
          "speed": 3,
          "strength": 3
        }
      },
      {
        "name": "Star Lord",
        "id": 1010733,
        "stats": {
          "durability": 4,
          "energy": 6,
          "fighting": 5,
          "intelligence": 5,
          "speed": 7,
          "strength": 5
        }
      },
      {
        "name": "Wolverine",
        "id": 1009718,
        "stats": {
          "durability": 4,
          "energy": 1,
          "fighting": 4,
          "intelligence": 2,
          "speed": 3,
          "strength": 4
        }
      },
      {
        "name": "Wolverine (Ultimate)",
        "id": 1011006,
        "stats": {
          "durability": 7,
          "energy": 4,
          "fighting": 6,
          "intelligence": 3,
          "speed": 3,
          "strength": 5
        }
      },
      {
        "name": "Spiderman (Ultimate)",
        "id": 1011010,
        "stats": {
          "durability": 3,
          "energy": 1,
          "fighting": 7,
          "intelligence": 6,
          "speed": 7,
          "strength": 7
        }
      },
      {
        "name": "Thor",
        "id": 1009664,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 6,
          "intelligence": 2,
          "speed": 6,
          "strength": 7
        }
      },
      {
        "name": "Daredevil",
        "id": 1009262,
        "stats": {
          "durability": 2,
          "energy": 1,
          "fighting": 6,
          "intelligence": 3,
          "speed": 3,
          "strength": 2
        }
      },
      {
        "name": "Daredevil (Ultimate)",
        "id": 1010919,
        "stats": {
          "durability": 3,
          "energy": 2,
          "fighting": 6,
          "intelligence": 7,
          "speed": 5,
          "strength": 5
        }
      },
      {
        "name": "Doctor Strange",
        "id": 1009282,
        "stats": {
          "durability": 6,
          "energy": 7,
          "fighting": 7,
          "intelligence": 4,
          "speed": 5,
          "strength": 3
        }
      },
      {
        "name": "Silver Surfer",
        "id": 1009592,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 5,
          "intelligence": 4,
          "speed": 7,
          "strength": 6
        }
      }, {
        "name": "Deadpool",
        "id": 1009268,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 5,
          "speed": 7,
          "strength": 4
        }
      }, {
        "name": "Professor X",
        "id": 1009504,
        "stats": {
          "durability": 4,
          "energy": 7,
          "fighting": 4,
          "intelligence": 7,
          "speed": 2,
          "strength": 4
        }
      }, {
        "name": "Jean Grey - Phoenix",
        "id": 1009496,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 7,
          "speed": 7,
          "strength": 7
        }
      }, {
        "name": "Thor (Ultimate)",
        "id": 1011025,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 7,
          "speed": 7,
          "strength": 7
        }
      }, {
        "name": "Iron Man (Ultimate)",
        "id": 1010935,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 7,
          "speed": 7,
          "strength": 7
        }
      }, {
        "name": "Captain America (Ultimate)",
        "id": 1010913,
        "stats": {
          "durability": 7,
          "energy": 7,
          "fighting": 7,
          "intelligence": 7,
          "speed": 7,
          "strength": 7
        }
      }
    ]
  };
  return hero;
}

var userState = userState();
var hero = loadHeros();
var item = "";

var veryCommon = [];
var common = [];
var uncommon = [];
var limited = [];
var rare = [];
var ultraRare = [];
var characters = [];
var html = document.getElementsByTagName("html")[0];

var intro = 1;

for (i = 0; i < hero.heros.length; i++) {
  var character = hero.heros[i];
  var stats = character.stats;

  // total each heros stats put them into groups based on these stats
  var total = stats.durability +
    stats.energy +
    stats.fighting +
    stats.intelligence +
    stats.speed +
    stats.strength;
  if (total <= 21) {
    veryCommon.push(character.id);
  } else if (total >= 22 && total <= 26) {
    common.push(character.id);
  } else if (total >= 27 && total <= 30) {
    uncommon.push(character.id);
  } else if (total >= 31 && total <= 32) {
    limited.push(character.id);
  } else if (total >= 33 && total <= 41) {
    rare.push(character.id);
  } else {
    ultraRare.push(character.id);
  }
}

// set the chance of getting each type of card
function randomCard() {
  var r = Math.random();
  if (r < 0.5) {
    characters = veryCommon;
  } else if (r < 0.75) {
    characters = common;
  } else if (r < 0.9) {
    characters = uncommon;
  } else if (r < 0.97) {
    characters = limited;
  } else if (r < 0.99) {
    characters = rare;
  } else {
    characters = ultraRare;
  }
  return characters;
}

function buildCard(char, wrapper) {
  markup = "";
  var img = "";
  if (wrapper !== "villain") {
    img = char.img;
  }
  for (var key in char.stats) {
    var value = char.stats[key];
    markup += "<div class='attrib " + key + "' data-val='" + key + "'><span>" + key + ": </span><span>" + value + "</span></div>";
  }
  markup = "<div class='stats-wrapper'>" + markup + "</div>";
  markup = "<div class='" + wrapper + "-wrapper fight-wrapper'>" +
    "<img src='" + img + "' alt='" + char.name + "'>" +
    "<h2>" + char.name + "</h2>" +
    "<span class='score'></span>" + markup + "</div>";
  return markup;
}

function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

function returnStats(heroId, heroType) {

  for (i = 0; i < heroType.length; i++) {
    if (heroType[i].id === heroId) {
      return heroType[i];
    }
  }
}

function updateCardHub(charName) {
  var hubCards = "";
  for (i = 0; i < userState.cards.length; i++) {
    hubCards += '<div class="hub-card"><img src="' + userState.cards[i].img + '" alt="' + userState.cards[i].name + '"></div>';
  }
  html.querySelector(".hub-cards").innerHTML = '<h2>Cards (' + userState.cards.length + ')</h2>' + hubCards;

  // temp intro message
  html.querySelector(".hub-welcome p").innerHTML = "Nice, you've bagged yourself " + charName + "! Why not try out the challenges section? The game is only in Beta but come back soon as you'll be able to earn adamantium coins (the best cryptocurrency) and trade, or take on friends!";
}

var domPacks = html.querySelectorAll(".hub-packs .hub-card");

for (var k = 0; k < domPacks.length; k++) {
  domPacks[k].addEventListener("click", function() {
    if (userState.currency >= 5) {
      html.querySelector(".front").innerHTML = "<img src='" + this.querySelector("img").src + "'>";
      html.classList.add("selected-pack");
      characters = randomCard();
      userState.currency -= 5;
      item = characters[Math.floor(Math.random() * characters.length)];
      fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + item + "?apikey=" + apiKey, function(data) {
        var character = data.data.results[0];
        var charName = character.name;
        var charImg = character.thumbnail.path + "." + character.thumbnail.extension;
        var charCardImg = character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension;

        html.querySelector(".back-card").innerHTML = "<h2>" + charName + "</h2>" +
          "<img src='" + charCardImg + "' alt='" + charName + "'/>";

        var cardStats = returnStats(item, hero.heros);

        cardStats.img = charImg;
        cardStats.cardImg = charCardImg;

        userState.cards.push(cardStats);

        updateCardHub(charName);

        html.querySelector(".hub-cards .hub-card").addEventListener("click", function() {
          var cardMarkup = buildCard(userState.cards[0], "hero");
          html.querySelector(".overlay").innerHTML = cardMarkup + "<div class='close'>Close</div>";
          html.classList.add("fight");
          window.scrollTo(0, 0);
          html.querySelector(".close").addEventListener("click", function(){
            html.classList.remove("fight");
          });
        });

      });
      setTimeout(function() {
        html.querySelector(".container").classList.add("reveal");
        html.querySelector(".hub-section.hub-packs .no").innerHTML = "0";
      }, 500);
    }
  });
}

html.querySelector(".continue-cta").addEventListener("click", function() {
  html.classList.remove("selected-pack");
  html.classList.remove("intro-state");
  html.querySelector(".container").classList.remove("reveal");
});

fight();

function userState() {
  var userState = {
    userId: 1,
    username: "test",
    currency: 5,
    cards: []
  };
  return userState;
}
