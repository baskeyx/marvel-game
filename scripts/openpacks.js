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
  // output card with stats
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
  // fetch json file and convert into js object
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

function buildTempObject(charStarts){
  // build a temporary object to store stats in
  var tempObject = {};
  tempObject.id = charStarts.id;

  // not sure if name is needed here - get name from api call rather than entered
  tempObject.name = charStarts.name;
  tempObject.stats = {};

  for (var key in charStarts.stats) {
    var value = charStarts.stats[key];
    tempObject.stats[key] = value;
  }
  return tempObject;
}

function returnStats(heroId, heroType) {
  // return stats from internal js object
  for (i = 0; i < heroType.length; i++) {
    if (heroType[i].id === heroId) {
      var tempBuild = buildTempObject(heroType[i]);
      return tempBuild;
    }
  }
}

function updateCardHub(charName) {
  // update card hub once a new card has been received
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
    window.scrollTo(0, 0);
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
        cardStats.name = character.name;

        userState.cards = [];
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
