const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

const missed_guesses = 0;

const phrases = ["I love JS", "My Name is Nermeen", "I am a coder", "I try to learn", "Coding is fun"];
btnReset.addEventListener("click", () => {
    overlay.style.display = "none";
});
//creating the stub function//
function getRandomPhraseAsArray(arr) {
    const selectedNumber = Math.floor(Math.random() * arr.length);
    return arr[selectedNumber];
};
let randomPhrase = getRandomPhraseAsArray(phrases);


/**
 * Create list item for each character and attach it
 * to the UL element
 * for input [' ', 'M', ' ']
 * 
 * Generate:
 * <ul>
 *      <li class="space">" "</li>
 *      <li class="letter">M</li>
 *      <li class="space">" "</li>
 * </ul>
 * @param {Array} arr [' ', 'M', ' '] 
 */
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        const ul = document.getElementsByTagName("ul")[0];
        ul.appendChild(li);
        if (arr[i] === " ") {
            li.className = "space";
        } else {
            li.className = "letter";
        }
    };
};
addPhraseToDisplay(randomPhrase);

function checkLetter(button) {

    let li = document.querySelectorAll("li");
    let match;

    for (let i = 0; i < li.length; i++) {
        if (button.textContent === li[i].textContent) {
            li.className = "show";
            match = button.textContent;
        }
    };
    return match;

};