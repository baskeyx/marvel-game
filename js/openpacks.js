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
      for (var j = 0; j < domPacks.length; j++) {
        domPacks[j].classList.add("disabled");
      }
      html.querySelector(".front").innerHTML = "<img src='" + this.querySelector("img").src + "'>";
      html.classList.add("selected-pack");
      characters = randomCard();
      item = characters[Math.floor(Math.random() * characters.length)];
      fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + item + "?apikey=" + apiKey, function(data) {
        var character = data.data.results[0];
        html.querySelector(".back-card").innerHTML = "<h2>" + character.name + "</h2>" +
          "<img src='" + character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension + "' alt='" + character.name + "'/>";
      });
      setTimeout(function() {
        html.querySelector(".container").classList.add("reveal");
        html.querySelector(".hub-section.hub-packs .no").innerHTML = "0";
        heroStats = hero.heros.filter(function( obj ) {
          return obj.id == item;
        });
        userState.cards.push(heroStats);
      }, 500);
    }
  });
}

html.querySelector(".continue-cta").addEventListener("click", function(){
  html.classList.remove("selected-pack");
  html.classList.remove("intro-state");
});
