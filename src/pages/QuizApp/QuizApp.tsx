import React, { useState } from "react";
import "./quizApp.scss";
import Radio from "../../components/Radio";

const QUIZ_DATA = [
  {
    question: "What is the most used programming language in 2019?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    answers: ["Florin Pop", "Donald Trump", "Ivan Saldano", "Mihai Andrei"],
    correct: "Donald Trump",
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Cascading Style Sheet",
      "Jason Object Notation",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    answers: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];

const correctAnswers: string[] = QUIZ_DATA.map(info => info.correct)

function QuizApp() {
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [userResults, setUserResults] = useState<string[]>([])

  const questionData = QUIZ_DATA[indexQuestion];
  const { question, answers } = questionData;

  const hasNextQuestion = indexQuestion < QUIZ_DATA.length - 1;

  const chooseAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { value, checked } = e.target;
    if (checked) setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    if (hasNextQuestion) setNextQuestion()
    else finishQuiz()
  }

  const setNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setUserResults(getResult());
    reset()
  }

  const getResult = () => [...userResults, selectedAnswer]

  const reset = () => {
    setSelectedAnswer("")
  }

  const finishQuiz = () => {
    const userAnswers = getResult();
    let totalRightAnswer = 0;
    userAnswers.forEach((ans, index) => {
      const rightAnswer = correctAnswers[index];
      if (ans === rightAnswer) totalRightAnswer += 1;
    })

    alert(`Total right answers: ${totalRightAnswer}`)

    console.log("finishQuiz ~ finishQuiz:", getResult(), correctAnswers)
  }

  return (
    <div className="quizApp">
      <div className="quizApp__main">
        <h1 className="quizApp__title">{question}</h1>
        <p className="quizApp__description">
          We’ll recommend you think carefully.
        </p>
        <ul className="quizApp__anwsers">
          {answers.map((ans, index) => (
            <li key={index}>
              <Radio
                name="quiz-app"
                label={ans}
                onChange={chooseAnswer}
                checked={selectedAnswer === ans}
                value={ans}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="quizApp__footer"
        disabled={!selectedAnswer}
        onClick={nextQuestion}
      >
        {hasNextQuestion ? "Next Question" : "End Quiz"}
      </button>
    </div>
  );
}

export default QuizApp;
