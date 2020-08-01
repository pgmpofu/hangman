/* @author Patience Mpofu
 * @date 27 July 2020
 * hangman.js
 * A simple game of hangman
 */

//Data store for words to use as a backup in case we cannot reach Words API
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var reserved_words = [
  "exemption",
  "housewife",
  "vegetable",
  "mathematics",
  "mechanism",
  "broadcast",
  "heavenly",
  "heightened",
  "rebellious",
  "behaviour",
];

//Find keyboard elements
let keyA = document.getElementById("A");
let keyB = document.getElementById("B");
let keyC = document.getElementById("C");
let keyD = document.getElementById("D");
let keyE = document.getElementById("E");
let keyF = document.getElementById("F");
let keyG = document.getElementById("G");
let keyH = document.getElementById("H");
let keyI = document.getElementById("I");
let keyJ = document.getElementById("J");
let keyK = document.getElementById("K");
let keyL = document.getElementById("L");
let keyM = document.getElementById("M");
let keyN = document.getElementById("N");
let keyO = document.getElementById("O");
let keyP = document.getElementById("P");
let keyQ = document.getElementById("Q");
let keyR = document.getElementById("R");
let keyS = document.getElementById("S");
let keyT = document.getElementById("T");
let keyU = document.getElementById("U");
let keyV = document.getElementById("V");
let keyW = document.getElementById("W");
let keyX = document.getElementById("X");
let keyY = document.getElementById("Y");
let keyZ = document.getElementById("Z");

//Find audio clips
var clockAudio = new Audio("Media/Audio/ticking.mp3");
var failAudio = new Audio("Media/Audio/fail.mp3");
var overAudio = new Audio("Media/Audio/over.mp3");
var successAudio = new Audio("Media/Audio/success.mp3");

//Variables to manipulate
let startButton = document.getElementById("start");
let score = document.getElementById("score");
let wordCount = document.getElementById("wordCount");
let time = document.getElementById("time");
let inputBox = document.getElementById("word_input");
var word = null;

//Add event listeners
startButton.addEventListener("click", playGame);
keyA.addEventListener("click", validateGuess);
keyB.addEventListener("click", validateGuess);
keyC.addEventListener("click", validateGuess);
keyD.addEventListener("click", validateGuess);
keyE.addEventListener("click", validateGuess);
keyF.addEventListener("click", validateGuess);
keyH.addEventListener("click", validateGuess);
keyI.addEventListener("click", validateGuess);
keyJ.addEventListener("click", validateGuess);
keyK.addEventListener("click", validateGuess);
keyL.addEventListener("click", validateGuess);
keyM.addEventListener("click", validateGuess);
keyN.addEventListener("click", validateGuess);
keyO.addEventListener("click", validateGuess);
keyP.addEventListener("click", validateGuess);
keyQ.addEventListener("click", validateGuess);
keyR.addEventListener("click", validateGuess);
keyS.addEventListener("click", validateGuess);
keyT.addEventListener("click", validateGuess);
keyU.addEventListener("click", validateGuess);
keyV.addEventListener("click", validateGuess);
keyW.addEventListener("click", validateGuess);
keyX.addEventListener("click", validateGuess);
keyY.addEventListener("click", validateGuess);
keyZ.addEventListener("click", validateGuess);

//setting to retrieve word from words API
var settings = {
  async: false,
  crossDomain: true,
  url: "https://wordsapiv1.p.rapidapi.com/words/?random=true",
  method: "GET",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "cfa6f87107mshd25f9d50ca8d5afp1982f8jsndff3b4de248d",
  },
};

function playGame() {
  if (startButton.value) {
    //Focus on the input box
    inputBox.focus();
    //Play ticking sound
    while (time.textContent != 0) {
      if (clockAudio.paused) {
        clockAudio.play();
      }
    }
    startButton.disabled = true;

    //Get word from words API
    $.ajax(settings).done(function (response) {
      word = response["word"];
    });

    //validate word meets our requirements
    validateWord(word);

    //start a time to check time left to end game
    var time_left = time.textContent;
    var showTime = setInterval(function () {
      console.log(time_left);
      if (time_left == 0) {
        clearInterval(showTime);
      }
      time.textContent = time_left;
      time_left--;
    }, 1000);
  }
}

//Choose a random word between 0 and length of data store and use instead
//Exclude words with a space or hyphen or less than 9 to make the game more interesting
function validateWord(word) {
  if (
    word == "" ||
    word.indexOf(" ") != -1 ||
    word.indexOf("-") != -1 ||
    word.length != 9
  ) {
    word =
      reserved_words[Math.floor(Math.random() * (reserved_words.length - 1))];
  }
  console.log(word);
}

