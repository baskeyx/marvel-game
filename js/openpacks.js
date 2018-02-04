var item = "";
var characters = [];

function randomCard(){
  var r = Math.random();
  if (r < 0.5){
    characters = [
      1009338, // hawkeye
      1009189, // black widow
      1009629, // storm
      1009313, // gambit
      1009175, // beast
      1009257, // cyclops
      1009472, // nightcrawler
      1009524, // quicksilver
      1009546, // rogue
      1010763, // gamora
      1009707, // wasp
      1010991, // war machine
      1009562, // scarlet witch
      1009508, // kitty
      1009362 // iceman
    ]; // very common
  }
  else if (r < 0.75){
    characters = [
      1010735, //drax
      1010744, // rocket racoon
      1010743, // groot
      1009662, // thing
      1010740, // winter soldier
      1011338, // angel ultimate
      1009515, // the punisher
      1009243, // colossus
      1009337 // havok
    ]; // common
  }
  else if (r < 0.9){
    characters = [
      1010801, // ant man
      1009327, // jean grey - v1
      1009318, // ghost rider
      1009366, // invisible women
      1009459, // mr fantastic
      1009159, // archangel
      1009697, // vision
      1009512, // psylocke
      1009610// spiderman
    ]; // uncommon
  }
  else if (r < 0.97){
    characters = [
      1009191, // blade
      1009187, // black panther
      1009356, // human torch
      1009351, // hulk
      1009368, // iron man
      1009220, // captain america
      1011010 // spiderman ultimate
    ]; // limited
  }
  else if (r < 0.99){
    characters = [
      1010733, // star lord
      1009718, // wolverine
      1009664, // thor
      1009262, // daredevil
      1009282 // doctor strange
    ]; // rare
  }
  else {
    characters = [
      1009592, // silver surfer
      1009268, // deadpool
      1009504, // professor X
      1009496, // jean grey v2
      1010919 // daredevil ultimate
    ]; // ultra rare
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

var domPacks = document.querySelectorAll(".pack");
for (k=0;k<domPacks.length;k++){
  domPacks[k].addEventListener("click", function(){
    if (this.className.indexOf("selected")<0){
      this.classList.add("selected");
      var selectedPack = this.dataset.pack;
      document.querySelector(".packs").classList.add("selected-pack");
      randomCard();
      item = characters[Math.floor(Math.random() * characters.length)];
      fetchJSONFile("https://gateway.marvel.com:443/v1/public/characters/" + item + "?apikey=" + apiKey, function(data){
        var character = data.data.results[0];
        document.querySelector("." + selectedPack + " .pack-reverse").innerHTML = "<h2>" + character.name + "</h2>" +
        "<img src='" + character.thumbnail.path + "/portrait_uncanny." + character.thumbnail.extension + "' alt='" + character.name + "'/>";
      });
    }
  });
}
