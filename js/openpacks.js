var item = "";
var veryCommon = [];
var common = [];
var uncommon = [];
var limited = [];
var rare = [];
var ultraRare = [];
var characters = [];
var html = document.getElementsByTagName("html")[0];

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

// user selects a pack
var domPacks = document.querySelectorAll(".hub-packs .hub-card");
for (var k = 0; k < domPacks.length; k++) {
  domPacks[k].addEventListener("click", function() {
    if (this.className.indexOf("disabled") < 0) {
      // for (var j = 0; j < domPacks.length; j++) {
      //   domPacks[j].classList.add("disabled");
      // }
      html.querySelector(".front").innerHTML = "<img src='" + this.querySelector("img").src + "'>";
      html.classList.add("selected-pack");
      characters = randomCard();
      item = characters[Math.floor(Math.random() * characters.length)];
      fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + item + "?apikey=" + apiKey, function(data) {

        var character = data.data.results[0];
        var charName = character.name;
        var charImg = character.thumbnail.path + "." + character.thumbnail.extension;
        var charCardImg = character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension;

        html.querySelector(".back-card").innerHTML = "<h2>" + charName + "</h2>" +
          "<img src='" + charCardImg + "' alt='" + charName + "'/>";

        cardStats = hero.heros.filter(function( obj ) {
          return obj.id == item;
        });

        // push card to user state

        cardStats[0].name = charName;
        cardStats[0].img = charImg;
        cardStats[0].cardImg = charCardImg;

        userState.cards.push(cardStats[0]);

        // update hub with user cardStats
        var hubCards = "";
        for(i=0;i<userState.cards.length;i++){
          hubCards += '<div class="hub-card"><img src="' + userState.cards[i].img + '" alt="'+userState.cards[i].name+'"></div>';
        }

        html.querySelector(".hub-cards").innerHTML = '<h2>Cards ('+ userState.cards.length +')</h2>' + hubCards;

        html.querySelector(".hub-welcome p").innerHTML = "Nice, you've bagged yourself " + charName + "! The game is only in beta but check back soon as you'll be able to take part in challenges, earn adamantium coins (the best cryptocurrency) and trade, or take on friends!";

      });

      setTimeout(function() {
        html.querySelector(".container").classList.add("reveal");
        html.querySelector(".hub-section.hub-packs .no").innerHTML = "0";



      }, 500);
    }
  });
}

html.querySelector(".continue-cta").addEventListener("click", function(){
  html.classList.remove("selected-pack");
  html.classList.remove("intro-state");
  html.querySelector(".container").classList.remove("reveal");
});
