function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

     {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Run Access Memory",
            "Real Application Memory"
        ],
        answer: 0
    },
    {
        question: "What is the main function of RAM?",
        options: [
            "Store data permanently",
            "Process graphics",
            "Temporarily store data for quick access",
            "Control input devices"
        ],
        answer: 2
    },
    {
        question: "RAM is also known as:",
        options: [
            "Permanent Memory",
            "Primary Memory",
            "Secondary Memory",
            "External Memory"
        ],
        answer: 1
    },
    {
        question: "Which type of RAM is faster?",
        options: [
            "DRAM",
            "SRAM",
            "ROM",
            "HDD"
        ],
        answer: 1
    },
    {
        question: "RAM is a type of:",
        options: [
            "Non-volatile memory",
            "Volatile memory",
            "Optical memory",
            "Magnetic memory"
        ],
        answer: 1
    },
    {
        question: "What happens to RAM data when power is turned off?",
        options: [
            "It is saved permanently",
            "It is deleted",
            "It is stored in ROM",
            "It is backed up automatically"
        ],
        answer: 1
    },
    {
        question: "Which of these is NOT a type of RAM?",
        options: [
            "DRAM",
            "SRAM",
            "DDR",
            "ROM"
        ],
        answer: 3
    },
    {
        question: "Increasing RAM helps in:",
        options: [
            "Reducing storage",
            "Slowing system speed",
            "Improving multitasking",
            "Deleting files faster"
        ],
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