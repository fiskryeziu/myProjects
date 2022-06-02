const questions = [
  {
    question: "how much  is 2 +2?",
    answers: [
      { answer: "4", correct: true },
      { answer: "10", correct: false },
    ],
  },
  {
    question: "Best js FrameWork?",
    answers: [
      { answer: "React", correct: true },
      { answer: "Vue", correct: false },
    ],
  },
  {
    question: "Capital City of Kosova",
    answers: [
      { answer: "Prizren", correct: false },
      { answer: "Prishtina", correct: true },
    ],
  },
];


const showQuestionEl = document.querySelector(".question");
const btnAnswers = document.querySelectorAll(".answer");
const btnSubmit = document.querySelector(".btnsubmit");
const btnA = document.getElementById("a");
const btnB = document.getElementById("b");
const showResult = document.querySelector(".wrapper");
let currentQuestion = 0;
let score = 0;
let answersEl = questions[currentQuestion].answers;


function loadQuestion() {
  showQuestionEl.innerText = questions[currentQuestion].question;
  // loopAnswers(btnAnswers, answersEl);
  for (let i = 0; i < answersEl.length; i++) {
    btnAnswers[i].innerText = questions[currentQuestion].answers[i].answer;
  }
}

loadQuestion();

btnSubmit.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    enableBtn();
  } else {
    showResult.innerHTML = `<h2>Your score is ${score} `;
  }
});

function showSubmitBtn() {
  let show = btnSubmit.classList.add("show");
  return show;
}
function disableBtn() {
  let disable = btnAnswers.forEach((button) => (button.disabled = true));
  return disable;
}
function enableBtn() {
  let enable = btnAnswers.forEach((button) => (button.disabled = false));
  return enable;
}

btnA.addEventListener("click", () => {
  for (let i = 0; i < answersEl.length; i++) {
    let isEqual =
      btnA.innerText === questions[currentQuestion].answers[i].answer;
    if (isEqual === true) {
      let correct = questions[currentQuestion].answers[i].correct;
      if (correct === true) {
        // console.log("e sakt");
        score++;
      } else {
        // console.log("e pa sakt");
      }
    }
  }
  disableBtn();
  showSubmitBtn();
});
btnB.addEventListener("click", () => {
  for (let i = 0; i < answersEl.length; i++) {
    let isEqual =
      btnB.innerText == questions[currentQuestion].answers[i].answer;
    if (isEqual === true) {
      let correct = questions[currentQuestion].answers[i].correct;
      if (correct === true) {
        // console.log("e sakt");
        score++;
      } else {
        // console.log("e pasakt");
      }
    }
  }
  disableBtn();
  showSubmitBtn();
});
//when answer clicked show submit button for the next quesition
