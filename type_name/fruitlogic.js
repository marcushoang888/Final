//the score
let score = 0;
const scoreDisplay = document.getElementById("score");
//counting until streak
let streak = 0;
const Victory = document.getElementById("victory");

//the names and variables that will have cards applied
const fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "strawberry",
    "pear",
    "durian",
    "melon",
    "dragonfruit",
    "pineapple",
    "mango",
];

//the looping system
const cards = document.querySelectorAll(".quiz-card");

cards.forEach((card) => {
    const img = card.querySelector("img");
    const input = card.querySelector(".answer");
    const button = card.querySelector(".submit");
    const correctText = card.querySelector(".correct");
    const wrongText = card.querySelector(".wrong");

    //randomizing which fruit youll get
    let fruit = getRandomFruit();
    setFruit(fruit);

    function getRandomFruit() {
        return fruits[Math.floor(Math.random() * fruits.length)];
    }
    //changing fruits after you have gotten an answer correct
    function setFruit(newFruit) {
        fruit = newFruit;
        img.src = "./src/" + fruit + ".png";
        img.alt = fruit;
        input.value = "";
        correctText.style.display = "none";
        wrongText.style.display = "none";
    }

    function changeFruit() {
        let newFruit;
        do {
            newFruit = getRandomFruit();
        } while (newFruit === fruit);

        setFruit(newFruit);
    }

    //for clicking the submit buttoon
    button.addEventListener("click", () => {
        const userAnswer = input.value.trim().toLowerCase();

        if (userAnswer === fruit) {
            score++;
            streak++;
            scoreDisplay.textContent = "Score:" + score;

            //counting up to when you get the win or victory message
            if (streak >= 10) {
                Victory.style.display = "flex";
                input.disabled = "true";
                return;
            }

            correctText.style.display = "block";
            wrongText.style.display = "none";
            setTimeout(changeFruit, 500);
        } else {
            correctText.style.display = "none";
            wrongText.style.display = "block";
        }
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") button.click();
    });
});

function goBack() {
    window.location.href = "../index.html"; //change to file name of the challenge page or main page
}

const ready = document.querySelector(".ready");
const readyContainer = document.querySelector(".ready_container");

var Firsttimer = 4;

ready.addEventListener("click", () => {
    ready.remove();

    const countdown = setInterval(() => {
        Firsttimer--;
        readyContainer.innerHTML = `<div class="countdown">${Firsttimer}</div>`;
        if (Firsttimer == 0) {
            clearInterval(countdown);
            readyContainer.remove();
        }
    }, 1000);
});
