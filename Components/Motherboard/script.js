function scrollToDetails() {
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// Quiz Data
const quiz = [

    {
        question: "What is the main function of a motherboard?",
        options: [
            "To store data permanently",
            "To connect and communicate between all components",
            "To display graphics",
            "To provide internet access"
        ],
        answer: 1
    },
    {
        question: "Where is the CPU installed on the motherboard?",
        options: [
            "RAM Slot",
            "Expansion Slot",
            "CPU Socket",
            "Power Connector"
        ],
        answer: 2
    },
    {
        question: "Which component temporarily stores data for quick access?",
        options: [
            "Hard Disk",
            "RAM",
            "CPU",
            "GPU"
        ],
        answer: 1
    },
    {
        question: "What does BIOS/UEFI do?",
        options: [
            "Runs games",
            "Stores movies",
            "Initializes hardware during startup",
            "Connects to the internet"
        ],
        answer: 2
    },
    {
        question: "Which slot is used to add a graphics card?",
        options: [
            "SATA Slot",
            "PCIe Slot",
            "RAM Slot",
            "USB Port"
        ],
        answer: 1
    },
    {
        question: "Which motherboard size is the largest?",
        options: [
            "Mini-ITX",
            "Micro-ATX",
            "ATX",
            "E-ATX"
        ],
        answer: 3
    },
    {
        question: "What is the function of chipset?",
        options: [
            "Cooling the system",
            "Managing data flow between components",
            "Storing files",
            "Displaying output"
        ],
        answer: 1
    },
    {
        question: "Which connector is used for storage devices?",
        options: [
            "PCIe",
            "SATA/NVMe",
            "RAM Slot",
            "CPU Socket"
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