var lettersGuessed = "";
var guessesRemaining = 13;
var phobias = [
  { phobia: "achluophobia", fear: "darkness" },
  { phobia: "acrophobia", fear: "heights"},
  { phobia: "aerophobia", fear: "flying" },
  { phobia: "algophobia", fear: "pain" },
  { phobia: "alektorophobia", fear: "chickens" },
  { phobia: "agoraphobia", fear: "public spaces or crowds" },
  { phobia: "aichmophobia", fear: "needles or pointed objects" },
  { phobia: "amaxophobia", fear: "riding in a car" },
  { phobia: "androphobia", fear: "men" },
  { phobia: "anthophobia", fear: "flowers" },
  { phobia: "anthropophobia", fear: "people or society" },
  { phobia: "aphenphosmphobia", fear: "being touched" },
  { phobia: "arachnophobia", fear: "spiders" },
  { phobia: "arithmophobia", fear: "numbers" },
  { phobia: "astraphobia", fear: "thunder and lightning" },
  { phobia: "ataxophobia", fear: "disorder or untidiness" },
  { phobia: "atelophobia", fear: "imperfection" },
  { phobia: "atychiphobia", fear: "failure" },
  { phobia: "autophobia", fear: "being alone" },
  { phobia: "bacteriophobia", fear: "bacteria" },
  { phobia: "barophobia", fear: "gravity" },
  { phobia: "bathmophobia", fear: "stairs or steep slopes" },
  { phobia: "batrachophobia", fear: "amphibians" },
  { phobia: "belonephobia", fear: "pins and needles" },
  { phobia: "bibliophobia", fear: "books" },
  { phobia: "botanophobia", fear: "plants" },
  { phobia: "cacophobia", fear: "ugliness" },
  { phobia: "catagelophobia", fear: "being ridiculed" },
  { phobia: "catoptrophobia", fear: "mirrors" },
  { phobia: "chionophobia", fear: "snow" },
  { phobia: "chromophobia", fear: "colors" },
  { phobia: "chronomentrophobia", fear: "clocks" },
  { phobia: "claustrophobia", fear: "confined spaces" },
  { phobia: "coulrophobia", fear: "clowns" },
  { phobia: "cyberphobia", fear: "computers" },
  { phobia: "cynophobia", fear: "dogs" },
  { phobia: "dendrophobia", fear: "trees" },
  { phobia: "dentophobia", fear: "dentists" },
  { phobia: "domatophobia", fear: "houses" },
  { phobia: "dystychiphobia", fear: "accidents" },
  { phobia: "ecophobia", fear: "the home" },
  { phobia: "elurophobia", fear: "cats" },
  { phobia: "entomophobia", fear: "insects" },
  { phobia: "ephebiphobia", fear: "teenagers" },
  { phobia: "equinophobia", fear: "horses" },
  { phobia: "gamophobia", fear: "marriage" },
  { phobia: "genuphobia", fear: "knees" },
  { phobia: "glossophobia", fear: "speaking in public" },
  { phobia: "gynophobia", fear: "women" },
  { phobia: "heliophobia", fear: "the sun" },
  { phobia: "hemophobia", fear: "blood" },
  { phobia: "herpetophobia", fear: "reptiles" },
  { phobia: "hydrophobia", fear: "water" },
  { phobia: "iatrophobia", fear: "doctors" },
  { phobia: "insectophobia", fear: "insects" },
  { phobia: "koinoniphobia", fear: "rooms full of people" },
  { phobia: "leukophobia", fear: "the color white" },
  { phobia: "lilapsophobia", fear: "tornadoes and hurricanes" },
  { phobia: "lockiophobia", fear: "childbirth" },
  { phobia: "mageirocophobia", fear: "cooking" },
  { phobia: "megalophobia", fear: "large things" },
  { phobia: "melanophobia", fear: "the color black" },
  { phobia: "microphobia", fear: "small things" },
  { phobia: "mysophobia", fear: "dirt and gems" },
  { phobia: "necrophobia", fear: "death or dead things" },
  { phobia: "noctiphobia", fear: "night" },
  { phobia: "nosocomephobia", fear: "hospitals" },
  { phobia: "nyctophobia", fear: "the dark" },
  { phobia: "obesophobia", fear: "gaining weight" },
  { phobia: "octophobia", fear: "the figure 8" },
  { phobia: "ophidiophobia", fear: "snakes" },
  { phobia: "ornithophobia", fear: "birds" },
  { phobia: "papyrophobia", fear: "paper" },
  { phobia: "pathophobia", fear: "disease" },
  { phobia: "pedophobia", fear: "children" },
  { phobia: "philophobia", fear: "love" },
  { phobia: "phobophobia", fear: "phobias" },
  { phobia: "podophobia", fear: "feet" },
  { phobia: "pogonophobia", fear: "beards" },
  { phobia: "porphyrophobia", fear: "the color purple" },
  { phobia: "pteridophobia", fear: "ferns" },
  { phobia: "pteromerhanophobia", fear: "flying" },
  { phobia: "pyrophobia", fear: "fire" },
  { phobia: "samhainophobia", fear: "Halloween" },
  { phobia: "scolionophobia", fear: "school" },
  { phobia: "selenophobia", fear: "the moon" },
  { phobia: "sociophobia", fear: "social evaluation" },
  { phobia: "somniphobia", fear: "sleep" },
  { phobia: "tachophobia", fear: "speed" },
  { phobia: "technophobia", fear: "technology" },
  { phobia: "tonitrophobia", fear: "thunder" },
  { phobia: "trypanophobia", fear: "needles or injections" },
  { phobia: "venustraphobia", fear: "beautiful women" },
  { phobia: "verminophobia", fear: "gems" },
  { phobia: "wiccaphobia", fear: "witches and witchcraft" },
  { phobia: "xenophobia", fear: "strangers or foreigners" },
  { phobia: "zoophobia", fear: "animals" },
];
var phobia = "";
var fear = "";

