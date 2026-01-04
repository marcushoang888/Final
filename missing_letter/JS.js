const questions = [
    {
        word: "C_T",
        answer: "A",
        image: "Cat.jpeg",
    },
    {
        word: "D_G",
        answer: "O",
        image: "DOG.jpg",
    },
    {
        word: "CHI_KEN",
        answer: "C",
        image: "CHICKEN.jpg",
    },
    {
        word: "TI_ER",
        answer: "G",
        image: "TIGER.jpg",
    },
    {
        word: "BI_D",
        answer: "R",
        image: "BIRD.jpg",
    },
    {
        word: "FO_",
        answer: "X",
        image: "FOX.jpeg",
    },
    {
        word: "KIT_EN",
        answer: "T",
        image: "CAT.jpg",
    },
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("animalWord").textContent =
        questions[currentQuestion].word;
    document.getElementById("animalImage").src =
        questions[currentQuestion].image;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").style.display = "none"; //Hide again
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toUpperCase();
    const correct = questions[currentQuestion].answer;
    const result = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");

    if (userAnswer === correct) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
        nextBtn.style.display = "inline-block"; //Show Next button
    } else {
        result.textContent = "❌ Try again!";
        result.style.color = "red";
        nextBtn.style.display = "none"; //Keep hidden
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showCongrats();
        return;
        //currentQuestion = 0; //restart game
    }

    loadQuestion();
}

/* Show Contgratulations after the last question */
function showCongrats() {
    const congrats = document.getElementById("congrats");
    congrats.style.display = "flex";

    document.getElementById("congrats").style.opacity = "1";

    // Hide game elements //
    document.getElementById("animalImage").style.display = "none";
    document.getElementById("animalWord").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("congrats").style.display = "flex";
}

// Load first question when page opens
loadQuestion();

function goBack() {
    window.location.href = "../index.html"; //change to file name of the challenge page or main page
	
}
