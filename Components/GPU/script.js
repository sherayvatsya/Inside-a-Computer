function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

     {
        question: "What does GPU stand for?",
        options: ["Graphics Processing Unit", "General Processing Unit", "Graphical Performance Unit", "Gaming Processor Unit"],
        answer: 0
    },
    {
        question: "Which GPU is better for gaming?",
        options: ["Integrated GPU", "Dedicated GPU", "CPU", "RAM"],
        answer: 1
    },
    {
        question: "What is VRAM used for?",
        options: ["Storing graphics data", "Processing CPU tasks", "Cooling system", "Power supply"],
        answer: 0
    },
    {
        question: "Integrated GPU is usually found in?",
        options: ["Motherboard/CPU", "Hard Disk", "Monitor", "Keyboard"],
        answer: 0
    },
    {
        question: "Which GPU type is more power efficient?",
        options: ["Dedicated GPU", "Integrated GPU", "External GPU", "All are same"],
        answer: 1
    },
    {
        question: "GPU is mainly used for?",
        options: ["Graphics rendering", "Typing", "Storage", "Networking"],
        answer: 0
    },
    {
        question: "Which company makes GPUs?",
        options: ["NVIDIA", "AMD", "Intel", "All of these"],
        answer: 3
    },
    {
        question: "External GPU is connected using?",
        options: ["USB/Thunderbolt", "HDMI", "RAM slot", "Power cable"],
        answer: 0
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