// Determine what word the user is guessing
function mysteryWord() {
  var temp = Math.floor(Math.random() * 97);
  console.log(phobias[temp]);
  phobia = phobias[temp].phobia;
  fear = phobias[temp].fear;
  displayMysteryWord();
  return phobia;
}
mysteryWord();

// Handle a user making a guess
document.onkeypress = function(e) {
  if (isLetter(e.keyCode)) {
    var guess = e.key.toLowerCase();
    if (!letterGuessed(guess)) {
      document.getElementById("LettersGuessed").innerText = "Letters Guessed: " + e.key;
      if (correct(guess)) {
        displayMysteryWord();
        if (document.getElementById("MysteryWord").innerText === phobia) gameover(true);
      }
      else {
        guessesRemaining--;
        document.getElementById("GuessesRemaining").innerText = "Guesses Remaining: " + guessesRemaining;
        if (guessesRemaining === 0) gameover(false);
      }
    } else console.log("letter previously guessed");
  } else console.log("nonalpha key pressed");
};

// Is the key that has been pressed a letter?
function isLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) return true;
  if (keyCode >= 97 && keyCode <= 122) return true;
  return false;
}

// Has the letter guessed been guessed previously?
function letterGuessed(guess) {
  if (lettersGuessed.includes(guess)) return true;
  else {
    lettersGuessed += guess;
    return false;  
  }
}

function correct(guess) {
  if (phobia.substring(0, phobia.length - 6).includes(guess)) return true;
  else {
    console.log(phobia.substring(0, phobia.length - 6) + " " + guess)
    return false;
  }
}

function displayMysteryWord() {
  var s = "";
  for (var i = 0; i < phobia.length - 6; i++) {
    if (lettersGuessed.includes(phobia[i])) s += phobia[i];
    else s += " - "
  }
  s += "phobia"
  document.getElementById("MysteryWord").innerText = s;
}

function gameover(won) {
  if (won) {
    alert("Congadulations! You win!");
  }
  else {
    alert("Better luck next time!");
  }
}