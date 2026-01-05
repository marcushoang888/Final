let score = 0;
let correctCount = 0;

let currentSetIndex = 0;
let listenAudio = null;

const images = document.querySelectorAll(".image-container img");
const result = document.getElementById("result");

const correctSound = new Audio("audio/correct.mp3");
const wrongSound = new Audio("audio/wrong.mp3");

const quizSets = [
    {
        images: ["bike", "bus", "car"],
        correct: "bus",
        audio: "bus",
    },
    {
        images: ["motor", "train", "truck"],
        correct: "train",
        audio: "train",
    },
    {
        images: ["taxi", "van", "scooter"],
        correct: "scooter",
        audio: "scooter",
    },
    {
        images: ["plane", "helicopter", "hot air balloon"],
        correct: "helicopter",
        audio: "helicopter",
    },
    {
        images: ["boat", "ship", "canoe"],
        correct: "boat",
        audio: "boat",
    },
    {
        images: ["police car", "ambulance", "fire truck"],
        correct: "fire truck",
        audio: "fire truck",
    },
    {
        images: ["subway", "monorail", "train"],
        correct: "subway",
        audio: "subway",
    },

    {
        images: ["boat", "ship", "submarine"],
        correct: "ship",
        audio: "ship",
    },
    {
        images: ["bulldozer", "excavator", "dumb truck"],
        correct: "excavator",
        audio: "excavator",
    },
    {
        images: ["canoe", "yacht", "ferry"],
        correct: "ferry",
        audio: "ferry",
    },
];

//  LOAD SET
function loadQuiz() {
    const set = quizSets[currentSetIndex];

    result.textContent = "";

    images.forEach((img, index) => {
        img.src = `images/${set.images[index]}.jpg`;
        img.dataset.answer = set.images[index];
        img.style.pointerEvents = "auto";
        img.classList.remove("correct", "wrong");
    });

    listenAudio = new Audio(`audio/${set.audio}.mp3`);
}

// LISTEN
document.getElementById("playsound").onclick = () => {
    if (listenAudio) {
        listenAudio.currentTime = 0;
        listenAudio.play();
    }
};

// CHECK ANSWER
images.forEach((img) => {
    img.onclick = () => checkAnswer(img.dataset.answer);
});

function checkAnswer(answer) {
    const set = quizSets[currentSetIndex];
    images.forEach((img) => (img.style.pointerEvents = "none"));

    if (answer === set.correct) {
        result.textContent = "✅ Correct!";
        correctSound.play();
        highlight(answer, "correct");

        score += 10;
        correctCount++;
    } else {
        result.textContent = "❌ Wrong!";
        wrongSound.play();
        highlight(answer, "wrong");
        highlight(set.correct, "correct");
    }

    setTimeout(nextSet, 1500);
}

//  NEXT SET
function nextSet() {
    currentSetIndex++;

    if (currentSetIndex >= quizSets.length) {
        showResultScreen();
        return;
    }

    loadQuiz();
}

//  HIGHLIGHT
function highlight(name, type) {
    images.forEach((img) => {
        if (img.dataset.answer === name) {
            img.classList.add(type);
        }
    });
}

// INIT
loadQuiz();

function showResultScreen() {
    document.querySelector(".image-container").style.display = "none";
    document.getElementById("playsound").style.display = "none";
    result.style.display = "none";

    const finalScreen = document.getElementById("final-screen");
    finalScreen.style.display = "block";

    const total = quizSets.length * 10;
    const percent = (score / total) * 100;

    let stars = "⭐☆☆";
    if (percent === 100) stars = "⭐⭐⭐";
    else if (percent >= 60) stars = "⭐⭐☆";

    document.getElementById("stars").textContent = stars;
    document.getElementById(
        "final-score"
    ).textContent = `Your score: ${score} / ${total}`;
}

function restartQuiz() {
    score = 0;
    correctCount = 0;
    currentSetIndex = 0;

    document.querySelector(".image-container").style.display = "";
    document.getElementById("playsound").style.display = "";
    result.style.display = "";
    document.getElementById("final-screen").style.display = "none";

    loadQuiz();
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
