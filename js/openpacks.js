var item = "";
var veryCommon = [];
var common = [];
var uncommon = [];
var limited = [];
var rare = [];
var ultraRare = [];
var characters = []

for (i = 0; i < hero.heros.length; i++) {
  var character = hero.heros[i];
  var stats = character.stats;
  var total = stats.durability +
    stats.energy +
    stats.fighting +
    stats.intelligence +
    stats.speed +
    stats.strength;
  if (total <= 21) {
    veryCommon.push(character.id);
  }
  else if (total >= 22 && total <= 26){
    common.push(character.id);
  }
  else if (total >= 27 && total <= 30){
    uncommon.push(character.id);
  }
  else if (total >= 31 && total <= 32){
    limited.push(character.id);
  }
  else if (total >= 33 && total <= 41){
    rare.push(character.id);
  }
  else{
    ultraRare.push(character.id);
  }
}

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

var domPacks = document.querySelectorAll(".container");
for (k = 0; k < domPacks.length; k++) {
  domPacks[k].addEventListener("click", function() {
    if (this.className.indexOf("selected") < 0) {
      this.classList.add("selected");
      var selectedPack = this.dataset.pack;
      document.querySelector("html").classList.add("selected-pack");
      randomCard();
      item = characters[Math.floor(Math.random() * characters.length)];
      fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + item + "?apikey=" + apiKey, function(data) {
        var character = data.data.results[0];
        document.querySelector("." + selectedPack + " .back").innerHTML = "<h2>" + character.name + "</h2>" +
          "<img src='" + character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension + "' alt='" + character.name + "'/>";
      });
      setTimeout(function() {
        document.querySelector(".packs").classList.add("reveal");
      }, 500);

    }
  });
}
