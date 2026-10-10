// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("dilipTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    if (themeBtn) {
        themeBtn.textContent = "☀️";
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "dilipTheme",
            isLight ? "light" : "dark"
        );

        themeBtn.textContent = isLight ? "☀️" : "🌙";
    });
}


// ================= AI MODAL =================

const aiModal = document.getElementById("aiModal");
const aiOpenBtn = document.getElementById("aiOpenBtn");
const aiCloseBtn = document.getElementById("aiCloseBtn");
const aiAskBtn = document.getElementById("aiAskBtn");
const aiQuestion = document.getElementById("aiQuestion");
const aiResponse = document.getElementById("aiResponse");

if (aiOpenBtn) {
    aiOpenBtn.addEventListener("click", () => {
        aiModal.classList.add("active");
    });
}

if (aiCloseBtn) {
    aiCloseBtn.addEventListener("click", () => {
        aiModal.classList.remove("active");
    });
}

if (aiModal) {
    aiModal.addEventListener("click", event => {

        if (event.target === aiModal) {
            aiModal.classList.remove("active");
        }

    });
}

if (aiAskBtn) {
    aiAskBtn.addEventListener("click", () => {

        const question = aiQuestion.value.trim();

        if (!question) {

            aiResponse.textContent =
                "Please write a question first.";

            return;
        }

        aiResponse.innerHTML =
            "🤖 <strong>Dilip AI:</strong><br><br>" +
            "The real AI explanation system will be connected " +
            "in the next development stage. It will explain the " +
            "answer step-by-step and can later support Hindi, " +
            "Nepali, English and Hinglish.";

    });
}


// ================= COMING SOON =================

function showComingSoon(featureName) {

    alert(
        featureName +
        " is planned for the next development stage."
    );

}


// ================= STUDY TIMER =================

let timerSeconds = 25 * 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const resetTimer = document.getElementById("resetTimer");

function updateTimerDisplay() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

if (startTimer) {

    startTimer.addEventListener("click", () => {

        if (timerInterval !== null) {
            return;
        }

        timerInterval = setInterval(() => {

            if (timerSeconds <= 0) {

                clearInterval(timerInterval);
                timerInterval = null;

                alert("🎉 Study session completed!");

                return;
            }

            timerSeconds--;

            updateTimerDisplay();

        }, 1000);

    });

}

if (stopTimer) {

    stopTimer.addEventListener("click", () => {

        clearInterval(timerInterval);

        timerInterval = null;

    });

}

if (resetTimer) {

    resetTimer.addEventListener("click", () => {

        clearInterval(timerInterval);

        timerInterval = null;

        timerSeconds = 25 * 60;

        updateTimerDisplay();

    });

}

updateTimerDisplay();


// ================= BRAIN TEST =================

