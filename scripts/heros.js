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
      }, {
        "name": "Bishop",
        "id": 1009182,
        "stats": {
          "durability": 4,
          "energy": 7,
          "fighting": 5,
          "intelligence": 4,
          "speed": 2,
          "strength": 3
        }
      }, {
        "name": "Elektra",
        "id": 1009288,
        "stats": {
          "durability": 2,
          "energy": 1,
          "fighting": 6,
          "intelligence": 3,
          "speed": 3,
          "strength": 3
        }
      }, {
        "name": "Elektra (Ultimate)",
        "id": 1010923,
        "stats": {
          "durability": 2,
          "energy": 3,
          "fighting": 7,
          "intelligence": 4,
          "speed": 6,
          "strength": 4
        }
      }
    ]
  };
  return hero;
}
