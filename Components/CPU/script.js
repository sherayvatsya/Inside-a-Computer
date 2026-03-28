function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Performance Unit",
            "Control Processing Unit"
        ],
        answer: 0
    },
    {
        question: "What is the main function of the CPU?",
        options: [
            "Store data permanently",
            "Process instructions",
            "Display graphics",
            "Provide internet"
        ],
        answer: 1
    },
    {
        question: "Which component is known as the brain of the computer?",
        options: [
            "RAM",
            "Hard Disk",
            "CPU",
            "Motherboard"
        ],
        answer: 2
    },
    {
        question: "Which part of CPU performs calculations?",
        options: [
            "Control Unit",
            "ALU (Arithmetic Logic Unit)",
            "RAM",
            "Cache"
        ],
        answer: 1
    },
    {
        question: "Which unit controls all operations of the CPU?",
        options: [
            "ALU",
            "Control Unit",
            "GPU",
            "Cache"
        ],
        answer: 1
    },
    {
        question: "What is cache memory?",
        options: [
            "Permanent storage",
            "Temporary high-speed memory inside CPU",
            "External storage",
            "Graphics memory"
        ],
        answer: 1
    },
    {
        question: "Which of the following affects CPU performance?",
        options: [
            "Clock speed",
            "Number of cores",
            "Cache size",
            "All of the above"
        ],
        answer: 3
    },
    {
        question: "What does GHz measure in a CPU?",
        options: [
            "Storage capacity",
            "Processing speed",
            "Screen resolution",
            "Internet speed"
        ],
        answer: 1
    }
];

let index = 0;
let score = 0;
let answered = false; // ✅ added

function loadQuestion() {
    answered = false; // ✅ reset for new question

    document.getElementById("question").innerText = quiz[index].question;
    let optionsHTML = "";

    quiz[index].options.forEach((opt, i) => {
        optionsHTML += `<button onclick="checkAnswer(this, ${i})">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(btn, i) {

    if (answered) return; // ❌ stop multiple clicks
    answered = true;

    let buttons = document.querySelectorAll("#options button");

    buttons.forEach((b, idx) => {
        b.disabled = true; // disable all buttons

        if (idx === quiz[index].answer) {
            b.style.background = "green"; // correct
        } else {
            b.style.background = "red"; // wrong
        }
    });

    if (i === quiz[index].answer) {
        score++;
    }
}

function nextQuestion() {
    index++;
    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quizBox").style.display = "none";
        document.getElementById("score").innerText =
            "🎉 Your Score: " + score + "/" + quiz.length;
    }
}

loadQuestion();