import React, {useState} from 'react';

import './App.css';

function App() {

  const questions = [
    {
      questionText: 'Столица США ?',
      answerOptions: [
        {
          answerText: 'Бостон', 
          isCorrect: false,
        },
        {
          answerText: 'Вашингтон', 
          isCorrect: true,
        },
        {
          answerText: 'Нью-Йорк', 
          isCorrect: false,
        },
        {
          answerText: 'Лос-Анджелес', 
          isCorrect: false,
        },
      ]
    },
    {
      questionText: 'Какая компания разработала React ?',
      answerOptions: [
        {
          answerText: 'Amazon',
          isCorrect: false,
        },
        {
          answerText: 'Facebook',
          isCorrect: true,
        },
        {
          answerText: 'Mail',
          isCorrect: false,
        },
        {
          answerText: 'Google',
          isCorrect: false,
        },
      ]
    },
    {
      questionText: 'Что Не относится ко вселенной Марвел ?',
      answerOptions: [
        {
          answerText: 'Бетмен',
          isCorrect: true,
        },
        {
          answerText: 'Халк',
          isCorrect: false,
        },
        {
          answerText: 'Железный человек',
          isCorrect: false,
        },
        {
          answerText: 'Мстители',
          isCorrect: false,
        },
      ]
    },
    {
      questionText: 'Что не является языком программирования ?',
      answerOptions: [
        {
          answerText: 'GO',
          isCorrect: false,
        },
        {
          answerText: 'HTML',
          isCorrect: true,
        },
        {
          answerText: 'JavaScript',
          isCorrect: false,
        },
        {
          answerText: 'Python',
          isCorrect: false,
        },
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score +1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }


  return (
    <div className="app">
      

      {
        showScore
          ? <div className="section__score">
            <div>
              Правильных ответов {score} из {questions.length}
            </div>
            <button 
              className="refrash__btn"
              onClick={refresh}
            >
            Попробовать еще раз...
            </button>
          </div>
          : <div className="quizz">
            <div className="question__section">
              <div className="question__count">
                <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className="question__text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer__section">
              {questions[currentQuestion].answerOptions.map(item =>
              (<button
                onClick={() => handleAnswerOptionClick(item.isCorrect)}
              >
                {item.answerText}
              </button>)
              )}
            </div>
          </div>
      }

    
    </div>
  );
}

export default App;
