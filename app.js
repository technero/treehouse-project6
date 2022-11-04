const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

let missed_guesses = 0;

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
    const ul = document.getElementsByTagName("ul")[0];
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
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
    let match = "";

    for (let i = 0; i < li.length; i++) {
        if (button.textContent === li[i].textContent.toLocaleLowerCase()) {
            li[i].classList.add("show");
            match = button.textContent;
        }
    };
    return match;
};

qwerty.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "button" &&
        e.target.className !== "chosen") {
        e.target.className = "chosen";
        let letter = checkLetter(e.target);
        if (letter === "") {
            document.getElementsByTagName("img")[missed_guesses].src = "images/lostHeart.png";
            missed_guesses++;
        }
        checkWin();

    }
});

function checkWin() {
    let letter = document.querySelectorAll(".letter");
    let show = document.querySelectorAll(".show");
    if (letter.length === show.length) {
        overlay.className = "win";
        overlay.querySelector(".title").textContent = "You Won!";
        overlay.style.display = "flex";
    }
    if (missed_guesses > 4) {

        overlay.className = "lose";
        overlay.querySelector(".title").textContent = "Try Again!";
        overlay.style.display = "flex";
    }

};

btnReset.addEventListener("click", () => {
    randomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);
    missed_guesses = 0;

    let chosenButtons = document.querySelectorAll(".chosen");
    for (let i = 0; i < chosenButtons.length; i++) {

        chosenButtons[i].classList.remove("chosen");
    };
    let imgs = document.getElementsByTagName("img")[0];
    for (let i = 0; i < imgs.length; i++) {

        imgs[missed_guesses].src = "images/liveHeart.png";
    };

})

