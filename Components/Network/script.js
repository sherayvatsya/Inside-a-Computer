function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

     {
    question: "What is a computer network?",
    options: ["A single device", "A group of connected devices", "A software program", "An input device"],
    answer: 1
},
{
    question: "Which is the largest network?",
    options: ["LAN", "MAN", "WAN", "Internet"],
    answer: 3
},
{
    question: "What does LAN stand for?",
    options: ["Large Area Network", "Local Area Network", "Long Area Network", "Light Area Network"],
    answer: 1
},
{
    question: "Which device connects different networks?",
    options: ["Switch", "Router", "Keyboard", "Monitor"],
    answer: 1
},
{
    question: "Which network covers a city?",
    options: ["LAN", "PAN", "MAN", "WAN"],
    answer: 2
},
{
    question: "Which connection type uses cables?",
    options: ["Wireless", "Bluetooth", "Wired", "Wi-Fi"],
    answer: 2
},
{
    question: "What is the function of a switch?",
    options: ["Connect different networks", "Connect devices in same network", "Store data", "Provide power"],
    answer: 1
},
{
    question: "Which protocol is used for web browsing?",
    options: ["FTP", "HTTP", "SMTP", "TCP"],
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