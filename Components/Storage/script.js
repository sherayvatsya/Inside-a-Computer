function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

    {
        question: "Which storage device is faster?",
        options: ["HDD", "SSD", "USB Drive", "CD"],
        answer: 1
    },
    {
        question: "Which storage type uses spinning disks?",
        options: ["SSD", "Cloud Storage", "HDD", "RAM"],
        answer: 2
    },
    {
        question: "Which storage keeps data even after power off?",
        options: ["RAM", "Cache", "Storage", "Register"],
        answer: 2
    },
    {
        question: "Which is an example of cloud storage?",
        options: ["Google Drive", "SSD", "HDD", "RAM"],
        answer: 0
    },
    {
        question: "Which device is portable storage?",
        options: ["CPU", "USB Drive", "GPU", "Monitor"],
        answer: 1
    },
    {
        question: "Which storage is more durable?",
        options: ["HDD", "SSD", "CD", "DVD"],
        answer: 1
    },
    {
        question: "What does HDD stand for?",
        options: [
            "Hard Disk Drive",
            "High Data Drive",
            "Hybrid Disk Device",
            "Hard Data Device"
        ],
        answer: 0
    },
    {
        question: "Which storage is used for online data access?",
        options: ["USB", "SSD", "Cloud Storage", "HDD"],
        answer: 2
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