const questions = [

    {
        category: "GK",
        question: "What is the capital city of Nepal?",
        options: [
            "Pokhara",
            "Kathmandu",
            "Biratnagar",
            "Janakpur"
        ],
        answer: 1,
        explanation: "Kathmandu is the capital city of Nepal."
    },

    {
        category: "GK",
        question: "Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2,
        explanation: "The Pacific Ocean is the largest ocean."
    },

    {
        category: "GK",
        question: "Which planet is known as the Red Planet?",
        options: [
            "Venus",
            "Mars",
            "Jupiter",
            "Mercury"
        ],
        answer: 1,
        explanation: "Mars is called the Red Planet because of its reddish appearance."
    },

    {
        category: "GK",
        question: "Which is the highest mountain in the world?",
        options: [
            "K2",
            "Mount Everest",
            "Kangchenjunga",
            "Makalu"
        ],
        answer: 1,
        explanation: "Mount Everest is the world's highest mountain above sea level."
    },

    {
        category: "GK",
        question: "Which country is famous for the Eiffel Tower?",
        options: [
            "Italy",
            "France",
            "Germany",
            "Spain"
        ],
        answer: 1,
        explanation: "The Eiffel Tower is located in Paris, France."
    },

    {
        category: "GK",
        question: "How many continents are there?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 2,
        explanation: "There are seven commonly recognized continents."
    },

    {
        category: "GK",
        question: "Which is the largest planet in our Solar System?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        answer: 2,
        explanation: "Jupiter is the largest planet in our Solar System."
    },

    {
        category: "GK",
        question: "Which gas do plants mainly use during photosynthesis?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ],
        answer: 2,
        explanation: "Plants use carbon dioxide during photosynthesis."
    },

    {
        category: "GK",
        question: "Which is the fastest land animal?",
        options: [
            "Lion",
            "Cheetah",
            "Horse",
            "Tiger"
        ],
        answer: 1,
        explanation: "The cheetah is the fastest land animal."
    },

    {
        category: "GK",
        question: "Which organ pumps blood around the human body?",
        options: [
            "Brain",
            "Lungs",
            "Heart",
            "Kidney"
        ],
        answer: 2,
        explanation: "The heart pumps blood throughout the body."
    },

    {
        category: "IQ",
        question: "What comes next: 2, 4, 8, 16, ?",
        options: [
            "20",
            "24",
            "32",
            "36"
        ],
        answer: 2,
        explanation: "Each number is multiplied by 2."
    },

    {
        category: "IQ",
        question: "What comes next: 3, 6, 12, 24, ?",
        options: [
            "30",
            "36",
            "48",
            "50"
        ],
        answer: 2,
        explanation: "Each number is multiplied by 2."
    },

    {
        category: "IQ",
        question: "If all cats are animals and some animals are black, which statement must be true?",
        options: [
            "All cats are black",
            "Some cats are black",
            "Cats are animals",
            "No cats are animals"
        ],
        answer: 2,
        explanation: "The first statement directly tells us cats are animals."
    },

    {
        category: "IQ",
        question: "Which number does not belong: 2, 4, 6, 9, 10?",
        options: [
            "2",
            "6",
            "9",
            "10"
        ],
        answer: 2,
        explanation: "9 is odd while the other numbers are even."
    },

    {
        category: "IQ",
        question: "If yesterday was Monday, what day is tomorrow?",
        options: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
        ],
        answer: 2,
        explanation: "If yesterday was Monday, today is Tuesday and tomorrow is Wednesday."
    },

    {
        category: "IQ",
        question: "A clock shows 3:00. What is the angle between the hour and minute hands?",
        options: [
            "45°",
            "60°",
            "90°",
            "180°"
        ],
        answer: 2,
        explanation: "At 3:00 the hands form a right angle of 90°."
    },

    {
        category: "IQ",
        question: "If 5 machines make 5 items in 5 minutes, how long would 1 machine take to make 1 item?",
        options: [
            "1 minute",
            "5 minutes",
            "10 minutes",
            "25 minutes"
        ],
        answer: 1,
        explanation: "Each machine makes one item in 5 minutes."
    },

    {
        category: "IQ",
        question: "Which word is different from the others?",
        options: [
            "Apple",
            "Mango",
            "Banana",
            "Carrot"
        ],
        answer: 3,
        explanation: "Carrot is a vegetable while the others are fruits."
    },

    {
        category: "IQ",
        question: "What is half of 80 plus 10?",
        options: [
            "40",
            "45",
            "50",
            "60"
        ],
        answer: 2,
        explanation: "Half of 80 is 40, then 40 + 10 = 50."
    },

    {
        category: "IQ",
        question: "A farmer has 10 sheep. All but 3 run away. How many are left?",
        options: [
            "3",
            "7",
            "10",
            "0"
        ],
        answer: 0,
        explanation: "All but 3 means 3 sheep remain."
    },

    {
        category: "MATH",
        question: "What is 15 × 4?",
        options: [
            "45",
            "50",
            "60",
            "75"
        ],
        answer: 2,
        explanation: "15 × 4 = 60."
    },

    {
        category: "MATH",
        question: "What is 144 ÷ 12?",
        options: [
            "10",
            "12",
            "14",
            "16"
        ],
        answer: 1,
        explanation: "144 divided by 12 equals 12."
    },

    {
        category: "MATH",
        question: "What is 25% of 200?",
        options: [
            "25",
            "40",
            "50",
            "75"
        ],
        answer: 2,
        explanation: "25% of 200 is 50."
    },

    {
        category: "MATH",
        question: "What is the square of 12?",
        options: [
            "124",
            "144",
            "154",
            "164"
        ],
        answer: 1,
        explanation: "12 × 12 = 144."
    },

    {
        category: "SCIENCE",
        question: "Which organ helps humans breathe?",
        options: [
            "Heart",
            "Lungs",
            "Stomach",
            "Brain"
        ],
        answer: 1,
        explanation: "The lungs are the main organs used for breathing."
    },

    {
        category: "SCIENCE",
        question: "What is H2O commonly called?",
        options: [
            "Salt",
            "Water",
            "Oxygen",
            "Hydrogen"
        ],
        answer: 1,
        explanation: "H2O is the chemical formula for water."
    },

    {
        category: "SCIENCE",
        question: "Which force pulls objects toward Earth?",
        options: [
            "Magnetism",
            "Friction",
            "Gravity",
            "Pressure"
        ],
        answer: 2,
        explanation: "Gravity attracts objects toward Earth."
    },

    {
        category: "SCIENCE",
        question: "What is the boiling point of water at standard atmospheric pressure?",
        options: [
            "50°C",
            "75°C",
            "100°C",
            "150°C"
        ],
        answer: 2,
        explanation: "Water boils at 100°C at standard atmospheric pressure."
    },

    {
        category: "TECH",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        answer: 0,
        explanation: "CPU stands for Central Processing Unit."
    },

    {
        category: "TECH",
        question: "Which device is commonly used to type text into a computer?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Printer"
        ],
        answer: 1,
        explanation: "A keyboard is commonly used to type text."
    },

    {
        category: "TECH",
        question: "What does WWW stand for?",
        options: [
            "World Wide Web",
            "World Web Window",
            "Wide World Website",
            "Web World Wire"
        ],
        answer: 0,
        explanation: "WWW stands for World Wide Web."
    },

    {
        category: "GK",
        question: "Which is the smallest prime number?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: 2,
        explanation: "2 is the smallest prime number."
    },

    {
        category: "GK",
        question: "How many days are there in a leap year?",
        options: [
            "364",
            "365",
            "366",
            "367"
        ],
        answer: 2,
        explanation: "A leap year has 366 days."
    },

    {
        category: "IQ",
        question: "What comes next: 1, 4, 9, 16, ?",
        options: [
            "20",
            "24",
            "25",
            "30"
        ],
        answer: 2,
        explanation: "These are square numbers: 1², 2², 3², 4², 5²."
    },

    {
        category: "IQ",
        question: "If A is taller than B and B is taller than C, who is shortest?",
        options: [
            "A",
            "B",
            "C",
            "Cannot tell"
        ],
        answer: 2,
        explanation: "A is taller than B, and B is taller than C, so C is shortest."
    },

    {
        category: "GK",
        question: "Which animal is known as the King of the Jungle?",
        options: [
            "Tiger",
            "Lion",
            "Elephant",
            "Leopard"
        ],
        answer: 1,
        explanation: "The lion is commonly called the King of the Jungle."
    },

    {
        category: "GK",
        question: "Which planet is closest to the Sun?",
        options: [
            "Earth",
            "Venus",
            "Mercury",
            "Mars"
        ],
        answer: 2,
        explanation: "Mercury is the closest planet to the Sun."
    },

    {
        category: "SCIENCE",
        question: "Which part of a plant usually absorbs water from soil?",
        options: [
            "Flower",
            "Leaf",
            "Root",
            "Fruit"
        ],
        answer: 2,
        explanation: "Roots absorb water and minerals from the soil."
    },

    {
        category: "IQ",
        question: "You have 3 apples and take away 2. How many apples do you have?",
        options: [
            "1",
            "2",
            "3",
            "5"
        ],
        answer: 1,
        explanation: "If you take away 2 apples, you have taken 2 apples."
    }

];