//Check input against guess word
function validateGuess() {
  var newWord = [];
  validateKeyA(newWord);
  validateKeyB(newWord);
  validateKeyC(newWord);
  validateKeyD(newWord);
  validateKeyE(newWord);
  validateKeyF(newWord);
  validateKeyG(newWord);
  validateKeyH(newWord);
  validateKeyI(newWord);
  validateKeyJ(newWord);
  validateKeyK(newWord);
  validateKeyL(newWord);
  validateKeyM(newWord);
  validateKeyN(newWord);
  validateKeyO(newWord);
  validateKeyP(newWord);
  validateKeyQ(newWord);
  validateKeyR(newWord);
  validateKeyS(newWord);
  validateKeyT(newWord);
  validateKeyU(newWord);
  validateKeyV(newWord);
  validateKeyW(newWord);
  validateKeyX(newWord);
  validateKeyY(newWord);
  validateKeyZ(newWord);
  newWord = newWord.join(" ");
  inputBox.value = newWord;
}

function validateKeyA(newWord) {
  if (keyA.value) {
    if (word.includes(keyA.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyA.value.toLowerCase()) {
          newWord.push(keyA.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          failAudio.play();
          newWord.push("_");
        }
      }
    }
  }
}

function validateKeyB(newWord) {
  if (keyB.value) {
    if (word.includes(keyB.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyB.value.toLowerCase()) {
          newWord.push(keyB.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyC(newWord) {
  if (keyC.value) {
    if (word.includes(keyC.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyC.value.toLowerCase()) {
          newWord.push(keyC.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyD(newWord) {
  if (keyD.value) {
    if (word.includes(keyD.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyD.value.toLowerCase()) {
          newWord.push(keyD.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyE(newWord) {
  if (keyE.value) {
    if (word.includes(keyE.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyE.value.toLowerCase()) {
          newWord.push(keyE.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyF(newWord) {
  if (keyF.value) {
    if (word.includes(keyF.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyF.value.toLowerCase()) {
          newWord.push(keyF.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyG(newWord) {
  if (keyG.value) {
    if (word.includes(keyG.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyG.value.toLowerCase()) {
          newWord.push(keyG.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyH(newWord) {
  if (keyH.value) {
    if (word.includes(keyH.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        successAudio.play();
        if (word[i] == keyH.value.toLowerCase()) {
          newWord.push(keyH.value);
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyI(newWord) {
  if (keyI.value) {
    if (word.includes(keyI.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyI.value.toLowerCase()) {
          newWord.push(keyI.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyJ(newWord) {
  if (keyJ.value) {
    if (word.includes(keyJ.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyJ.value.toLowerCase()) {
          newWord.push(keyJ.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyK(newWord) {
  if (keyK.value) {
    if (word.includes(keyK.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyK.value.toLowerCase()) {
          newWord.push(keyK.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyL(newWord) {
  if (keyL.value) {
    if (word.includes(keyL.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyL.value.toLowerCase()) {
          newWord.push(keyL.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyM(newWord) {
  if (keyM.value) {
    if (word.includes(keyM.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyM.value.toLowerCase()) {
          newWord.push(keyM.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyN(newWord) {
  if (keyN.value) {
    if (word.includes(keyN.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyN.value.toLowerCase()) {
          newWord.push(keyN.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyO(newWord) {
  if (keyO.value) {
    if (word.includes(keyO.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyO.value.toLowerCase()) {
          newWord.push(keyO.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyP(newWord) {
  if (keyP.value) {
    if (word.includes(keyP.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyP.value.toLowerCase()) {
          newWord.push(keyP.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyQ(newWord) {
  if (keyQ.value) {
    if (word.includes(keyQ.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyQ.value.toLowerCase()) {
          newWord.push(keyQ.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyR(newWord) {
  if (keyR.value) {
    if (word.includes(keyR.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyR.value.toLowerCase()) {
          newWord.push(keyR.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyS(newWord) {
  if (keyS.value) {
    if (word.includes(keyS.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyS.value.toLowerCase()) {
          newWord.push(keyS.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyT(newWord) {
  if (keyT.value) {
    if (word.includes(keyT.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyT.value.toLowerCase()) {
          newWord.push(keyT.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyU(newWord) {
  if (keyU.value) {
    if (word.includes(keyU.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyU.value.toLowerCase()) {
          newWord.push(keyU.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyV(newWord) {
  if (keyV.value) {
    if (word.includes(keyV.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyV.value.toLowerCase()) {
          newWord.push(keyV.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyW(newWord) {
  if (keyW.value) {
    if (word.includes(keyW.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyW.value.toLowerCase()) {
          newWord.push(keyW.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyX(newWord) {
  if (keyX.value) {
    if (word.includes(keyX.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyX.value.toLowerCase()) {
          newWord.push(keyX.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyY(newWord) {
  if (keyY.value) {
    if (word.includes(keyY.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyY.value.toLowerCase()) {
          newWord.push(keyY.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}

function validateKeyZ(newWord) {
  if (keyZ.value) {
    if (word.includes(keyZ.value.toLowerCase())) {
      for (var i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == keyZ.value.toLowerCase()) {
          newWord.push(keyZ.value);
          successAudio.play();
        } else if (!alphabet.includes(word[i])) {
          newWord.push("_");
          failAudio.play();
        }
      }
    }
  }
}
