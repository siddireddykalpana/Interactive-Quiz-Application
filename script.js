const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
    answer: "William Shakespeare"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  const q = quiz[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  document.getElementById('feedback').textContent = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.className = 'option-button';
    btn.onclick = () => checkAnswer(option, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  if (answered) return;
  answered = true;

  const correct = quiz[currentQuestion].answer;
  const feedback = document.getElementById('feedback');

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "feedback correct";
    btn.style.backgroundColor = '#c8e6c9';
    score++;
  } else {
    feedback.textContent = ❌ Wrong! Correct answer: ${correct};
    feedback.className = "feedback incorrect";
    btn.style.backgroundColor = '#ffcdd2';
  }
}

function nextQuestion() {
  if (!answered) {
    alert("Please select an answer first.");
    return;
  }

  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById('question').textContent = "Quiz Completed!";
    document.getElementById('options').innerHTML = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('score').textContent = 🎉 Your score: ${score} / ${quiz.length};
    document.getElementById('nextBtn').style.display = 'none';
  }
}

// Initialize quiz
loadQuestion();
