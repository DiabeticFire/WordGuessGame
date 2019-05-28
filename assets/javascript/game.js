var lettersGuessed = "";
var guessesRemaining = 13;
var phobias = [
  { phobia: "Achluophobia", fear: "darkness" },
  { phobia: "Algophobia", fear: "pain" },
  { phobia: "Aphenphosmphobia", fear: "being touched" },
  { phobia: "Arithmophobia", fear: "numbers" },
  { phobia: "Atelophobia", fear: imperfection },
  { phobia: "Barophobia", fear: gravity },
  { phobia: "Chionophobia", fear: snow },
  { phobia: "Dendrophobia", fear: trees },
  { phobia: "Ephebiphobia", fear: teenagers },
  { phobia: "Achluophobia", fear: darkness },
  { phobia: "Iatrophobia", fear: doctors },
  { phobia: "Leukophobia", fear: "the color white" },
  { phobia: Mysophobia, fear: "dirt and gems" },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness },
  { phobia: Achluophobia, fear: darkness }
];

document.onkeypress = function(e) {
  if (isLetter(e.keyCode)) {
    var guess = e.key.toLowerCase();
    if (!letterGuessed(guess)) {
      document.getElementById("LettersGuessed").innerText += e.key;
    } else console.log("letter previously guessed");
  } else console.log("nonalpha key pressed");
};

// Is the key that has been pressed a letter?
function isLetter(keyCode) {
  if (keyCode >= "a".keyCode && keyCode <= 90) return true;
  if (keyCode >= 97 && keyCode <= 112) return true;
  return false;
}

// Has the letter guessed been guessed previously?
function letterGuessed(guess) {
  lettersGuessed.foreach(function(letter) {
    if (guess === letter) return true;
  });
  letterGuessed += guess;
  return false;
}
