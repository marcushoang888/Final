const items = [
    {
        id: 1,
        name: "Pencil",
        correctBox: false,
        pic: "./src/pencil.png",
    },
    {
        id: 2,
        name: "Eraser",
        correctBox: false,
        pic: "./src/eraser.png",
    },
    {
        id: 3,
        name: "Book",
        correctBox: false,
        pic: "./src/book.png",
    },
    {
        id: 4,
        name: "Chair",
        correctBox: false,
        pic: "./src/chair.png",
    },
    {
        id: 5,
        name: "Desk",
        correctBox: false,
        pic: "./src/desk.png",
    },
    {
        id: 6,
        name: "Calculator",
        correctBox: false,
        pic: "./src/calculator.png",
    },
    {
        id: 7,
        name: "Backpack",
        correctBox: false,
        pic: "./src/backpack.webp",
    },
    {
        id: 8,
        name: "Ruler",
        correctBox: false,
        pic: "./src/ruler.png",
    },
    {
        id: 9,
        name: "Pen",
        correctBox: false,
        pic: "./src/pen.png",
    },
    {
        id: 10,
        name: "Notebook",
        correctBox: false,
        pic: "./src/notebook.png",
    },
];

var container = document.querySelector(".container");
items.forEach((item) => {
    container.innerHTML += `<div ondragover="dragover(event)" ondrop="dragdrop(event)" id="${item.name}" class="box" >
        <img src="${item.pic}" alt="${item.name}"></div>`;
});

function shuffle(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
}

const shuffledItems = shuffle(items);
shuffledItems.forEach((item) => {
    container.innerHTML += `<p class="item_name" id="value_${item.name}" ondragstart="dragstart(event)"  draggable = "true"data-correct-box="${item.name}">${item.name}</p>`;
});

function dragstart(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function dragover(e) {
    e.preventDefault();
}

var countCorrect = 0;
function dragdrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var dataTag = document.getElementById(data);
    var correctid = dataTag.getAttribute("data-correct-box");

    const box = e.target.closest(".box");
    var currentid = box.id;
    if (currentid == correctid) {
        e.target.appendChild(document.getElementById(data));
        countCorrect++;
        console.log(countCorrect);
    }
}

const ready = document.querySelector(".ready");
const readyContainer = document.querySelector(".ready_container");
const timerContainer = document.querySelector(".timerContainer");

var Firsttimer = 4;
var timer = 21;

ready.addEventListener("click", () => {
    ready.remove();
    const countdown = setInterval(() => {
        Firsttimer--;
        readyContainer.innerHTML = `<div class="countdown">${Firsttimer}</div>`;
        if (Firsttimer == 0) {
            clearInterval(countdown);
            readyContainer.remove();
            const countdownGame = setInterval(() => {
                console.log(timer);

                timer--;
                timerContainer.innerHTML = `
                <img class="timerIcon" src="./src/timer.png" alt="" />
                <h1>${timer}</h1>`;
                if (timer == 0) {
                    clearInterval(countdownGame);
                    if (countCorrect < 10) {
                        timerContainer.innerHTML = `
                        <div style="margin: 1rem; display: flex">
                            <h1  class="lose">You Lose!</h1>
                            <button onclick="location.reload()"><i class="fa-solid fa-arrow-rotate-right"></i></button>
                        </div>
                   `;
                        clearInterval(countdownGame);
                    }
                }
                if (countCorrect == 10) {
                    timerContainer.innerHTML = `<h1 style="margin: 2rem" class="win">Congrats! You overcame this challenge!</h1><button onclick="location.reload()"><i class="fa-solid fa-arrow-rotate-right"></i></button>`;

                    clearInterval(countdownGame);
                }
            }, 1000);
        }
    }, 1000);
});
