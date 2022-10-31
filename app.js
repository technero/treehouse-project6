const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

const missed_guesses = 0;

const phrases = ["L", " M ", " A", " E", " K"];
btnReset.addEventListener("click", () => {
    overlay.style.display = "none";
});
//creating the stub function//
function getRandomPhraseAsArray(arr) {
    const selectedNumber = Math.floor(Math.random() * arr.length);
    return arr[selectedNumber];
};

getRandomPhraseAsArray(phrases);



function addPhraseToDisplay() {

    for (let i = 0; i < phrases[0].length; i++) {


    };


};