// Shuffle questions so the quiz feels different.

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

const quizQuestions = shuffleArray(questions);

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizCategory =
    document.getElementById("quizCategory");

const quizNumber =
    document.getElementById("quizNumber");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const quizScore =
    document.getElementById("quizScore");

const quizProgress =
    document.getElementById("quizProgress");

const quizResult =
    document.getElementById("quizResult");

const nextQuestion =
    document.getElementById("nextQuestion");


function loadQuestion() {

    answered = false;

    const question =
        quizQuestions[currentQuestion];

    quizCategory.textContent =
        question.category;

    quizNumber.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    quizQuestion.textContent =
        question.question;

    quizScore.textContent =
        score;

    quizProgress.style.width =
        `${((currentQuestion) / quizQuestions.length) * 100}%`;

    quizOptions.innerHTML = "";

    quizResult.textContent = "";

    nextQuestion.style.display = "none";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.textContent =
            option;

        button.addEventListener("click", () => {

            answerQuestion(index, button);

        });

        quizOptions.appendChild(button);

    });

}


function answerQuestion(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".quiz-option");


    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === question.answer) {
            button.classList.add("correct");
        }

    });


    if (selectedIndex === question.answer) {

        score++;

        quizScore.textContent =
            score;

        quizResult.innerHTML =
            `🎉 <strong>Correct!</strong> ${question.explanation}`;

    } else {

        selectedButton.classList.add("wrong");

        quizResult.innerHTML =
            `❌ <strong>Not quite.</strong> ${question.explanation}`;

    }


    quizProgress.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

    nextQuestion.style.display =
        "inline-block";

}


nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {

        showFinalScore();

        return;
    }

    loadQuestion();

});


function showFinalScore() {

    quizCategory.textContent =
        "RESULT";

    quizNumber.textContent =
        "Brain Test Complete";

    quizQuestion.textContent =
        `🎉 Your final score is ${score} / ${quizQuestions.length}`;

    quizOptions.innerHTML = "";

    quizProgress.style.width = "100%";

    let message = "";

    const percentage =
        (score / quizQuestions.length) * 100;

    if (percentage >= 90) {

        message =
            "🔥 Outstanding! Your brain power is amazing.";

    } else if (percentage >= 75) {

        message =
            "🏆 Excellent! You have strong knowledge and logic.";

    } else if (percentage >= 50) {

        message =
            "👍 Good job! Keep learning and try again.";

    } else {

        message =
            "💪 Keep practicing. Your score can improve!";

    }

    quizResult.innerHTML =
        `<strong>${message}</strong>`;

    nextQuestion.textContent =
        "Play Again 🔄";

    nextQuestion.style.display =
        "inline-block";

    nextQuestion.onclick = () => {

        location.reload();

    };

}


loadQuestion();