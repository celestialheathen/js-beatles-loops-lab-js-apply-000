const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const playlists = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    let song = `${musicians[i]} plays ${instruments[i]}`;
    playlists.push(song);
  }
  return playlists;
}

// Second problem
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

const newFacts = [];

function johnLennonFacts(facts) {
    let i = 0;
    let fact;
    while (i < facts.length) {
        fact = `${facts[i]}!!!`;
        i++;
        newFacts.push(fact);
    } 
    return newFacts;
  }

johnLennonFacts(["While on tour, he enjoyed playing Monopoly",
        "Harmonica was the first instrument Lennon learned to play",])

  //Third problem
  let testaments = [];
  function iLovetheBeatles(num) {
    let i = 15 - num;
    do {
      let testament = "I love the Beatles!\n";
      testaments.push(testament);
      i++;
    } 
    while (i < 15);
  }

iLovetheBeatles(10);