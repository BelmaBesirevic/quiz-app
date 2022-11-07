const data = [
  {
    id: 1,
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { answer: '< script >', isCorrect: true },
      { answer: '< js >', isCorrect: false },
      { answer: '< scripting >', isCorrect: false },
      { answer: '< javascript >', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
      {
        answer: ' Both the head section and the <body> section are correct',
        isCorrect: true,
      },
      { answer: 'In the head section', isCorrect: false },
      { answer: 'In the body section', isCorrect: false },
      { answer: 'In the meta section', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'How do you create a function in JavaScript?',
    answers: [
      { answer: 'Function = myFunction()', isCorrect: false },
      { answer: 'function : myFunction()', isCorrect: false },
      { answer: 'function myFunction()', isCorrect: true },
      { answer: 'myFunction()', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'How can you add a comment in a JavaScript?',
    answers: [
      { answer: "'This is a comment", isCorrect: false },
      { answer: '** This is a comment *', isCorrect: false },
      { answer: 'This is a comment', isCorrect: false },
      { answer: '// This is a comment', isCorrect: true },
    ],
  },
]

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const question = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const play = document.querySelector('.play')
const submit = document.querySelector('.submit')

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer

const playAgain = () => {
  qIndex = 0
  correctCount = 0
  wrongCount = 0
  total = 0
  showQuestion(qIndex)
}

play.addEventListener('click', () => {
  resultScreen.style.display = 'none'
  gameScreen.style.display = 'block'
  playAgain()
})

const showResult = () => {
  resultScreen.style.display = 'block'
  gameScreen.style.display = 'none'

  resultScreen.querySelector(
    '.correct'
  ).textContent = `Correct Answers: ${correctCount}`
  resultScreen.querySelector(
    '.wrong'
  ).textContent = `Wrong Answers: ${wrongCount}`
  resultScreen.querySelector('.score').textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`
}

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult()
  selectedAnswer = null
  question.textContent = data[qNumber].question
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
      <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
      <label for=${index}>${item.answer}</label>
      </div>
    `
    )
    .join('')

  selectAnswer()
}

const selectAnswer = () => {
  answersContainer.querySelectorAll('input').forEach((el) => {
    el.addEventListener('click', (e) => {
      selectedAnswer = e.target.value
    })
  })
}

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++
      qIndex++
      showQuestion(qIndex)
    } else alert('Please choose an answer')
  })
}

showQuestion(qIndex)
submitAnswer()
