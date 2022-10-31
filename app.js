const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn_reset");
const overlay = document.getElementById("overlay");

const missed_guesses = 0;

const phrases = ["L", " M ", " A", " E", " K"];
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});
//creating the stub function//
function stub() {
    const randomNumber = phrases.length;
};
