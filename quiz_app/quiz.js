const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Bengaluru", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which language runs in browser?",
        answers: [
            { text: "C++", correct: false },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What is the fullform of HTML?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Hyper makeup language", correct: false },
            { text: "High level language", correct: false },
            { text: "High transform language", correct: false }
        ]
    },
    {
        question: "Which subatomic particle carries a positive charge?",
        answers: [
            { text: "Neutron", correct: false },
            { text: "Electron", correct: false },
            { text: "Atom", correct: false },
            { text: "Proton", correct: true }
        ]
    },
    {
        question: "Which planet is called Red Planet?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        answerButtons.appendChild(button);

        button.addEventListener("click", () => {
            const allButtons = answerButtons.children;
            for(let btn of allButtons) {
                btn.disabled = true;
                btn.style.cursor = "default";
            }
            if(answer.correct) {
                button.classList.add("checked");
                score++;
            } else {
                button.classList.add("unchecked");

                currentQuestion.answers.forEach((ans, index) => {
                    if(ans.correct) {
                        allButtons[index].classList.add("checked");
                    }
                });
            }

            nextBtn.style.display = "block";
        });
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.innerText = `Quiz Completed! You scored ${score} out of ${questions.length}`;

    answerButtons.innerHTML = "";
    nextBtn.style.display = "none";
}

showQuestion();