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
    "objective",
    "mechanism",
    "broadcast",
    "conductor",
    "heightened",
    "rebellious",
    "behaviour",
    "paralyzed",
    "dimension",
    "machinery",
    "available",
    "courtship",
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
let hintButton = document.getElementById("hint");
let score = document.getElementById("score");
let wordCount = document.getElementById("wordCount");
let time = document.getElementById("time");
let input1 = document.getElementById("1");
let input2 = document.getElementById("2");
let input3 = document.getElementById("3");
let input4 = document.getElementById("4");
let input5 = document.getElementById("5");
let input6 = document.getElementById("6");
let input7 = document.getElementById("7");
let input8 = document.getElementById("8");
let input9 = document.getElementById("9");
let image = document.getElementById("gallows");

var imageCount = 1;
var wordCounter = 0;
var word = "";
var time_left = time.textContent;
var charCount = 0;
var scoreCount = 0;

//Add event listeners
startButton.addEventListener("click", playGame);
hintButton.addEventListener("click", showHint);
keyA.addEventListener("click", validateKeyA);
keyB.addEventListener("click", validateKeyB);
keyC.addEventListener("click", validateKeyC);
keyD.addEventListener("click", validateKeyD);
keyE.addEventListener("click", validateKeyE);
keyF.addEventListener("click", validateKeyF);
keyG.addEventListener("click", validateKeyG);
keyH.addEventListener("click", validateKeyH);
keyI.addEventListener("click", validateKeyI);
keyJ.addEventListener("click", validateKeyJ);
keyK.addEventListener("click", validateKeyK);
keyL.addEventListener("click", validateKeyL);
keyM.addEventListener("click", validateKeyM);
keyN.addEventListener("click", validateKeyN);
keyO.addEventListener("click", validateKeyO);
keyP.addEventListener("click", validateKeyP);
keyQ.addEventListener("click", validateKeyQ);
keyR.addEventListener("click", validateKeyR);
keyS.addEventListener("click", validateKeyS);
keyT.addEventListener("click", validateKeyT);
keyU.addEventListener("click", validateKeyU);
keyV.addEventListener("click", validateKeyV);
keyW.addEventListener("click", validateKeyW);
keyX.addEventListener("click", validateKeyX);
keyY.addEventListener("click", validateKeyY);
keyZ.addEventListener("click", validateKeyZ);

function playGame() {
    if (startButton.value) {
        //Disable button so user doesnt keep starting the game
        startButton.disabled = true;
        //Get word
        word = getWord();
            
        console.log(word);
        wordCounter++;
        clockAudio.play();

        //start the counter
        var showTime = setInterval(function() {
            if (time_left <= 0 || imageCount == 7) {
                clearInterval(showTime);
                clockAudio.pause();
                failAudio.pause();
                successAudio.pause();
                overAudio.play();
                startButton.disabled = false;
            }

            time.textContent = time_left;
            time_left--;
        }, 1000);
    }
    wordCount.textContent = wordCounter;
    score.textContent = scoreCount;
}

function getWord() {
  return reserved_words[Math.floor(Math.random() * (reserved_words.length - 1))];
}

//Validate that the guesses made by the user are correct
function validateKeyA() {
    if (keyB.value) {
        if (!word.includes("a")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "a") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyA.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyB() {
    if (keyB.value) {
        if (!word.includes("b")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "b") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyB.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyC() {
    if (keyC.value) {
        if (!word.includes("c")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "c") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyC.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyD() {
    if (keyD.value) {
        if (!word.includes("d")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "d") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyD.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyE() {
    if (keyE.value) {
        if (!word.includes("e")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "e") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyE.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyF() {
    if (keyF.value) {
        if (!word.includes("f")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "f") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyF.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyG() {
    if (keyG.value) {
        if (!word.includes("g")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "g") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyG.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyH() {
    if (keyH.value) {
        if (!word.includes("h")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "h") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyH.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyI() {
    if (keyI.value) {
        if (!word.includes("i")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "i") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyI.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyJ() {
    if (keyJ.value) {
        if (!word.includes("j")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "j") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyJ.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyK() {
    if (keyK.value) {
        if (!word.includes("k")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "k") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyK.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyL() {
    if (keyL.value) {
        if (!word.includes("l")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "l") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyL.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyM() {
    if (keyM.value) {
        if (!word.includes("m")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "m") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyM.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyN() {
    if (keyN.value) {
        if (!word.includes("n")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "n") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyN.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyO() {
    if (keyO.value) {
        if (!word.includes("o")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "o") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyO.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyP() {
    if (keyP.value) {
        if (!word.includes("p")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "p") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyP.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyQ() {
    if (keyQ.value) {
        if (!word.includes("q")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "q") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyQ.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyR() {
    if (keyR.value) {
        if (!word.includes("r")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "r") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyR.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyS() {
    if (keyS.value) {
        if (!word.includes("s")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "s") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyS.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyT() {
    if (keyT.value) {
        if (!word.includes("t")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "t") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyT.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyU() {
    if (keyU.value) {
        if (!word.includes("u")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "u") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyU.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyV() {
    if (keyV.value) {
        if (!word.includes("v")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "v") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyV.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyW() {
    if (keyW.value) {
        if (!word.includes("w")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "w") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyW.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyX() {
    if (keyX.value) {
        if (!word.includes("x")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "x") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyX.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyY() {
    if (keyY.value) {
        if (!word.includes("y")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "y") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyY.value;
                    charCount++;
                }
            }
        }
    }
}

function validateKeyZ() {
    if (keyZ.value) {
        if (!word.includes("z")) {
            clockAudio.pause();
            successAudio.pause();
            failAudio.play();
            if (imageCount <= 7) {
                imageCount++;
                image.src = "../Images/" + imageCount + ".png";
            } else {
                overAudio.play();
                time.textContent = 0;
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == "z") {
                    clockAudio.pause();
                    failAudio.pause();
                    successAudio.play();
                    document.getElementById(i.toString()).value = keyZ.value;
                    charCount++;
                }
            }
        }
    }
}

function showHint() {
  for(var i = 0; i < 9; i++) {
    if(document.getElementById(i.toString()).value == null || document.getElementById(i.toString()).value == "") {
      document.getElementById(i.toString()).value = word[i];
      break;
    }
  }
}